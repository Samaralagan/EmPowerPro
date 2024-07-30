import React from 'react';
import "./PerformanceShareRemarks.css";
import Modal from 'react-modal';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%) ',
    width: '50%',
    height: '80%',
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

const PerformanceShareRemarks = ({ modalIsOpen, closeModal }) => {

  return (
    <div className="addblog-popup-body">
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
         <div> 
            <div className='blogcomment-top'>
                <center>
                    <h5>SHARE REMARKS</h5>
                </center>
                <hr />
            </div>
            <div className='blogcomment-content'>
                <div className='Performance-comment'>
                    <span>March 23,2024</span>
                    <p className='ps-3'> “His leadership skills have significantly boosted our overall performance."</p>
                </div>
                <div className='Performance-comment'>
                    <span>March 23,2024</span>
                    <p className='ps-3'> “His leadership skills have significantly boosted our overall performance."</p>
                </div>
                <div className='Performance-comment'>
                    <span>March 23,2024</span>
                    <p className='ps-3'> “His leadership skills have significantly boosted our overall performance."</p>
                </div>
                <div className='Performance-comment'>
                    <span>March 23,2024</span>
                    <p className='ps-3'> “His leadership skills have significantly boosted our overall performance."</p>
                </div>
                <div className='Performance-comment'>
                    <span>March 23,2024</span>
                    <p className='ps-3'> “His leadership skills have significantly boosted our overall performance."</p>
                </div>
                <div className='Performance-comment'>
                    <span>March 23,2024</span>
                    <p className='ps-3'> “His leadership skills have significantly boosted our overall performance."</p>
                </div>
                <div className='Performance-comment'>
                    <span>March 23,2024</span>
                    <p className='ps-3'> “His leadership skills have significantly boosted our overall performance."</p>
                </div>
                <div className='Performance-comment'>
                    <span>March 23,2024</span>
                    <p className='ps-3'> “His leadership skills have significantly boosted our overall performance."</p>
                </div>
            </div>
            <div className='blogcomment-textarea'>
                <textarea name="" id="" placeholder='Add your remark'></textarea>
            </div>
            <div className='blogcomment-bottom mt-3'>   
                <button className='blogcomment-cancel' onClick={closeModal}>Cancel</button>
                <button className='blogcomment-sent' onClick={closeModal}>Send</button>
            </div>
        </div>
      </Modal>    
    </div>
  );
};

export default PerformanceShareRemarks;
