const express = require('express');
const { body, validationResult } = require('express-validator');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const router = express.Router();
const pool = require('../db');
const { updateUserCoordinates } = require('../services/zipcodeService');

// Validation middleware
const validateSignup = [
  body('email').isEmail().normalizeEmail().withMessage('Please provide a valid email'),
  body('password').isLength({ min: 6 }).withMessage('Password must be at least 6 characters long'),
  body('role').isIn(['user', 'cook', 'nanny', 'pandit', 'maid', 'tutor', 'yoga_instructor', 'event_planner']).withMessage('Please select a valid role'),
  body('firstName').optional().trim().isLength({ min: 1 }).withMessage('First name is required'),
  body('lastName').optional().trim().isLength({ min: 1 }).withMessage('Last name is required')
];

const validateLogin = [
  body('email').isEmail().normalizeEmail().withMessage('Please provide a valid email'),
  body('password').notEmpty().withMessage('Password is required')
];

// Helper function to create service provider profile
const createServiceProviderProfile = async (userId, role) => {
  const serviceProviderTables = {
    'cook': 'cooks',
    'nanny': 'nannies',
    'pandit': 'pandits',
    'maid': 'maids',
    'tutor': 'tutors',
    'yoga_instructor': 'yoga_instructors',
    'event_planner': 'event_planners'
  };

  const tableName = serviceProviderTables[role];
  if (tableName) {
    await pool.query(
      `INSERT INTO ${tableName} (user_id) VALUES ($1)`,
      [userId]
    );
  }
};

// POST route for user sign-up
router.post('/signup', validateSignup, async (req, res) => {
  try {
    // Check for validation errors
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ 
        success: false, 
        errors: errors.array() 
      });
    }

    const { email, password, role, firstName, lastName, phone, address, city, state, zipCode } = req.body;

    // Check if user already exists
    const existingUser = await pool.query(
      'SELECT * FROM users WHERE email = $1',
      [email]
    );

    if (existingUser.rows.length > 0) {
      return res.status(400).json({
        success: false,
        message: 'User with this email already exists'
      });
    }

    // Hash password
    const saltRounds = 12;
    const passwordHash = await bcrypt.hash(password, saltRounds);

    // Insert new user
    const newUserQuery = `
      INSERT INTO users (email, password_hash, role, first_name, last_name, phone, address, city, state, zip_code)
      VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10)
      RETURNING id, email, role, first_name, last_name, created_at;
    `;
    
    const newUser = await pool.query(newUserQuery, [
      email, passwordHash, role, firstName, lastName, phone, address, city, state, zipCode
    ]);

    // Create service provider profile if applicable
    if (role !== 'user') {
      await createServiceProviderProfile(newUser.rows[0].id, role);
    }

    // Update coordinates if zipcode is provided
    if (zipCode) {
      try {
        await updateUserCoordinates(newUser.rows[0].id, zipCode);
      } catch (error) {
        console.error('Error updating coordinates during signup:', error);
        // Don't fail signup if coordinate update fails
      }
    }

    // Generate JWT token
    const token = jwt.sign(
      { userId: newUser.rows[0].id, email: newUser.rows[0].email, role: newUser.rows[0].role },
      process.env.JWT_SECRET || 'your-secret-key',
      { expiresIn: '24h' }
    );

    res.status(201).json({
      success: true,
      message: 'User registered successfully',
      user: newUser.rows[0],
      token
    });

  } catch (err) {
    console.error('Signup error:', err);
    res.status(500).json({
      success: false,
      message: 'Server error during user sign-up'
    });
  }
});

// POST route for user login
router.post('/login', validateLogin, async (req, res) => {
  try {
    // Check for validation errors
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ 
        success: false, 
        errors: errors.array() 
      });
    }

    const { email, password } = req.body;

    // Find user by email
    const user = await pool.query(
      'SELECT * FROM users WHERE email = $1',
      [email]
    );

    if (user.rows.length === 0) {
      return res.status(401).json({
        success: false,
        message: 'Invalid email or password'
      });
    }

    // Check password
    const isValidPassword = await bcrypt.compare(password, user.rows[0].password_hash);
    if (!isValidPassword) {
      return res.status(401).json({
        success: false,
        message: 'Invalid email or password'
      });
    }

    // Generate JWT token
    const token = jwt.sign(
      { userId: user.rows[0].id, email: user.rows[0].email, role: user.rows[0].role },
      process.env.JWT_SECRET || 'your-secret-key',
      { expiresIn: '24h' }
    );

    // Remove password from response
    const { password_hash, ...userWithoutPassword } = user.rows[0];

    res.json({
      success: true,
      message: 'Login successful',
      user: userWithoutPassword,
      token
    });

  } catch (err) {
    console.error('Login error:', err);
    res.status(500).json({
      success: false,
      message: 'Server error during login'
    });
  }
});

// GET route to get user profile
router.get('/profile', async (req, res) => {
  try {
    const token = req.headers.authorization?.split(' ')[1];
    if (!token) {
      return res.status(401).json({
        success: false,
        message: 'Access token required'
      });
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET || 'your-secret-key');
    
    const user = await pool.query(
      'SELECT id, email, role, first_name, last_name, phone, address, city, state, zip_code, created_at FROM users WHERE id = $1',
      [decoded.userId]
    );

    if (user.rows.length === 0) {
      return res.status(404).json({
        success: false,
        message: 'User not found'
      });
    }

    res.json({
      success: true,
      user: user.rows[0]
    });

  } catch (err) {
    console.error('Profile error:', err);
    res.status(500).json({
      success: false,
      message: 'Server error while fetching profile'
    });
  }
});

// GET route to get service providers by type
router.get('/service-providers/:type', async (req, res) => {
  try {
    const { type } = req.params;
    const { city, rating, price_min, price_max } = req.query;

    const serviceProviderTables = {
      'cook': 'cooks',
      'nanny': 'nannies',
      'pandit': 'pandits',
      'maid': 'maids',
      'tutor': 'tutors',
      'yoga_instructor': 'yoga_instructors',
      'event_planner': 'event_planners'
    };

    const tableName = serviceProviderTables[type];
    if (!tableName) {
      return res.status(400).json({
        success: false,
        message: 'Invalid service provider type'
      });
    }

    let query = `
      SELECT 
        u.id, u.first_name, u.last_name, u.city, u.state,
        sp.*
      FROM users u
      JOIN ${tableName} sp ON u.id = sp.user_id
      WHERE u.role = $1
    `;
    
    const queryParams = [type];
    let paramCount = 1;

    if (city) {
      paramCount++;
      query += ` AND u.city ILIKE $${paramCount}`;
      queryParams.push(`%${city}%`);
    }

    if (rating) {
      paramCount++;
      query += ` AND sp.rating >= $${paramCount}`;
      queryParams.push(rating);
    }

    if (price_min) {
      paramCount++;
      query += ` AND sp.hourly_rate >= $${paramCount}`;
      queryParams.push(price_min);
    }

    if (price_max) {
      paramCount++;
      query += ` AND sp.hourly_rate <= $${paramCount}`;
      queryParams.push(price_max);
    }

    query += ' ORDER BY sp.rating DESC, sp.total_reviews DESC';

    const providers = await pool.query(query, queryParams);

    res.json({
      success: true,
      providers: providers.rows
    });

  } catch (err) {
    console.error('Service providers error:', err);
    res.status(500).json({
      success: false,
      message: 'Server error while fetching service providers'
    });
  }
});

// GET route to get service categories
router.get('/service-categories', async (req, res) => {
  try {
    const categories = await pool.query(
      'SELECT * FROM service_categories WHERE is_active = true ORDER BY name'
    );

    res.json({
      success: true,
      categories: categories.rows
    });

  } catch (err) {
    console.error('Service categories error:', err);
    res.status(500).json({
      success: false,
      message: 'Server error while fetching service categories'
    });
  }
});

// POST route for advanced search with location and availability filtering
router.post('/search', async (req, res) => {
  try {
    const { 
      serviceType, 
      userLat, 
      userLng, 
      maxDistance = 10, 
      date, 
      time,
      city,
      rating,
      price_min,
      price_max
    } = req.body;

    if (!serviceType) {
      return res.status(400).json({
        success: false,
        message: 'Service type is required'
      });
    }

    const serviceProviderTables = {
      'home-cooks': 'cooks',
      'nannies': 'nannies', 
      'puja-services': 'pandits',
      'housekeeping': 'maids',
      'tutoring': 'tutors',
      'yoga': 'yoga_instructors',
      'event-planning': 'event_planners'
    };

    const tableName = serviceProviderTables[serviceType];
    if (!tableName) {
      return res.status(400).json({
        success: false,
        message: 'Invalid service provider type'
      });
    }

    // Base query with distance calculation if coordinates provided
    let query = `
      SELECT 
        u.id, 
        u.first_name, 
        u.last_name, 
        u.city, 
        u.state,
        u.address,
        u.zip_code,
        sp.*
    `;

    // Add distance calculation if user coordinates provided
    if (userLat && userLng) {
      query += `,
        (
          3959 * acos(
            cos(radians($1)) * 
            cos(radians(CAST(u.latitude AS FLOAT))) * 
            cos(radians(CAST(u.longitude AS FLOAT)) - radians($2)) + 
            sin(radians($1)) * 
            sin(radians(CAST(u.latitude AS FLOAT)))
          )
        ) AS distance
      `;
    }

    query += `
      FROM users u
      JOIN ${tableName} sp ON u.id = sp.user_id
      WHERE u.role = $3
    `;

    const queryParams = [];
    let paramCount = 3;

    // Add coordinates if provided
    if (userLat && userLng) {
      queryParams.push(userLat, userLng);
      paramCount = 1;
    } else {
      queryParams.push(serviceType);
      paramCount = 1;
    }

    // Add city filter
    if (city) {
      paramCount++;
      query += ` AND u.city ILIKE $${paramCount}`;
      queryParams.push(`%${city}%`);
    }

    // Add rating filter
    if (rating) {
      paramCount++;
      query += ` AND sp.rating >= $${paramCount}`;
      queryParams.push(rating);
    }

    // Add price filters
    if (price_min) {
      paramCount++;
      query += ` AND sp.hourly_rate >= $${paramCount}`;
      queryParams.push(price_min);
    }

    if (price_max) {
      paramCount++;
      query += ` AND sp.hourly_rate <= $${paramCount}`;
      queryParams.push(price_max);
    }

    // Add distance filter if coordinates provided
    if (userLat && userLng && maxDistance) {
      paramCount++;
      query += ` HAVING distance <= $${paramCount}`;
      queryParams.push(maxDistance);
    }

    // Order by distance if coordinates provided, otherwise by rating
    if (userLat && userLng) {
      query += ' ORDER BY distance ASC';
    } else {
      query += ' ORDER BY sp.rating DESC, sp.total_reviews DESC';
    }

    const providers = await pool.query(query, queryParams);

    // Post-process results for availability filtering
    let filteredProviders = providers.rows;

    // Filter by availability if date and time provided
    if (date && time) {
      const selectedDate = new Date(date);
      const dayOfWeek = selectedDate.toLocaleDateString('en-US', { weekday: 'short' });
      
      filteredProviders = filteredProviders.filter(provider => {
        // This is a simplified availability check
        // In a real app, you'd have a separate availability table
        return provider.availability_days && 
               provider.availability_days.includes(dayOfWeek);
      });
    }

    res.json({
      success: true,
      providers: filteredProviders,
      total: filteredProviders.length,
      searchParams: {
        serviceType,
        maxDistance,
        date,
        time,
        city,
        rating,
        price_min,
        price_max
      }
    });

  } catch (err) {
    console.error('Search error:', err);
    res.status(500).json({
      success: false,
      message: 'Server error during search'
    });
  }
});

module.exports = router;
