import React, { useState, useEffect, useRef } from 'react';
import "./ViewBlogPopup.css";
import Modal from 'react-modal';
import Quill from 'quill';
import 'quill/dist/quill.snow.css';
import { FaPlus } from 'react-icons/fa6';
import RatingPopup from './RatingPopup';
import BlogComment from './BlogComment';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%) ',
    width: '80%',
    height: '90%',
    backgroundColor: 'white', // Modal content background
    padding: '20px',
    borderRadius: '10px',
    boxShadow: '0 5px 15px rgba(0, 0, 0, 0.3)',
    zIndex: 1200,
    overflow: 'hidden',
  },
  overlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.15)', // Dark background
    backdropFilter: 'blur(5px)', // Blur effect
    zIndex: 1200,
  },
};

const ViewBlogPopup = ({ modalIsOpen1, closeModal1 }) => {
  const [addFavourite,setAddFavourite]=useState(true)
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [modalIsOpen2, setModalIsOpen2] = useState(false);

  const HandleAddFavourite = () =>{
    setAddFavourite(!addFavourite)
  }
  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
    closeModal1()
  };
  const openModal2 = () => {
    setModalIsOpen2(true);
  };

  const closeModal2 = () => {
    setModalIsOpen2(false);
  };

 

  return (
    <div className="viewblog-popup-body">
      <Modal
        isOpen={modalIsOpen1}
        onRequestClose={closeModal1}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <div className='viewblog-topbar'>
        <button className="close-button" onClick={closeModal1}>×</button>
        <h2>Software Architecture</h2>
        <hr />
        </div>


<div>
  <div className='viewblog-content'>
    <h4>Introduction to Software Architecture</h4>
    <p> <b>Definition:</b><br /> Software architecture refers to the high-level structure of a software system, encompassing its components, their relationships, and the principles guiding its design and evolution.
    <br /><br />
    <b>Importance:</b><br />

    Scalability: Ensures the system can grow and handle increased load.
    Maintainability: Facilitates easier updates and modifications.
    Performance: Optimizes system speed and efficiency.
    Reliability: Enhances system stability and fault tolerance.
    </p>
    <h4> Key Concepts </h4>
    <p>
        <ul>
            <li>Components: The individual units of functionality within a system (e.g., modules, classes).</li>

            <li>Connectors: The communication pathways between components (e.g., APIs, middleware).</li>

            <li>Configurations: The specific arrangement of components and connectors.</li>

            <li>Views: Different perspectives of the architecture, such as logical, physical, development, and process views.</li>

            <li>Styles: Common architectural patterns (e.g., client-server, layered, microservices).</li>
    </ul>
    </p>
    <h4>Introduction to Software Architecture</h4>
    <p> <b>Definition:</b><br /> Software architecture refers to the high-level structure of a software system, encompassing its components, their relationships, and the principles guiding its design and evolution.
    <br /><br />
    <b>Importance:</b><br />

    Scalability: Ensures the system can grow and handle increased load.
    Maintainability: Facilitates easier updates and modifications.
    Performance: Optimizes system speed and efficiency.
    Reliability: Enhances system stability and fault tolerance.
    </p>
    <h4> Key Concepts </h4>
    <p>
        <ul>
            <li>Components: The individual units of functionality within a system (e.g., modules, classes).</li>

            <li>Connectors: The communication pathways between components (e.g., APIs, middleware).</li>

            <li>Configurations: The specific arrangement of components and connectors.</li>

            <li>Views: Different perspectives of the architecture, such as logical, physical, development, and process views.</li>

            <li>Styles: Common architectural patterns (e.g., client-server, layered, microservices).</li>
    </ul>
    </p>
 
   </div>
    
    <div className='viewblog-bottombar'>
      <hr />
      <button className='viewblog-finish' onClick={openModal}>
        Finish
      </button>
      <button className='viewblog-cancel' onClick={closeModal1}>
        Cancel
      </button>
    </div>

    <RatingPopup modalIsOpen={modalIsOpen} closeModal={closeModal} />
    
    <button className={addFavourite?'viewblog-addfavourite':'viewblog-addfavourite-clicked'} onClick={HandleAddFavourite}>
       <FaPlus className="me-2 " /> Add Favourite
    </button>
    <button className='viewblog-comment' onClick={openModal2} >
        Comment
    </button>
    <BlogComment modalIsOpen2={modalIsOpen2} closeModal2={closeModal2} />

</div>
      </Modal>    
    </div>
  );
};

export default ViewBlogPopup;
