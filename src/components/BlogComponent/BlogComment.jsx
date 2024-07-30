import React from 'react';
import "./BlogComment.css";
import Modal from 'react-modal';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%) ',
    width: '30%',
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

const BlogComment = ({ modalIsOpen2, closeModal2 }) => {

  return (
    <div className="addblog-popup-body">
      <Modal
        isOpen={modalIsOpen2}
        onRequestClose={closeModal2}
        style={customStyles}
        contentLabel="Example Modal"
      >
         <div> 
            <div className='blogcomment-top'>
                <center>
                    <h5>Comment</h5>
                </center>
                <hr />
            </div>
            <div className='blogcomment-content'>
                <div className='blogcomment-comment'>
                    <span>Kavalajan MVPS</span>
                    <p className='ps-3'> it's nice</p>
                </div>
                <div className='blogcomment-comment'>
                    <span>Kavalajan MVPS</span>
                    <p className='ps-3'> it's nice</p>
                </div>
                <div className='blogcomment-comment'>
                    <span>Kavalajan MVPS</span>
                    <p className='ps-3'> it's nice</p>
                </div>
                <div className='blogcomment-comment'>
                    <span>Kavalajan MVPS</span>
                    <p className='ps-3'> it's nice</p>
                </div>
                <div className='blogcomment-comment'>
                    <span>Kavalajan MVPS</span>
                    <p className='ps-3'> it's nice</p>
                </div>
                <div className='blogcomment-comment'>
                    <span>Kavalajan MVPS</span>
                    <p className='ps-3'> it's nice</p>
                </div>
                <div className='blogcomment-comment'>
                    <span>Kavalajan MVPS</span>
                    <p className='ps-3'> it's nice</p>
                </div>
                <div className='blogcomment-comment'>
                    <span>Kavalajan MVPS</span>
                    <p className='ps-3'> it's nice</p>
                </div>
            </div>
            <div className='blogcomment-textarea'>
                <textarea name="" id=""></textarea>
            </div>
            <div className='blogcomment-bottom mt-3'>   
                <button className='blogcomment-cancel' onClick={closeModal2}>Cancel</button>
                <button className='blogcomment-sent' onClick={closeModal2}>Send</button>
            </div>
        </div>
      </Modal>    
    </div>
  );
};

export default BlogComment;
