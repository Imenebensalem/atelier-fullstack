// backend/config/db.js
const { Pool } = require('pg');
require('dotenv').config();

const pool = new Pool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  port: process.env.DB_PORT || 5432,
});

// Test de connexion
const connectDB = async () => {
  try {
    const client = await pool.connect();
    console.log('Connexion à PostgreSQL réussie !');
    client.release();
  } catch (err) {
    console.error('Échec de connexion à PostgreSQL:', err.message);
    process.exit(1);
  }
};

module.exports = { pool, connectDB }; // Exporte pool et connectDB