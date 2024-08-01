import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-scroll';
import logo from '../../assets/images/logo.png';
import './NavBar.css';

const NavBar = () => {
  return (
    <Navbar style={{ backgroundColor: '#000F44' }} data-bs-theme="light">
      <Container>
        <Navbar.Brand href="#home">
          <img
            src={logo}
            height="50"
            className="d-inline-block align-top"
            alt="Logo"
          />
        </Navbar.Brand>
        <Nav className="justify-content-end">
          <Link
            to="home-section"
            smooth={true}
            duration={500}
            offset={-50}
            className="nav-link-custom ms-5"
            style={{ color: '#D7D7D8', cursor: 'pointer' }}
          >
            Home
          </Link>
        
          <Link
            to="services-section"
            smooth={true}
            duration={500}
            offset={-50}
            className="nav-link-custom ms-5"
            style={{ color: '#D7D7D8', cursor: 'pointer' }}
          >
            Services
          </Link>
          <Link
            to="events-section"
            smooth={true}
            duration={500}
            offset={-50}
            className="nav-link-custom ms-5"
            style={{ color: '#D7D7D8', cursor: 'pointer' }}
          >
            Events
          </Link>
          <Link
            to="about-section"
            smooth={true}
            duration={500}
            offset={-50}
            className="nav-link-custom ms-5"
            style={{ color: '#D7D7D8', cursor: 'pointer' }}
          >
            About
          </Link>
          <Link
            to="contact-section"
            smooth={true}
            duration={500}
            offset={-50}
            className="nav-link-custom ms-5"
            style={{ color: '#D7D7D8', cursor: 'pointer' }}
          >
            Contact Us
          </Link>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default NavBar;
