import React, { useState } from 'react';
import Modal from 'react-modal';
import './BankAccountModal.css'
import axios from 'axios';

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
  const [username, setUsername] = useState("")
  const [bankName, setBankName] = useState("")
  const [accNo, setAccNo] = useState()
  const [branch, setBranch] = useState("")
  const [data, setData] = useState({})

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = {
      username: username,
      bankName: bankName,
      acc_no : accNo,
      branch : branch

    };
    
    try {
      console.log(data)
      const response = await axios.post("http://localhost:8080/api/v1/finance/bank-creation", data);
      console.log(response.data);
      setData(response.data)
      alert("BankDetails Created Successfully");
      closeModal();
      setBankName("")
      setUsername("")
      setAccNo()
      setBranch("")
    } catch (error) {
      console.error("Error submitting BankAccounts:", error.response?.data || error.message);
      alert("There was an error submitting Payroll.");
    }
    
  };
  

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
         <hr/>
         <form onSubmit={handleSubmit}>
         <div className='PayrollFixedRates-content' >
            <div className='PayrollFixedRates-content-row'>
              <div className='PayrollFixedRates-content-col'>
                 <label htmlFor="">User Name :</label>
                 <input type="text" value={username}
              onChange={(e) => setUsername(e.target.value)}/>
              </div>
              <div className='PayrollFixedRates-content-col'>
                <label htmlFor="">Bank Name :</label>
                <input type="text" value={bankName}
              onChange={(e) => setBankName(e.target.value)}/>
              </div>
            </div>
            <div className='PayrollFixedRates-content-row'>
              <div className='PayrollFixedRates-content-col'>
                 <label htmlFor="">Account No :</label>
                 <input type="text" value={accNo}
              onChange={(e) => setAccNo(e.target.value)} />
              </div>
              <div className='PayrollFixedRates-content-col'>
                <label htmlFor="">Branch:</label>
                <input type="text" value={branch}
              onChange={(e) => setBranch(e.target.value)}/>
              </div>
            </div>
            
           
            
         </div>
          <div style={{position:"relative",left:"35rem"}}>
            <button className='gradient-blue-btn mt-4' onSubmit={handleSubmit}>SAVE</button>
          </div>
         </form>

       </div>
      </Modal>    
    </div>
  );
};

export default PayrollFixedRates;
