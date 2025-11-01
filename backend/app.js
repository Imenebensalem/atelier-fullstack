// backend/app.js
const express = require('express');
const cors = require('cors');
const produitRoutes = require('./routes/produitRoutes');

const app = express();

// Middlewares
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.use('/api', produitRoutes);

// Route de test
app.get('/', (req, res) => {
  res.json({ message: 'API Produits - Backend Express + PostgreSQL' });
});

module.exports = app;