import React from "react";
import SideBar from "../common/SideBar";
import Header from "../layout/Header";
import "./NewApproval.css";

import { FaArrowLeft } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";

import event_3 from "../../assets/images/event-3.jpg";

import {
  FaClock,
  FaSearchLocation,
  FaCalendarDay,
  FaDollarSign,
} from "react-icons/fa";

function NewApproval() {
  const navigate = useNavigate();

  return (
    <div>
      <SideBar />

      <Header />

      <div className="new-resume-applied-claim-body">
        <div className="new-resume-applied-container">
          <div className="new-resume-form-arrow">
            <FaArrowLeft className="new-resume-arrow_icon" />
          </div>

          <div className="new-resume-claimed-box">
            <div className="new-resume-event-reason-row">
              <div className="new-resume-event-topic-reason">Can Samuel </div>

              <td>
                <button className="new-resume"> View Resume </button>
              </td>
            </div>

            <hr className="resume-rule" />

            <div className="new-resume-party-oneline">
              <div className="new-resume-detail-1">Job Role :</div>
              <div className="new-resume-detail-2">
                Intern Front-End Developer
              </div>
            </div>

            <div className="new-resume-party-oneline">
              <div className="new-resume-detail-1">Status :</div>
              <div className="new-resume-detail-2">Internship</div>
            </div>

            <div className="new-resume-party-oneline">
              <div className="new-resume-detail-1">Email :</div>
              <div className="new-resume-detail-2">cansamuel2@gmail.com</div>
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

export default NewApproval;
