import React, { useEffect, useState } from "react";
import Header from "../layout/Header";
import "./leavePending.css";
import { useNavigate, useParams } from "react-router-dom";

import { IoMdArrowRoundBack } from "react-icons/io";
import axios from "axios";

const LeavePending = ({ setActiveComponent }) => {
  const navigate = useNavigate();
  const [leave, setLeave] = useState("");
  const [comment, setComment] = useState("");
  const { leaveId } = useParams();

  useEffect(() => {
    axios
      .get(`http://localhost:8080/api/v1/hr/leave-request-getOne/${leaveId}`)
      .then((response) => {
        setLeave(response.data);
      })
      .catch((error) => {
        console.error("Error fetching leave details", error);
      });
  }, [leaveId]);

  const handleApprove = async (leaveId) => {
    try {
      const response = await axios.put(
        `http://localhost:8080/api/v1/hr/leave-set-approved/${leaveId}?comment=${comment}`
      );
      console.log(response.data);
      navigate("/Leaves/HR/OthersLeave");
    } catch (error) {
      console.error("Error rejecting leave", error);
    }
  };

  const handleReject = async (leaveId) => {
    try {
      const response = await axios.put(
        `http://localhost:8080/api/v1/hr/leave-set-rejected/${leaveId}?comment=${comment}`
      );
      console.log(response.data);
      navigate("/Leaves/HR/OthersLeave");
    } catch (error) {
      console.error("Error rejecting leave", error);
    }
  };

  const handleBackLeave = () => {
    // navigate(-1);
    navigate("/Leaves/HR/OthersLeave");
  };
  return (
    <div className="pending-leave-body">
      <hr />

      <IoMdArrowRoundBack
        className="backarrow"
        style={{ color: "#000f44" }}
        onClick={handleBackLeave}
      />
      <div className="pending-leave-form-body">
        <form style={{ width: "100%" }}>
          <div className="pending-leave-profile-section">
            <img
              src="https://randomuser.me/api/portraits/men/3.jpg"
              className="profile-pic"
            />
            <div className="pending-profile-info">
              <h2>{leave.employeeName}</h2>
              <p>Emp NO: {leave.senderId}</p>
            </div>

            <div className="leave-type">
              <span style={{ color: "#95a5a6" }}>Leave Type : </span>
              <span className="leave-type-value">{leave.leaveType}</span>
            </div>
          </div>

          <div className="leave-details">
            <div className="reason-section">
              <label>Reason</label>
              <textarea placeholder={leave.reason} readOnly></textarea>
            </div>
          </div>
        </form>
      </div>
      <div className="leave-reply-container">
        <div className="leave-reply-buttons">
          <button
            onClick={() => handleApprove(leave.id)}
            className="leave-hr-approve-button"
          >
            Approve
          </button>
          <button
            onClick={() => handleReject(leave.id)}
            className="leave-hr-reject-button"
          >
            Reject
          </button>
        </div>

        <div className="leave-reply-comment">
          <textarea
            onChange={(e) => setComment(e.target.value)}
            placeholder="Enter your comment....."
          />
        </div>
      </div>
    </div>
  );
};

export default LeavePending;
