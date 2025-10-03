// backend/src/server.js
const express = require('express'); // Changed from import to require

const app = express();
const port = process.env.PORT || 3000;

// Middleware to parse JSON request bodies
app.use(express.json());

// Define a simple root route
app.get('/', (req, res) => {
  res.send('ShopShare Backend is Running!');
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});