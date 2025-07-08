/**
 * Test script to manually update coordinates for existing users
 * Run with: node server/testUpdateCoordinates.js
 */

require('dotenv').config();
const { updateMissingCoordinates } = require('./services/zipcodeService');

async function testCoordinateUpdate() {
  console.log('Testing coordinate update for existing users...');
  
  try {
    const result = await updateMissingCoordinates();
    console.log('Test completed!');
    console.log('Updated users:', result.updatedCount);
    console.log('Errors:', result.errorCount);
  } catch (error) {
    console.error('Test failed:', error);
  }
}

testCoordinateUpdate(); 