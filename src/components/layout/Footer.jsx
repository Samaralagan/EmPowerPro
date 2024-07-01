import React from 'react'
import './Footer.css'
import { Col, Row } from 'react-bootstrap'
import { FaArrowRight, FaLocationDot  } from "react-icons/fa6";
import { IoCall } from "react-icons/io5";
import { IoIosMail } from "react-icons/io";
import { FaFacebookF,FaInstagram, FaLinkedinIn, FaTwitter, FaWhatsapp} from "react-icons/fa";

const Footer = () => {
  return (
    <div className='footer-body'>
        <Row>
        <Col md={4} className='ps-5 pt-3' >
            <div className='ms-5 mt-5'><b>QUICK LINKS</b></div>
            <div className='ms-5 quick-links'>
                <div className='mt-3 ms-2 quick-link'>
                    <FaArrowRight className='me-1 quick-link-icon' />
                     Home
                </div>
                <div className='mt-2 ms-2 quick-link'><FaArrowRight  className='me-1 quick-link-icon'/>About Us</div>
                <div className='mt-2 ms-2 quick-link'><FaArrowRight className='me-1 quick-link-icon'/>Services</div>
            </div>
        </Col>
        <Col md={4} className='pt-3 '>
            <div className=' mt-5 ms-5'><b>CONTACT US</b></div>
            <div className='contact-us'>
                <div className='mt-3'><FaLocationDot className='fs-4 me-2'/>A14-15, Industrial Estate, Ekala, Ja-ela, Sri Lanka.</div>
                <div className='mt-2'><IoCall className='fs-4 me-2'  />+94 11 223 6976</div>
                <div className='mt-2'><IoIosMail className='fs-4 me-2' />admin@empowerpro.lk</div>
            </div>
            <div className='mt-3 social-media-icons'>
              <FaFacebookF className='social-media-icon' />
              <FaInstagram className='social-media-icon'/>
              <FaLinkedinIn className='social-media-icon'/>
              <FaTwitter className='social-media-icon'/>
              <FaWhatsapp className='social-media-icon'/>
            </div>
        </Col>
        <Col md={4} className='pt-3'>
            <div className='mt-5 '><b>FEEDBACKS</b></div>
            <div><textarea className='feedback-textbox' placeholder='Enter your feedbacks'></textarea></div>
            <div><button className='gradient-blue-btn'>SEND</button></div>
            <div className='copyright'>Copyright@EmpowerPro.lk | all rights reserved</div>
        </Col>
        </Row>
    </div>
  )
}

export default Footer