import React from 'react';
import Modal from 'react-modal';
import './BankAccountModal.css'

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%) ',
    width: '50%',
    height: '65%',
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

const PayrollFixedRates = ({ modalIsOpen, closeModal}) => {

  return (
    <div className="addblog-popup-body">
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
       <button className="close-button" onClick={closeModal}>×</button>
       <div>
         <center><h5>Bank Account Details</h5></center>
         <hr />
         <form action="">
         <div className='PayrollFixedRates-content' >
            <div className='PayrollFixedRates-content-row'>
              <div className='PayrollFixedRates-content-col'>
                 <label htmlFor="">User Name :</label>
                 <input type="text" />
              </div>
              <div className='PayrollFixedRates-content-col'>
                <label htmlFor="">Bank Name :</label>
                <input type="text" />
              </div>
            </div>
            <div className='PayrollFixedRates-content-row'>
              <div className='PayrollFixedRates-content-col'>
                 <label htmlFor="">Account No :</label>
                 <input type="text" />
              </div>
              <div className='PayrollFixedRates-content-col'>
                <label htmlFor="">Branch:</label>
                <input type="text" />
              </div>
            </div>
            
           
            
         </div>
          <div style={{position:"relative",left:"35rem"}}>
            <button className='gradient-blue-btn mt-4' onClick={closeModal}>SAVE</button>
          </div>
         </form>

       </div>
      </Modal>    
    </div>
  );
};

export default PayrollFixedRates;
