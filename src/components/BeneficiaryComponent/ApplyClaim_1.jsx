import React, { useState } from 'react';
import SideBar from '../common/SideBar';
import Header from '../layout/Header';
import './Beneficiary.css';
import { FaArrowLeft } from 'react-icons/fa6';
import { useNavigate } from 'react-router-dom';
import { TiTick } from "react-icons/ti";
// import Switch from '@mui/material/Switch';
import { Switch } from '@material-ui/core';


function ApplyClaim_1() {
  const navigate = useNavigate();
  const steps = ["Claim Info", "Upload Documents", "Banking Info"];
  const [currentStep, setCurrentStep] = useState(1);
  const [complete, setComplete] = useState(false);

  const handleClaimClick = () => {
    navigate('/Beneficiary');
  }

  const [checked, setChecked] = React.useState(false);

  const handleChange = (event) => {
    setChecked(event.target.checked);
  };

  return (
    <div>
      <SideBar />
      <Header />

      <div className="applied-claim-body">
        <div className="form-arrow" onClick={handleClaimClick}>
          <FaArrowLeft className="arrow_icon" />
        </div>

        <div className="flex justify-between">
          {steps.map((step, i) => (
            <div
              key={i}
              className={`step-item ${currentStep === i + 1 && "active"} ${(i + 1 < currentStep || complete) && "complete"} `}
            >
              <div className="step">
                {i + 1 < currentStep || complete ? <TiTick size={24} /> : i + 1}
              </div>
              <p className="text-gray-500">{step}</p>
            </div>
          ))}
        </div>

        {!complete && (
          <button
            className="btn"
            onClick={() => {
              currentStep === steps.length
                ? setComplete(true)
                : setCurrentStep((prev) => prev + 1);
            }}
          >
            {currentStep === steps.length ? "Finish" : "Next"}
          </button>
        )}

        <div className="form-box">
          <div className="one-row-detail">
            <div className="form-detail">

              <label htmlFor="start-date" className="form-detail-topic">Start Date</label>
              <br />
              <input type="date" id="start-date" className="form-input" />
            </div>

            <div className="form-detail">

              <label htmlFor="start-date" className="form-detail-topic">Whose this form for</label>
              <br />
              <select className="claim-form-dropdown" defaultValue="">
                <option value="" disabled></option>
                <option value="option1">Casual Leave</option>
                <option value="option2">Medical Leave</option>
                <option value="option3">Maternity Leave</option>
              </select>
            </div>

          </div>

          <div className="form-detail">

            <label htmlFor="start-date" className="form-detail-topic">Reason</label>
            <br />
            <textarea type="date" id="start-date" className="claim-input-textarea"/>
          </div>

          <div className="form-detail">

              <label htmlFor="start-date" className="form-detail-topic">Amount</label>
              <br />
              <input className="form-input" />
            </div>


           <div className="choose-toggle-row">
               <div className="choose-text">Is your claim related to a previous health issue ?</div>
               <Switch checked={checked} onChange={handleChange} />
            </div>
         






        </div>
      </div>
    </div>
  )
}

export default ApplyClaim_1;
