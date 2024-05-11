const express = require('express');
const router = express.Router();
const pool = require('../db');  // Ensure the path to your db.js is correct

// POST route for user sign-up
router.post('/signup', async (req, res) => {
  const { role, email, password } = req.body; // assuming these are the fields you expect
  try {
    const newUserQuery = `
      INSERT INTO users (role, email, password)
      VALUES ($1, $2, $3)
      RETURNING *;  // Returns the new user row
    `;
    const newUser = await pool.query(newUserQuery, [role, email, password]);
    res.json(newUser.rows[0]);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error during user sign-up');
  }
});

module.exports = router;
