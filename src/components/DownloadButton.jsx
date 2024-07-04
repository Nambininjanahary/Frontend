import React from 'react';
import { GoDownload } from "react-icons/go";

const DownloadButton = ({ onDownload }) => {
  const containerStyle = {
    display: 'inline-block',
    padding: '10px', // Ajustez le rembourrage selon vos besoins
    border: '1px solid #007bff', // Couleur et style de la bordure
    borderRadius: '5px', // Ajustez le rayon des coins
    cursor: 'pointer',
    transition: 'background-color 0.3s, border-color 0.3s'
  };

  const iconStyle = {
    color: '#ffffff', // Couleur de l'icône par défaut
    fontSize: '24px', // Taille de l'icône
    transition: 'color 0.3s'
  };

  const handleMouseEnter = (e) => {
    e.currentTarget.style.borderColor = '#0056b3'; // Changer la couleur de la bordure au survol
    e.currentTarget.firstChild.style.color = '#0056b3'; // Changer la couleur de l'icône au survol
  };

  const handleMouseLeave = (e) => {
    e.currentTarget.style.borderColor = '#ffffff'; // Couleur par défaut de la bordure
    e.currentTarget.firstChild.style.color = '#ffffff'; // Couleur par défaut de l'icône
  };

  return (
    <div
      style={containerStyle}
      onClick={onDownload}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <GoDownload style={iconStyle} />
    </div>
  );
};

export default DownloadButton;
