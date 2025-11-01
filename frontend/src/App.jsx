// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import AddProduit from './pages/AddProduit';
import EditProduit from './pages/EditProduit';
import About from './pages/About';

function App() {
  return (
    <Router>
      <Navbar />  
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/add" element={<AddProduit />} />
        <Route path="/edit/:id" element={<EditProduit />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
  );
}

export default App;