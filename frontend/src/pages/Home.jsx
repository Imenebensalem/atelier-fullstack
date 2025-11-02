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
    <div className="container mt-4 app-container">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h1 className="mb-0">Liste des Produits</h1>
        <div>
          <Link to="/add" className="btn btn-primary">Ajouter un Produit</Link>
        </div>
      </div>

      {produits.length === 0 ? (
        <div className="text-center">Aucun produit trouvé.</div>
      ) : (
        <div className="table-responsive">
          <table className="table table-hover align-middle">
            <thead>
              <tr>
                <th>Nom</th>
                <th>Description</th>
                <th>Prix (€)</th>
                <th style={{width: '220px'}}>Actions</th>
              </tr>
            </thead>
            <tbody>
              {produits.map((produit) => (
                <tr key={produit.id}>
                  <td className="fw-semibold">{produit.nom}</td>
                  <td className="text-muted" style={{maxWidth: 420}}>{produit.description}</td>
                  <td className="fw-medium">{produit.prix} €</td>
                  <td>
                    <div className="d-flex">
                      <Link to={`/edit/${produit.id}`} className="btn btn-outline-warning btn-sm me-2">
                        <FaEdit /> Modifier
                      </Link>
                      <button className="btn btn-danger btn-sm" onClick={() => handleDelete(produit.id)}>
                        <FaTrash /> Supprimer
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default Home;