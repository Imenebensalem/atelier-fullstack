// src/services/api.js
import axios from 'axios';

const API_URL = import.meta.env.VITE_API_URL;

export const getProduits = () => axios.get(`${API_URL}/produits`);
export const getProduit = (id) => axios.get(`${API_URL}/produits/${id}`);
export const createProduit = (produit) => axios.post(`${API_URL}/produits`, produit);
export const updateProduit = (id, produit) => axios.put(`${API_URL}/produits/${id}`, produit);
export const deleteProduit = (id) => axios.delete(`${API_URL}/produits/${id}`);