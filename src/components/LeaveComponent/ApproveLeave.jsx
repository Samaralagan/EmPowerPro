import React, { useState } from "react";
import Header from "../layout/Header";
import "./ApproveLeave.css";
import { useNavigate } from "react-router-dom";

import { IoMdArrowRoundBack } from "react-icons/io";

const LeavePending = ({setActiveComponent}) => {
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    // Add your form submission logic here
    navigate("/somewhere"); // Navigate to another route after form submission
  };

  const handleBackLeave = () => {
    setActiveComponent("Leave");
  };
  return (
    <div className="pending-leave-body">
      
      <hr />

      <IoMdArrowRoundBack className="backarrow mt-3" style={{ color: "#000f44" }}  onClick={handleBackLeave}/>
      <div className="pending-leave-form-body">
        <form onSubmit={handleSubmit} style={{ width: "100%" }}>
          <div className="pending-leave-profile-section">
            <img
              src="https://randomuser.me/api/portraits/women/2.jpg"
              className="profile-pic"
            />
            <div className="pending-profile-info">
              <h2>Can Samuel</h2>
              <p>SUP-1005</p>
            </div>

            <div className="leave-type">
              <span style={{color:'#95a5a6'}}>Leave Type : </span>
              <span className="leave-type-value">Family Emergency</span>
            </div>
          </div>

          <div className="leave-details">
          <div className="date-section">
              <div>
                <div>
                  <label style={{ color: "#95a5a6" }}>From :</label>
                </div>
                <div>
                  <label> 15 / 07 / 2024</label>
                </div>
              </div>
              <div>
                <div>
                  <label style={{ color: "#95a5a6" }}>To :</label>
                </div>
                <div>
                  <label> 20 / 07 / 2024</label>
                </div>
              </div>
            </div>

            <div className="reason-section">
              <label>Reason :</label>
              <textarea >I have to take leave to attend to a family member who was involved in an accident from July 15 to July 20.</textarea>
            </div>
          </div>
        </form>
      </div>
      <div className="leave-reply-container">
                    <div className="leave-approve-reply-buttons">
                      <div className="leave-hr-approved">Approved</div>

                    </div>

                    <div className="leave-reply-comment " style={{color:"#2c3e50"}}>Your leave request for a family emergency from July 15 to July 20 has been approved. Please take the necessary time to support your family.</div>
                   
    </div>
    </div>
  );
};

export default LeavePending;
