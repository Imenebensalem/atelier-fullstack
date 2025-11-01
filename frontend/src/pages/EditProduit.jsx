// src/pages/EditProduit.jsx
import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getProduit, updateProduit } from '../services/api';
import ProduitForm from '../components/ProduitForm';
import toast from 'react-hot-toast';

const EditProduit = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [produitInitial, setProduitInitial] = useState(null);

  useEffect(() => {
    const fetchProduit = async () => {
      try {
        const res = await getProduit(id);
        setProduitInitial(res.data);
      } catch  {
        toast.error('Erreur lors du chargement du produit');
      }
    };

    fetchProduit();
  }, [id]);

  const handleSubmit = async (produit) => {
    try {
      await updateProduit(id, produit);
      toast.success('Produit modifié avec succès');
      navigate('/');
    } catch {
      toast.error('Erreur lors de la modification');
    }
  };

  if (!produitInitial) return <div>Chargement...</div>;

  return (
    <div className="container mt-4">
      <h1 className="mb-4 text-center">Modifier le Produit</h1>
      <ProduitForm onSubmit={handleSubmit} produitInitial={produitInitial} />
    </div>
  );
};

export default EditProduit;