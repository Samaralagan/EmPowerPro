import React from "react";
import SideBar from "../common/SideBar";
import Header from "../layout/Header";
import "./Beneficiary.css";

import { FaArrowLeft } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";

import event_3 from "../../assets/images/event-3.jpg";

import {
  FaClock,
  FaSearchLocation,
  FaCalendarDay,
  FaDollarSign,
} from "react-icons/fa";

function PendingEvent({ setActiveComponent }) {
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
              <img src={event_3} alt="Event 1" className="party-image" />
              <div className="event-topic-reason">Milestone Celebration</div>
            </div>

            <div className="party-oneline">
              <div className="party-detail">
                <div className="party-subtopics">
                  <FaCalendarDay />
                </div>
                <div className="party-content">18 March 2024 </div>
              </div>

              <div className="party-detail">
                <div className="party-subtopics">
                  <FaSearchLocation />
                </div>
                <div className=" party-content">At Shangri -La ,Colombo </div>
              </div>
            </div>

            <div className="party-oneline">
              <div className="party-detail">
                <div className="party-subtopics">
                  <FaClock />
                </div>
                <div className="party-content"> 7.30 pm - 11.30 pm</div>
              </div>

              <div className="party-detail">
                <div className="party-subtopics">
                  <FaDollarSign />
                </div>
                <div className="party-content">Rs.255,000.00 </div>
              </div>
            </div>

            <div className="applied-subtopics">Reason :</div>
            <div className="applied-content">
              {" "}
              Celebrating an anniversary can be a great way to show appreciation
              to employees for their hard work and dedication. It can boost
              morale and foster a sense of pride and belonging within the
              company.
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

export default PendingEvent;
