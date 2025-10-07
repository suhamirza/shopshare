// shopshare-backend/src/config/database.js
const { DataSource } = require('typeorm');
require('dotenv').config(); // Load environment variables

const AppDataSource = new DataSource({
  type: "postgres",
  host: process.env.DB_HOST,
  port: parseInt(process.env.DB_PORT || "5432"),
  username: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  synchronize: true, // WARNING: Set to false in production!
  logging: false, // Set to true to see SQL queries in development
  entities: [], // entities will be added here later
  subscribers: [],
  migrations: [],
});

module.exports = { AppDataSource };