// src/components/Footer.jsx
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Footer.css'; // Ajoutez votre fichier CSS personnalisé

const Footer = () => {
  return (
    <footer className="footer mt-auto py-3 bg-light">
      <div className="container text-center">
        <span className="text-muted">© 2024 InteLead. All rights reserved.</span>
      </div>
    </footer>
  );
};

export default Footer;
