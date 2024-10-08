import React, { useEffect, useState } from 'react';
import './Home.css';
import NavBar from '../layout/NavBar';
import main_img from '../../assets/images/home-main.png';
import img1 from '../../assets/images/moving_img1.png';
import img2 from '../../assets/images/fixed_img.png';

import { Container, Navbar } from 'react-bootstrap';
import { FaAnglesRight } from "react-icons/fa6";
import { IoHome } from "react-icons/io5";
import { HiClipboardDocumentList } from "react-icons/hi2";  
import { FaRegBookmark, FaExclamationCircle } from "react-icons/fa";
import { LuPhoneCall } from "react-icons/lu";
import { Link } from 'react-scroll';

const Home = ({ id }) => {
  const [showNavbar, setShowNavbar] = useState(true);
  const [showToggle, setShowToggle] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {  
      if (window.scrollY === 0) {
        setShowNavbar(true);
        setIsOpen(false);
        setShowToggle(false);
      } else {
        setShowToggle(true); 
        setShowNavbar(false);
        setIsOpen(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleNavbar = () => {
    setIsOpen(true);
  };

  const toggleNavbarOut = () => {
    setIsOpen(false);
  };

  return (
    <div id={id}>
      {showNavbar && <NavBar expand="lg" />}
      <div>
        <Container fluid className="position-relative home-container">
          <img src={main_img} alt="Background" className="home-image" />
          <div className="text-overlay">
            <h1 className="fade-in-left" style={{ color: '#000F44' }}>Best</h1>
            <h1 className="fade-in-left delay-1" style={{ color: '#062CB2' }}><b>Software Development</b></h1>
            <h1 className="fade-in-left delay-2" style={{ color: '#000F44' }}>Services</h1>
          </div>
          <img src={img1} alt="Moving Element" className="moving-image" />
          <img src={img2} alt="Fixed Element" className="fixed-image" />
        </Container>
      </div>
      {showToggle && (
        <div className={`left-side-navbar ${isOpen ? 'open' : ''}`} style={{ backgroundColor: '#000F44' }}>
          <Navbar>
            <div className="menu-icon" onMouseEnter={toggleNavbar}>
              {!isOpen && (
                <span className='home-sidebar-openbtn'>
                  <FaAnglesRight />
                </span>
              )}
            </div>

            {isOpen && (
              <div onMouseLeave={toggleNavbarOut} className='home-sidebar-icons'>
                <span>
                  <Link
                    to="home-section"
                    smooth={true}
                    duration={500}
                    offset={-50}
                    className="home-sidebar-link"
                  >
                    <IoHome className='home-sidebar-icon' />
                    <div>Home</div>
                  </Link>
                </span>
                <span>
                  <Link
                    to="services-section"
                    smooth={true}
                    duration={500}
                    offset={-50}
                    className="home-sidebar-link"
                  >
                    <FaRegBookmark className='home-sidebar-icon' />
                    <div>Our Services</div>
                  </Link>
                </span>
                <span>
                  <Link
                    to="events-section"
                    smooth={true}
                    duration={500}
                    offset={-50}
                    className="home-sidebar-link"
                  >
                    <HiClipboardDocumentList className='home-sidebar-icon' />
                    <div>Our Events</div>
                  </Link>
                </span>
                <span>
                  <Link
                    to="about-section"
                    smooth={true}
                    duration={500}
                    offset={-50}
                    className="home-sidebar-link"
                  >
                    <FaExclamationCircle className='home-sidebar-icon' />
                    <div>About Us</div>
                  </Link>
                </span>
                <span>
                  <Link
                    to="contact-section"
                    smooth={true}
                    duration={500}
                    offset={-50}
                    className="home-sidebar-link"
                  >
                    <LuPhoneCall className='home-sidebar-icon' />
                    <div>Contact Us</div>
                  </Link>
                </span>
              </div>
            )}
          </Navbar>
        </div>
      )}
    </div>
  );
}

export default Home;
