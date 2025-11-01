const express = require('express');
const { getProduits, getProduit, addProduit, editProduit, removeProduit } = require('../controllers/produitController');

const router = express.Router();

router.get('/produits', getProduits);
router.get('/produits/:id', getProduit);
router.post('/produits', addProduit);
router.put('/produits/:id', editProduit);
router.delete('/produits/:id', removeProduit);

module.exports = router;