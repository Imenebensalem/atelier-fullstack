// src/pages/About.jsx
import React from 'react';

const About = () => {
  return (
    <div className="container mt-4">
      <h1 className="mb-4 text-center">À Propos du Projet</h1>
      <p className="text-center">
        Ce projet est une application full-stack développée par moi-même, utilisant React.js pour le frontend, Express.js pour le backend, et PostgreSQL comme base de données. 
        Il permet de gérer des produits via des opérations CRUD (Create, Read, Update, Delete). Le design est responsive grâce à Bootstrap, et les notifications sont gérées par react-hot-toast.
      </p>
      <div className="text-center">
        <img 
          src="https://media.licdn.com/dms/image/v2/D5612AQFA87_WBhXUlg/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1710942285800?e=2147483647&v=beta&t=kAikDJ7A5iz38Hgvsiy59wORubLPrdlHh2GAPs9Cz5E" 
          alt="Illustration Full-Stack Web Development" 
          className="img-fluid rounded" 
          style={{ maxWidth: '600px' }}
        />

<grok-card data-id="fa0ff3" data-type="image_card"></grok-card>

      </div>
    </div>
  );
};

export default About;