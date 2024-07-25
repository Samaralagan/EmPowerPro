import React, { useState } from 'react';
import SideBar from '../common/SideBar';
import Header from '../layout/Header';
import './Beneficiary.css';
import { FaArrowLeft } from 'react-icons/fa6';
import { useNavigate } from 'react-router-dom';
import { TiTick } from 'react-icons/ti';
import { Switch, makeStyles } from '@material-ui/core';



function ApplyClaim_3() {

  const navigate = useNavigate();
  const steps = ['Claim Info', 'Upload Documents', 'Banking Info'];
  const [currentStep, setCurrentStep] = useState(3);
  const [complete, setComplete] = useState(false);

  const handleClaimClick = () => {
    navigate('/Beneficiary/Employee');
  };

  const handleNext = () => {
     navigate('/Beneficiary/Employee');
  };

  const handleBack = () => {
    navigate('/ApplyClaim-2');
  };

  // Default values for each input field
  const [holderName, setHolderName] = useState('K.P.Raguram');
  const [accountNumber, setAccountNumber] = useState('8001-9081-6579');
  const [bankName, setBankName] = useState('option1');
  const [branchName, setBranchName] = useState('option1');

  return (
    <div>
      <SideBar />
      <Header />

      <div className="applied-claim-body">
        <div className="applied-claim-body-2">

       
        <div className="form-arrow" onClick={handleClaimClick}>
          <FaArrowLeft className="arrow_icon" />
        </div>

        <div className="flex justify-between">
          {steps.map((step, i) => (
            <div
              key={i}
              className={`step-item ${currentStep === i + 1 && 'active'} ${(i + 1 < currentStep || complete) && 'complete'} `}
            >
              <div className="step">
                {i + 1 < currentStep || complete ? <TiTick size={24} /> : i + 1}
              </div>
              <p className="text-gray-500">{step}</p>
            </div>
          ))}
        </div>

        <div className="form-box">
          <div className="form-detail">
            <label htmlFor="holder-name" className="form-detail-topic">Account Holder’s Name</label>
            <br />
            <input 
              id="holder-name" 
              className="form-3-input" 
              value={holderName} 
              onChange={(e) => setHolderName(e.target.value)} 
            />
          </div>

          <div className="form-detail">
            <label htmlFor="account-number" className="form-detail-topic">Account Number</label>
            <br />
            <input 
              id="account-number" 
              className="form-3-input" 
              value={accountNumber} 
              onChange={(e) => setAccountNumber(e.target.value)} 
            />
          </div>

          <div className="one-row-detail">
            <div className="form-detail">
              <label htmlFor="bank-name" className="form-detail-topic">Bank Name</label>
              <br />
              <select 
                id="bank-name" 
                className="claim-form-dropdown" 
                value={bankName} 
                onChange={(e) => setBankName(e.target.value)}
              >
                <option value="" disabled></option>
                <option value="option1">Commercial Bank</option>
                <option value="option2">Sampath Bank</option>
                <option value="option3">Selan Bank</option>
              </select>
            </div>

            <div className="form-detail">
              <label htmlFor="branch-name" className="form-detail-topic">Branch Name or Number</label>
              <br />
              <select 
                id="branch-name" 
                className="claim-form-dropdown" 
                value={branchName} 
                onChange={(e) => setBranchName(e.target.value)}
              >
                <option value="" disabled></option>
                <option value="option1">Colombo 08</option>
                <option value="option2">Gampaha</option>
                <option value="option3">Kandy</option>
              </select>
            </div>
          </div>

          <div className="form-button-row">
            <button className="back-button" onClick={handleBack}>Back</button>
            <button className="next-button" onClick={handleNext}>
              {currentStep === steps.length ? 'Finish' : 'Next'}
            </button>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
}

export default ApplyClaim_3;
