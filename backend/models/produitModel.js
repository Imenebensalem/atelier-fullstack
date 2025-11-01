// backend/models/produitModel.js
const { pool } = require('../config/db'); // Importe pool

const getAllProduits = async () => {
  const res = await pool.query('SELECT * FROM produits ORDER BY id');
  return res.rows;
};

const getProduitById = async (id) => {
  const res = await pool.query('SELECT * FROM produits WHERE id = $1', [id]);
  return res.rows[0];
};

const createProduit = async ({ nom, description, prix }) => {
  const res = await pool.query(
    'INSERT INTO produits (nom, description, prix) VALUES ($1, $2, $3) RETURNING *',
    [nom, description, prix]
  );
  return res.rows[0];
};

const updateProduit = async (id, { nom, description, prix }) => {
  const res = await pool.query(
    'UPDATE produits SET nom = $1, description = $2, prix = $3 WHERE id = $4 RETURNING *',
    [nom, description, prix, id]
  );
  return res.rows[0] || null;
};

const deleteProduit = async (id) => {
  await pool.query('DELETE FROM produits WHERE id = $1', [id]);
};

module.exports = {
  getAllProduits,
  getProduitById,
  createProduit,
  updateProduit,
  deleteProduit,
};