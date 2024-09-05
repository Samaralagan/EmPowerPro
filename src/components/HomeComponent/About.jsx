import React, { useEffect, useRef, useState } from 'react'
import './About.css'
import { Col, Container, Row } from 'react-bootstrap'
import { ABOUT } from '../constants/contents'

const About = ({id}) => {
  const aboutRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const rect = aboutRef.current.getBoundingClientRect();
      if (rect.top < window.innerHeight && rect.bottom >= 0) {
        aboutRef.current.classList.add('fade-in');
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className='about-body' id={id} >
      <Container >
      <Row className="pt-5">
        <Col fluid className="title-fade text-center" ref={aboutRef}>
          <h1 className='about-title'>{ABOUT.title}</h1>
          <p className="about-text pt-4" dangerouslySetInnerHTML={{__html:ABOUT.title_text}} >
          </p>
        </Col>
      </Row>
    </Container>
      <Container  >
       <Row style={{width:'90vw'}}>
          <Col md={4} style={{height:'66vh',   }}>
            <Row>
               <Col md={5} style={{width:'' }} >
                  <img src={ABOUT.img1} alt="" style={{width:'203px', height:'33vh'}} className='m-1 image' />
               </Col>
               <Col  md={1} >
                 <img src={ABOUT.img4} alt="" style={{width:'170px'}} className='mt-4 ms-4 image' />
                </Col>
            </Row>
            <Row >
                <Col md={4} style={{ }} >
                  <img src={ABOUT.img2} alt="" style={{width:'144px', height:'29vh'}} className='m-1 image' />
               </Col>
               <Col  style={{}}>
                 <img src={ABOUT.img3} alt="" style={{width:'245px', height:'29vh'}} className='m-1 image' />
                </Col>
            </Row>
          </Col>
          <Col  md={8} style={{width:'60vw'}}>
            <Row className='mt-4 me-5'>
               {ABOUT.text1}
            </Row>
            <Row className='mt-4 me-5'>
              {ABOUT.text2}

            </Row>

            <Row className='mt-5 ms-5'>
               <Col md={6} className='ms-5'>
                  <div  className='tag'>
                      <div  className='tag-box'></div>
                      <div className='tag-number'>10</div>
                      <div className='ms-4'>
                         <div className='tag-text1'>Years of </div> 
                         <div className='tag-text2'>EXPERIENCE</div> 
                      </div>
                  </div>
               </Col>
               <Col>
                 <div  className='tag '>
                      <div  className='tag-box'></div>
                      <div className='tag-number'>15</div>
                      <div className='ms-4'>
                         <div className='tag-text1'>Worldwide </div> 
                         <div className='tag-text2'>BRANCHES</div> 
                      </div>
                  </div>
               </Col>
            </Row>

            <Row  className='mt-5'>
              <Col className='d-flex justify-content-center align-items-center mt-3'>
                 <div className='readmore'>Read More</div>
              </Col>
            </Row>
          </Col>
       </Row>
    </Container>
    </div>
  )
}

export default About