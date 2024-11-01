import React, { useState } from 'react';
import "./ViewBlogPopup.css";
import Modal from 'react-modal';
import Quill from 'quill';
import 'quill/dist/quill.snow.css';
import { FaPlus } from 'react-icons/fa6';
import RatingPopup from './RatingPopup';
import BlogComment from './BlogComment';
import { QuillDeltaToHtmlConverter } from 'quill-delta-to-html';
import { createAddFavourite } from '../../service/BlogService';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%) ',
    width: '80%',
    height: '90%',
    backgroundColor: 'white',
    padding: '20px',
    borderRadius: '10px',
    boxShadow: '0 5px 15px rgba(0, 0, 0, 0.3)',
    zIndex: 1200,
    overflow: 'hidden',
  },
  overlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.15)',
    backdropFilter: 'blur(5px)',
    zIndex: 1200,
  },
};

const ViewBlogPopup = ({blogId, title ,contant, modalIsOpen1, closeModal1 }) => {
  const [addFavourite, setAddFavourite] = useState(true);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [modalIsOpen2, setModalIsOpen2] = useState(false);

  const HandleAddFavourite = () => {
    // console.log(data)
    //   updateCalenderMarker(data.id,data).then((response)=>{
    //       console.log(response.data)
    //       setAddFavourite(!addFavourite);
    //   }).catch(error=>{
    //       console.log(error);
    //   })
    const data = {
      'userId':'',
      'blog':''
    }

    createAddFavourite(data)
    .then((response) => {
      console.log(response.data);
    })
    .catch((error) => {
      console.error(error); 
      
    });
    
  };

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
    closeModal1();
  };

  const openModal2 = () => {
    setModalIsOpen2(true);
  };

  const closeModal2 = () => {
    setModalIsOpen2(false);
  };

  // Import Delta using Quill's import method
  const Delta = Quill.import('delta');
  
  const delta = new Delta(JSON.parse(contant).ops);  // Parse the content JSON
  const converter = new QuillDeltaToHtmlConverter(delta.ops, {});  // Convert Delta to HTML
  const html = converter.convert();  // Get the HTML string 

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
          <h2>{title}</h2>
          <hr />
        </div>

        <div>
          <div className='viewblog-content' dangerouslySetInnerHTML={{ __html: html }}>
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
          
          <button className={addFavourite ? 'viewblog-addfavourite' : 'viewblog-addfavourite-clicked'} onClick={HandleAddFavourite}>
             <FaPlus className="me-2 " /> Add Favourite
          </button>
          <button className='viewblog-comment' onClick={openModal2}>
              Comment
          </button>
          <BlogComment modalIsOpen2={modalIsOpen2} closeModal2={closeModal2} />
        </div>
      </Modal>    
    </div>
  );
};

export default ViewBlogPopup;
