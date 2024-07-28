import React  from 'react';
import "./EventVacancyPopup.css";
import Modal from 'react-modal';
import { GoDotFill } from "react-icons/go";
import { FaHtml5, FaLaptopCode, FaReact } from 'react-icons/fa';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%) ',
    width: '70%',
    height: '90%',
    backgroundColor: 'white', // Modal content background
    padding: '20px',
    borderRadius: '10px',
    boxShadow: '0 5px 15px rgba(0, 0, 0, 0.3)',
    zIndex: 1200,

  },
  overlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.15)', // Dark background
    backdropFilter: 'blur(5px)', // Blur effect
    zIndex: 1200,
  },
};

const EventVacancyPopup = ({ modalIsOpen, closeModal }) => {
  return (
    <div className="vacancy-popup-body">
        <Modal
      isOpen={modalIsOpen}
      onRequestClose={closeModal}
      style={customStyles}
      contentLabel="Example Modal"
    >
      <button className="close-button" onClick={closeModal}>×</button>
      <h4 className='vacancy-popup-header'>We are hiring a</h4>
      <h2 className='vacancy-popup-title'>Intern Front-End  Developer   -   Fully Remote</h2>
       <div className=' vacancy-popup-updatedtime'>
           <GoDotFill className='fs-4' />
           <h6 className='ms-2 mt-2'>2 hours ago</h6>
        </div>
      <div className='d-flex mt-3'>
         <div className='col-md-8'> 
          <div className='vacancy-popup-rightpart'>
              <h4 className='vacancy-popup-subtitle'>About the job:</h4>
              <p>We are seeking a Front-End Development Intern with a focus on React to join our team for a six-month paid internship. This role offers a chance to work on real-world projects and develop your front-end skills.</p>
              <h4 className='vacancy-popup-subtitle'>Responsibilities:</h4>
              <ul>
                <li>Assist in developing and maintaining web applications using React</li>
                <li>Implement responsive designs using HTML, CSS, and JavaScript</li>
                <li>Collaborate with designers to create user-friendly interfaces</li>
              </ul>
            </div>
         </div>
         <div className='col-md-4'>
          <div className='vacancy-popup-leftpart'>
            <h5>$  45O,000  -  $520,000</h5>
            <p className='vacancy-popup-salary-down mb-4'>Avg  salary</p>
            <div className='vacancy-popup-left-icons mt-3'>
              <FaLaptopCode className='fs-4' />
              <p>Software  & hardware Industry</p>
            </div>
            <div className='vacancy-popup-left-icons mt-3'>
              <FaHtml5 className='fs-4' />
              <p>Proficiency in HTML, CSS,& JavaScript</p>
            </div>
            <div className='vacancy-popup-left-icons mt-3'>
              <FaReact className='fs-4' />
              <p>Experience with React.js</p>
            </div>
            
            <div className='vacancy-popup-applybtn mt-3'>
                <button>Apply Now</button>
            </div>
            
           </div>
         </div>
      </div>
    </Modal>
     
    </div>
  );
};

export default EventVacancyPopup;
