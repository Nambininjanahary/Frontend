import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './components/HomePage';
import MainPage from './MainPage'; // Assurez-vous que MainPage est correctement importé
import Footer from './components/Footer';
import './App.css';

const App = () => {
  return (
    <Router>
      <div className="App d-flex flex-column min-vh-100">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/main" element={<MainPage />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
