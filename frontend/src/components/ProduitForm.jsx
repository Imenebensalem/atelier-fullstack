// src/components/ProduitForm.jsx
import React, { useState, useEffect } from 'react';

const ProduitForm = ({ onSubmit, produitInitial }) => {
  const [nom, setNom] = useState('');
  const [description, setDescription] = useState('');
  const [prix, setPrix] = useState('');

  useEffect(() => {
    if (produitInitial) {
      setNom(produitInitial.nom);
      setDescription(produitInitial.description);
      setPrix(produitInitial.prix);
    }
  }, [produitInitial]);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ nom, description, prix: parseFloat(prix) });
  };

  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <form onSubmit={handleSubmit} className="mb-4">
            <div className="mb-3">
              <label className="form-label">Nom</label>
              <input type="text" className="form-control" value={nom} onChange={(e) => setNom(e.target.value)} required />
            </div>
            <div className="mb-3">
              <label className="form-label">Description</label>
              <textarea className="form-control" value={description} onChange={(e) => setDescription(e.target.value)} />
            </div>
            <div className="mb-3">
              <label className="form-label">Prix (€)</label>
              <input type="number" className="form-control" value={prix} onChange={(e) => setPrix(e.target.value)} required />
            </div>
            <button type="submit" className="btn btn-primary w-100">Soumettre</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ProduitForm;