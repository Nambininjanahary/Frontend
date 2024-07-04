import React from 'react';
import { Navbar, Container } from 'react-bootstrap';
import companyLogo from '../assets/intelead.jpg';
import './Header.css';

const Header = () => {
  return (
    <Navbar bg="light" variant="light">
      <Container className="d-flex align-items-center">
        <img
          alt="Company Logo"
          src={companyLogo}
          width="50"
          height="50"
          className="d-inline-block align-top"
        />
        <span className="ms-2 fs-4">InteLead</span>
      </Container>
    </Navbar>
  );
};

export default Header;
