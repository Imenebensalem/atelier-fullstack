// src/pages/AddProduit.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
import ProduitForm from '../components/ProduitForm';
import { createProduit } from '../services/api';
import toast from 'react-hot-toast';

const AddProduit = () => {
  const navigate = useNavigate();

  const handleSubmit = async (produit) => {
    try {
      await createProduit(produit);
      toast.success('Produit ajouté avec succès');
      navigate('/');
    } catch {
      toast.error('Erreur lors de l\'ajout');
    }
  };

  return (
    <div className="container mt-4">
      <h1 className="mb-4 text-center">Ajouter un Produit</h1>
      <ProduitForm onSubmit={handleSubmit} />
    </div>
  );
};

export default AddProduit;