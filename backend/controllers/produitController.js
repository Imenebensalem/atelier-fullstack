const { getAllProduits, getProduitById, createProduit, updateProduit, deleteProduit } = require('../models/produitModel');

const getProduits = async (req, res) => {
  try {
    const produits = await getAllProduits();
    res.json(produits);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const getProduit = async (req, res) => {
  try {
    const produit = await getProduitById(req.params.id);
    if (!produit) return res.status(404).json({ error: 'Produit non trouvé' });
    res.json(produit);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const addProduit = async (req, res) => {
  try {
    const produit = await createProduit(req.body);
    res.status(201).json(produit);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const editProduit = async (req, res) => {
  try {
    const produit = await updateProduit(req.params.id, req.body);
    if (!produit) return res.status(404).json({ error: 'Produit non trouvé' });
    res.json(produit);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const removeProduit = async (req, res) => {
  try {
    await deleteProduit(req.params.id);
    res.status(204).send();
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

module.exports = { getProduits, getProduit, addProduit, editProduit, removeProduit };