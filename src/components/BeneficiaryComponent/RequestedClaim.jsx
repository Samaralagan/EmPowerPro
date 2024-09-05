import React from "react";
import SideBar from "../common/SideBar";
import Header from "../layout/Header";
import "./Beneficiary.css";

import { FaArrowLeft } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";

import profile2 from "../../assets/images/profile2.png";

import {
  FaClock,
  FaSearchLocation,
  FaCalendarDay,
  FaDollarSign,
} from "react-icons/fa";

function RequestedClaim({ setActiveComponent }) {
  const navigate = useNavigate();

  // const handleClaimClick = () => {
  //   navigate("/EXEC_Beneficiary");
  // };
  const handleBack = () => {
    setActiveComponent("Beneficiary");
  };
  return (
    <div>
      <SideBar />

      {/* <Header /> */}

      <div className="applied-claim-body">
        <div className="applied-container">
          <div className="form-arrow" onClick={handleBack}>
            <FaArrowLeft className="arrow_icon" />
          </div>

          <div className="claimed-box">
            <div className="event-reason-row">
              <img src={profile2} alt="Event 1" className="party-image" />

              <div className="event-topic-reason"> 
                <div>Can Williams</div>
                <div className="emp-number">EMP-10005</div>
                
                </div>
            </div>

            <div className="party-oneline">
              <div className="party-detail">
                <div className="party-subtopics">
                  <FaCalendarDay />
                </div>
                <div className="party-content">Claimed Date - 18 March 2024 </div>
              </div>
            </div>
            <br/>

            <div className="form-detail">

              <label htmlFor="account-number" className="form-detail-topic">
                 Reason
              </label>
              <br />
              <input
                id="account-number"
                className="form-3-input"
                placeholder="Hospitalization"
              />
            </div>

            <div className="one-row-detail">
              <div className="form-detail">
                <label htmlFor="bank-name" className="form-detail-topic">
                  Uploaded Documents
                </label>
                <br />
                <input
                id="account-number"
                className="claim-form-dropdown"
                placeholder="MedicalReport.pdf"
              />
               
              </div>

              <div className="form-detail">
                <label htmlFor="branch-name" className="form-detail-topic">
                   Amount
                </label>
                <br />
                <input
                id="account-number"
                className="claim-form-dropdown"
                placeholder="Rs.200,000.00"
              />

               
              </div>
            </div>



           

           
          </div>
        </div>

        <div className="reply-container">
          <div className="reply-buttons">
            <button className="approve-button">Approve</button>
            <button className="reject-button">Reject</button>
          </div>

          <div className="reply-comment">Enter your comment.....</div>
        </div>
      </div>
    </div>
  );
}

export default RequestedClaim;
