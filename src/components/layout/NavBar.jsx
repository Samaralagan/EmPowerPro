import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo from '../../assets/images/logo.png';
import './NavBar.css';


const NavBar = () => {
  return (
    <>
      <Navbar style={{ backgroundColor: '#000F44' }} data-bs-theme="light">
        <Container>
          <Navbar.Brand as={Link} to="/">
            <img 
              src={logo} 
              height="70"
              className="d-inline-block align-top"
              alt="Logo" 
            />
          </Navbar.Brand>
          <Nav className="justify-content-end">
            <Nav.Link as={Link} to="/" className="ms-5 nav-link-custom" style={{ color: '#D7D7D8' }}>Home</Nav.Link>
            <Nav.Link as={Link} to="/about" className="ms-5 nav-link-custom" style={{ color: '#D7D7D8' }}>About</Nav.Link>
            <Nav.Link as={Link} to="/services" className="ms-5 nav-link-custom" style={{ color: '#D7D7D8' }}>Services</Nav.Link>
            <Nav.Link as={Link} to="/events" className="ms-5 nav-link-custom" style={{ color: '#D7D7D8' }}>Events</Nav.Link>
            <Nav.Link as={Link} to="/contact" className="ms-5 nav-link-custom" style={{ color: '#D7D7D8' }}>Contact Us</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
};

export default NavBar;
