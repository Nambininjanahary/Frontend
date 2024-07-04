import React from 'react';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import { GoArrowRight } from 'react-icons/go';
import './Home.css'; // Assurez-vous d'inclure le fichier CSS
import WordFlick from './WordFlick'; // Importer le composant WordFlick

const HomePage = () => {
  return (
    <Container className="text-center mt-5 home-container">
      <div className="context">
        <Link to="/main">
        <WordFlick /> 
        <Button variant="primary" className="button">Click here <GoArrowRight /></Button>
      </Link>
      </div>
    </Container>
  );
};

export default HomePage;
