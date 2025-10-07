// shopshare-backend/src/server.js
require('dotenv').config(); // Load environment variables as early as possible
const express = require('express');
const db = require('./config/database'); // Import the Sequelize instance

const app = express();
const port = process.env.PORT || 3000;

// Middleware to parse JSON request bodies
app.use(express.json());

// Define a simple root route
app.get('/', (req, res) => {
  res.send('ShopShare Backend is Running!');
});

// --- Start the server ONLY after the database connection is established ---
db.sequelize.authenticate() // Test the database connection
  .then(() => {
    console.log("Database connection (Sequelize) has been established successfully!");
    
    // Synchronize models with database (for development only)
    // WARNING: force: true will DROP existing tables and re-create them
    return db.sequelize.sync({ force: true });
  })
  .then(() => {
    console.log("Database tables synchronized successfully!");
    
    app.listen(port, () => {
      console.log(`Server is running on http://localhost:${port}`);
    });
  })
  .catch((error) => console.error("Unable to connect to the database:", error));