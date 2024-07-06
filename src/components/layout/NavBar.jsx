import React from 'react'
import { Container, Nav, Navbar} from 'react-bootstrap'
import logo from '../../assets/images/logo.png'
import './NavBar.css'

const NavBar = () => {
  return (
    <>
       <Navbar style={{backgroundColor:'#000F44'}} data-bs-theme="light">
        <Container >
          <Navbar.Brand href="#home">
             <img 
                src={logo} 
                height="50"
                className="d-inline-block align-top"
                alt="Logo" 
             />
          </Navbar.Brand>
          <Nav className="justify-content-end " >
            <Nav.Link href="#home" style={{color:'#D7D7D8'}} className='ms-5  nav-link-custom'>Home</Nav.Link>
            <Nav.Link href="#about" style={{color:'#D7D7D8'}} className='ms-5 nav-link-custom'>About</Nav.Link>
            <Nav.Link href="#services" style={{color:'#D7D7D8'}} className='ms-5 nav-link-custom'>Services</Nav.Link>
            <Nav.Link href="#events" style={{color:'#D7D7D8'}} className='ms-5 nav-link-custom'>Events</Nav.Link>
            <Nav.Link href="#contactus" style={{color:'#D7D7D8'}} className='ms-5 nav-link-custom'>Contact Us</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  )
}

export default NavBar