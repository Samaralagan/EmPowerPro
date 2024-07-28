import React, {  useEffect, useRef } from 'react';
import "./RatingPopup.css";
import Modal from 'react-modal';
import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%) ',
    width: '30%',
    height: '30%',
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

const RatingPopup = ({ modalIsOpen, closeModal }) => {

  return (
    <div className="addblog-popup-body">
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
         <div> 
            <center>
                <h5>Rating</h5>
                <hr />
                <Stack spacing={1}>
                    <center>
                    <Rating style={{fontSize:'8vh'}} name="half-rating" defaultValue={0} precision={1} />
                    </center>
                </Stack>
            </center>
            <div className='viewblog-Rating-bottom mt-3'>
                <button className='viewblog-rating-cancel' onClick={closeModal}>Cancel</button>
                <button className='viewblog-rating-Done' onClick={closeModal}>Done</button>
            </div>
        </div>
      </Modal>    
    </div>
  );
};

export default RatingPopup;
