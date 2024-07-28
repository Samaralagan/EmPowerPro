import React, { useState } from "react";
import Header from "../layout/Header";
import "./leavePending.css";
import { useNavigate } from "react-router-dom";

import { IoMdArrowRoundBack } from "react-icons/io";

const LeavePending = () => {
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    // Add your form submission logic here
    navigate("/somewhere"); // Navigate to another route after form submission
  };

  return (
    <div className="pending-leave-body">
      <Header />
      <hr />

      <IoMdArrowRoundBack className="backarrow" style={{ color: "#000f44" }} />
      <div className="pending-leave-form-body">
        <form onSubmit={handleSubmit} style={{ width: "100%" }}>
          <div className="pending-leave-profile-section">
            <img
              src="https://randomuser.me/api/portraits/men/3.jpg"
              className="profile-pic"
            />
            <div className="pending-profile-info">
              <h2>Can Samuel</h2>
              <p>SUP-1005</p>
            </div>

            <div className="leave-type">
              <span style={{color:'#95a5a6'}}>Leave Type : </span>
              <span className="leave-type-value">Medical</span>
            </div>
          </div>

          <div className="leave-details">
            <div className="date-section">
              <div className="pending-date-box">
                <label>From :</label>
              </div>
              <div className="pending-date-box">
                <label>To :</label>
              </div>
            </div>

            <div className="reason-section">
              <label>Reason</label>
              <textarea placeholder=""></textarea>
            </div>
          </div>
        </form>
      </div>
      <div className="leave-reply-container">
                    <div className="leave-reply-buttons">
                      <button className="leave-hr-approve-button">Approve</button>
                      <button className="leave-hr-reject-button">Reject</button>

                    </div>

                    <div className="leave-reply-comment">Enter your comment.....</div>
                   
    </div>
    </div>
  );
};

export default LeavePending;
