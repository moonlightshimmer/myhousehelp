#!/usr/bin/env node

/**
 * Daily job to update missing coordinates for users
 * This script can be run as a cron job:
 * 0 2 * * * /usr/bin/node /path/to/server/jobs/updateCoordinates.js
 */

require('dotenv').config();
const { updateMissingCoordinates } = require('../services/zipcodeService');

async function runCoordinateUpdateJob() {
  console.log('=== Starting Daily Coordinate Update Job ===');
  console.log('Timestamp:', new Date().toISOString());
  
  try {
    const result = await updateMissingCoordinates();
    
    console.log('=== Job Completed Successfully ===');
    console.log('Updated users:', result.updatedCount);
    console.log('Errors:', result.errorCount);
    console.log('Timestamp:', new Date().toISOString());
    
    // Exit with success code
    process.exit(0);
    
  } catch (error) {
    console.error('=== Job Failed ===');
    console.error('Error:', error.message);
    console.error('Timestamp:', new Date().toISOString());
    
    // Exit with error code
    process.exit(1);
  }
}

// Run the job if this script is executed directly
if (require.main === module) {
  runCoordinateUpdateJob();
}

module.exports = { runCoordinateUpdateJob }; 