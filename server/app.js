const cors = require('cors');
const express = require('express');
const userRoutes = require('./routes/users');  // Adjust the path as necessary

const app = express();
app.use(express.json());  // Middleware to parse JSON bodies
app.use(cors());  // This enables CORS for all routes and origins
// Use userRoutes for any requests to '/api/users'
app.use('/api/users', userRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
