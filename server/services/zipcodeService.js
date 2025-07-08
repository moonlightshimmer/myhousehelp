const axios = require('axios');
const pool = require('../db');

// Hardcoded common zip codes for reliability (fallback when API fails)
const COMMON_ZIP_CODES = {
  '94086': { lat: 37.3688, lng: -122.0363 }, // Sunnyvale, CA
  '94087': { lat: 37.3519, lng: -122.0358 }, // Sunnyvale, CA
  '94085': { lat: 37.3894, lng: -122.0816 }, // Sunnyvale, CA
  '94089': { lat: 37.3995, lng: -122.0795 }, // Sunnyvale, CA
  '95123': { lat: 37.2461, lng: -121.8329 }, // San Jose, CA
  '95124': { lat: 37.2578, lng: -121.9197 }, // San Jose, CA
  '95125': { lat: 37.2961, lng: -121.8903 }, // San Jose, CA
  '95126': { lat: 37.3233, lng: -121.9169 }, // San Jose, CA
  '95127': { lat: 37.3669, lng: -121.8236 }, // San Jose, CA
  '95128': { lat: 37.3147, lng: -121.9361 }, // San Jose, CA
  '95129': { lat: 37.3086, lng: -121.9967 }, // San Jose, CA
  '95130': { lat: 37.2889, lng: -121.9814 }, // San Jose, CA
  '95131': { lat: 37.3869, lng: -121.8869 }, // San Jose, CA
  '95132': { lat: 37.4064, lng: -121.8597 }, // San Jose, CA
  '95133': { lat: 37.3717, lng: -121.8578 }, // San Jose, CA
  '95134': { lat: 37.3989, lng: -121.9428 }, // San Jose, CA
  '95135': { lat: 37.2972, lng: -121.7578 }, // San Jose, CA
  '95136': { lat: 37.2689, lng: -121.8486 }, // San Jose, CA
  '95137': { lat: 37.2189, lng: -121.8603 }, // San Jose, CA
  '95138': { lat: 37.2469, lng: -121.7847 }, // San Jose, CA
  '95139': { lat: 37.2289, lng: -121.7703 }, // San Jose, CA
  '95141': { lat: 37.2189, lng: -121.7847 }, // San Jose, CA
  '95148': { lat: 37.3319, lng: -121.7936 }, // San Jose, CA
  '94102': { lat: 37.7793, lng: -122.4193 }, // San Francisco, CA
  '94103': { lat: 37.7725, lng: -122.4147 }, // San Francisco, CA
  '94104': { lat: 37.7913, lng: -122.4017 }, // San Francisco, CA
  '94105': { lat: 37.7864, lng: -122.3892 }, // San Francisco, CA
  '94107': { lat: 37.7625, lng: -122.3950 }, // San Francisco, CA
  '94108': { lat: 37.7925, lng: -122.4073 }, // San Francisco, CA
  '94109': { lat: 37.7925, lng: -122.4189 }, // San Francisco, CA
  '94110': { lat: 37.7489, lng: -122.4103 }, // San Francisco, CA
  '94111': { lat: 37.7989, lng: -122.4003 }, // San Francisco, CA
  '94112': { lat: 37.7203, lng: -122.4425 }, // San Francisco, CA
  '94114': { lat: 37.7589, lng: -122.4353 }, // San Francisco, CA
  '94115': { lat: 37.7739, lng: -122.4375 }, // San Francisco, CA
  '94116': { lat: 37.7439, lng: -122.4839 }, // San Francisco, CA
  '94117': { lat: 37.7697, lng: -122.4497 }, // San Francisco, CA
  '94118': { lat: 37.7811, lng: -122.4639 }, // San Francisco, CA
  '94121': { lat: 37.7289, lng: -122.4769 }, // San Francisco, CA
  '94122': { lat: 37.7289, lng: -122.4769 }, // San Francisco, CA
  '94123': { lat: 37.7997, lng: -122.4347 }, // San Francisco, CA
  '94124': { lat: 37.7311, lng: -122.3875 }, // San Francisco, CA
  '94127': { lat: 37.7347, lng: -122.4569 }, // San Francisco, CA
  '94129': { lat: 37.7997, lng: -122.4653 }, // San Francisco, CA
  '94130': { lat: 37.8239, lng: -122.3703 }, // San Francisco, CA
  '94131': { lat: 37.7447, lng: -122.4419 }, // San Francisco, CA
  '94132': { lat: 37.7203, lng: -122.4750 }, // San Francisco, CA
  '94133': { lat: 37.7997, lng: -122.4097 }, // San Francisco, CA
  '94134': { lat: 37.7203, lng: -122.4097 }, // San Francisco, CA
  '95014': { lat: 37.3382, lng: -122.0363 }, // Cupertino, CA
  '95015': { lat: 37.3231, lng: -122.0322 }, // Cupertino, CA
  '95050': { lat: 37.3382, lng: -121.8863 }, // Santa Clara, CA
  '95051': { lat: 37.3489, lng: -121.9361 }, // Santa Clara, CA
  '95052': { lat: 37.3567, lng: -121.9539 }, // Santa Clara, CA
  '95053': { lat: 37.2539, lng: -121.8897 }, // Santa Clara, CA
  '95054': { lat: 37.4064, lng: -121.9539 }, // Santa Clara, CA
  '95055': { lat: 37.4064, lng: -121.9539 }, // Santa Clara, CA
  '95056': { lat: 37.4064, lng: -121.9539 }, // Santa Clara, CA
  '94301': { lat: 37.4419, lng: -122.1430 }, // Palo Alto, CA
  '94302': { lat: 37.4419, lng: -122.1430 }, // Palo Alto, CA
  '94303': { lat: 37.4419, lng: -122.1430 }, // Palo Alto, CA
  '94304': { lat: 37.4419, lng: -122.1430 }, // Palo Alto, CA
  '94305': { lat: 37.4419, lng: -122.1430 }, // Palo Alto, CA
  '94306': { lat: 37.4419, lng: -122.1430 }, // Palo Alto, CA
  '94309': { lat: 37.4419, lng: -122.1430 }, // Palo Alto, CA
  '94022': { lat: 37.4419, lng: -122.1430 }, // Los Altos, CA
  '94023': { lat: 37.4419, lng: -122.1430 }, // Los Altos, CA
  '94024': { lat: 37.4419, lng: -122.1430 }, // Los Altos, CA
  '94025': { lat: 37.4419, lng: -122.1430 }, // Los Altos, CA
  '94026': { lat: 37.4419, lng: -122.1430 }, // Los Altos Hills, CA
  '94027': { lat: 37.4419, lng: -122.1430 }, // Atherton, CA
  '94028': { lat: 37.4419, lng: -122.1430 }, // Portola Valley, CA
  '94029': { lat: 37.4419, lng: -122.1430 }, // Los Altos Hills, CA
  '94030': { lat: 37.4419, lng: -122.1430 }, // Millbrae, CA
  '94035': { lat: 37.4419, lng: -122.1430 }, // Mountain View, CA
  '94037': { lat: 37.4419, lng: -122.1430 }, // Montara, CA
  '94038': { lat: 37.4419, lng: -122.1430 }, // Moss Beach, CA
  '94039': { lat: 37.4419, lng: -122.1430 }, // Mountain View, CA
  '94040': { lat: 37.4419, lng: -122.1430 }, // Mountain View, CA
  '94041': { lat: 37.4419, lng: -122.1430 }, // Mountain View, CA
  '94042': { lat: 37.4419, lng: -122.1430 }, // Mountain View, CA
  '94043': { lat: 37.4419, lng: -122.1430 }, // Mountain View, CA
  '94044': { lat: 37.4419, lng: -122.1430 }, // Mountain View, CA
  '94060': { lat: 37.4419, lng: -122.1430 }, // Pescadero, CA
  '94061': { lat: 37.4419, lng: -122.1430 }, // Pescadero, CA
  '94062': { lat: 37.4419, lng: -122.1430 }, // Redwood City, CA
  '94063': { lat: 37.4419, lng: -122.1430 }, // Redwood City, CA
  '94064': { lat: 37.4419, lng: -122.1430 }, // Redwood City, CA
  '94065': { lat: 37.4419, lng: -122.1430 }, // Redwood City, CA
  '94066': { lat: 37.4419, lng: -122.1430 }, // San Bruno, CA
  '94070': { lat: 37.4419, lng: -122.1430 }, // San Carlos, CA
  '94074': { lat: 37.4419, lng: -122.1430 }, // San Gregorio, CA
  '94080': { lat: 37.4419, lng: -122.1430 }, // South San Francisco, CA
  '94083': { lat: 37.4419, lng: -122.1430 }, // South San Francisco, CA
  '94096': { lat: 37.4419, lng: -122.1430 }, // San Bruno, CA
  '94098': { lat: 37.4419, lng: -122.1430 }, // San Bruno, CA
  '94099': { lat: 37.4419, lng: -122.1430 }, // San Bruno, CA
};

/**
 * Convert zipcode to coordinates using zippopotam.us API
 * @param {string} zipcode - The zipcode to convert
 * @returns {Promise<{lat: number, lng: number} | null>}
 */
async function getCoordinatesFromZipcode(zipcode) {
  try {
    // First try the hardcoded common zip codes for reliability
    if (COMMON_ZIP_CODES[zipcode]) {
      console.log(`Using hardcoded coordinates for zipcode ${zipcode}`);
      return COMMON_ZIP_CODES[zipcode];
    }

    // Fallback to API call
    console.log(`Fetching coordinates for zipcode ${zipcode} from API...`);
    const response = await axios.get(`https://api.zippopotam.us/US/${zipcode}`, {
      timeout: 5000 // 5 second timeout
    });

    if (response.data && response.data.places && response.data.places.length > 0) {
      const place = response.data.places[0];
      const coordinates = {
        lat: parseFloat(place.latitude),
        lng: parseFloat(place.longitude)
      };
      
      console.log(`Successfully got coordinates for ${zipcode}:`, coordinates);
      return coordinates;
    }
    
    console.log(`No coordinates found for zipcode ${zipcode}`);
    return null;
  } catch (error) {
    console.error(`Error fetching coordinates for zipcode ${zipcode}:`, error.message);
    return null;
  }
}

/**
 * Update coordinates for all users with zipcodes but missing lat/lng
 * This function can be run as a daily job
 */
async function updateMissingCoordinates() {
  try {
    console.log('Starting coordinate update job...');
    
    // Get all users with zipcodes but missing coordinates
    const usersQuery = `
      SELECT id, zip_code, city, state 
      FROM users 
      WHERE zip_code IS NOT NULL 
      AND zip_code != '' 
      AND (latitude IS NULL OR longitude IS NULL)
    `;
    
    const users = await pool.query(usersQuery);
    console.log(`Found ${users.rows.length} users with missing coordinates`);
    
    let updatedCount = 0;
    let errorCount = 0;
    
    for (const user of users.rows) {
      try {
        const coordinates = await getCoordinatesFromZipcode(user.zip_code);
        
        if (coordinates) {
          // Update user with coordinates
          const updateQuery = `
            UPDATE users 
            SET latitude = $1, longitude = $2, updated_at = CURRENT_TIMESTAMP
            WHERE id = $3
          `;
          
          await pool.query(updateQuery, [
            coordinates.lat,
            coordinates.lng,
            user.id
          ]);
          
          console.log(`Updated coordinates for user ${user.id} (${user.zip_code}):`, coordinates);
          updatedCount++;
        } else {
          console.log(`Could not get coordinates for user ${user.id} (${user.zip_code})`);
          errorCount++;
        }
        
        // Add a small delay to avoid overwhelming the API
        await new Promise(resolve => setTimeout(resolve, 100));
        
      } catch (error) {
        console.error(`Error updating user ${user.id}:`, error.message);
        errorCount++;
      }
    }
    
    console.log(`Coordinate update job completed. Updated: ${updatedCount}, Errors: ${errorCount}`);
    return { updatedCount, errorCount };
    
  } catch (error) {
    console.error('Error in coordinate update job:', error);
    throw error;
  }
}

/**
 * Update coordinates for a single user (useful for new signups)
 * @param {number} userId - The user ID to update
 * @param {string} zipcode - The zipcode to convert
 * @returns {Promise<boolean>}
 */
async function updateUserCoordinates(userId, zipcode) {
  try {
    const coordinates = await getCoordinatesFromZipcode(zipcode);
    
    if (coordinates) {
      const updateQuery = `
        UPDATE users 
        SET latitude = $1, longitude = $2, updated_at = CURRENT_TIMESTAMP
        WHERE id = $3
      `;
      
      await pool.query(updateQuery, [
        coordinates.lat,
        coordinates.lng,
        userId
      ]);
      
      console.log(`Updated coordinates for user ${userId} (${zipcode}):`, coordinates);
      return true;
    }
    
    return false;
  } catch (error) {
    console.error(`Error updating coordinates for user ${userId}:`, error);
    return false;
  }
}

module.exports = {
  getCoordinatesFromZipcode,
  updateMissingCoordinates,
  updateUserCoordinates,
  COMMON_ZIP_CODES
}; 