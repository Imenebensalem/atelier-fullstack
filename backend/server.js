// backend/server.js
require('dotenv').config();
const app = require('./app');
const { connectDB } = require('./config/db');

const PORT = process.env.PORT || 5000;

// Démarrage avec connexion DB
const startServer = async () => {
  await connectDB(); // Attend la connexion BDD

  app.listen(PORT, () => {
    console.log(`Serveur démarré sur http://localhost:${PORT}`);
  });
};

startServer();