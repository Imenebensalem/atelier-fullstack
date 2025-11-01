// src/pages/Home.jsx
import React, { useState, useEffect } from 'react';
import { getProduits, deleteProduit } from '../services/api';
import { FaEdit, FaTrash } from 'react-icons/fa';  // Icons
import { Link } from 'react-router-dom';
import toast from 'react-hot-toast';

const Home = () => {
  const [produits, setProduits] = useState([]);

  useEffect(() => {
    fetchProduits();
  }, []);

  const fetchProduits = async () => {
    try {
      const res = await getProduits();
      setProduits(res.data);
    } catch {
      toast.error('Erreur lors du chargement des produits');
    }
  };

  const handleDelete = async (id) => {
    try {
      await deleteProduit(id);
      toast.success('Produit supprimé avec succès');
      fetchProduits();
    } catch {
      toast.error('Erreur lors de la suppression');
    }
  };

  return (
    <div className="container mt-4">
      <h1 className="mb-4">Liste des Produits</h1>
      <table className="table table-striped">
        <thead>
          <tr>
            <th>Nom</th>
            <th>Description</th>
            <th>Prix (€)</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {produits.map((produit) => (
            <tr key={produit.id}>
              <td>{produit.nom}</td>
              <td>{produit.description}</td>
              <td>{produit.prix}</td>
              <td>
                <Link to={`/edit/${produit.id}`} className="btn btn-warning btn-sm me-2">
                  <FaEdit /> Modifier
                </Link>
                <button className="btn btn-danger btn-sm" onClick={() => handleDelete(produit.id)}>
                  <FaTrash /> Supprimer
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="text-center">
        <Link to="/add" className="btn btn-success">Ajouter un Produit</Link>
      </div>
    </div>
  );
};

export default Home;