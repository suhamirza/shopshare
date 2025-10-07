// backend/src/server.js
require('dotenv').config(); // Load environment variables as early as possible
const express = require('express');
const { AppDataSource } = require('./config/database'); // Import AppDataSource

const app = express();
const port = process.env.PORT || 3000;

// Middleware to parse JSON request bodies
app.use(express.json());

// Define a simple root route
app.get('/', (req, res) => {
  res.send('ShopShare Backend is Running!');
});

// --- Start the server ONLY after the database connection is established ---
AppDataSource.initialize()
  .then(() => {
    console.log("Database connected successfully!");
    app.listen(port, () => {
      console.log(`Server is running on http://localhost:${port}`);
    });
  })
  .catch((error) => console.error("Database connection error:", error));