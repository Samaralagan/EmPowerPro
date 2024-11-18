import React, { useEffect, useRef } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import './Services.css'
import { FaLaptopCode, FaMobileAlt, FaNetworkWired, FaUserShield } from "react-icons/fa";
import { SERVICES } from '../constants/contents';
import { SERVICES_CARD } from '../constants/temporary';

const Services = ({id}) => {
  const Ref = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const rect = Ref.current.getBoundingClientRect();
      if (rect.top < window.innerHeight && rect.bottom >= 0) {
        Ref.current.classList.add('fade-in');
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className='service-body' id={id}>
      <Container >
      <Row className="pt-5">
        <Col fluid className="title-fade text-center" ref={Ref}>
          <h1 className='service-title'>{SERVICES.title}</h1>
          <p className="service-text pt-4" dangerouslySetInnerHTML={{__html:SERVICES.text}}>
          </p>
        </Col>
      </Row>

      <div className='service-container'>
        {SERVICES_CARD.map((card,index)=>(
            <div className='service-box' key={index}>
            <div className='service-box-icon-outline'>
              <div className='service-box-icon'>
                 {<card.icon/>}
                </div>
              </div>
              <div className='service-box-title'>{card.name}</div>
              <div className='service-box-text'>
                {card.text}
              </div>
            </div>
        ))}
      </div>
    </Container>
  </div>
  )
}

export default Services