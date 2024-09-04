import React, { useState } from "react";
import "./ApplyLeaveHR.css";
import { IoMdArrowRoundBack } from "react-icons/io";
import axios from "axios";
import {useNavigate } from "react-router-dom";

function ApplyLeave({setActiveComponent }) {
  const [leave, setLeave] = useState({
    leaveType: "",
    startDate: "",
    endDate: "",
    reason: "",
  });

  const navigate = useNavigate();

  const [error, setError] = useState("");

  const validateDates = () => {
    setError("");
    if (new Date(startDate) >= new Date(endDate)) {
      setError("End date must be after start date.");
      return false;
    }
    return true;
  };

  const handleBackLeave = () => {
    setActiveComponent("Leave");
  };

  const { leaveType, startDate, endDate, reason } = leave;

  const handleInputChange = (e) => {
    setLeave({
      ...leave,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    console.log(leave);
    e.preventDefault();
    if (validateDates()) {
      try {
        await axios.post(`http://localhost:8080/api/hr/leave-creation`, leave);
        setActiveComponent("Leave");
      } catch (error) {
        console.error("Error entering leave data:", error);
      }
    }
  };

  return (
    <div className="apply-leave-body">
      <hr />

      <IoMdArrowRoundBack
        className="backarrow mt-3"
        onClick={handleBackLeave}
      />
      {/* <div className="leave-hr-tabs">
          <button className="tab-hr my-leaves active" >My Leaves</button>
          <button className="tab-hr others-leaves ">Others Leaves</button>
        </div> */}
      <div className="apply-leave-form-body">
        <form onSubmit={handleSubmit} style={{ width: "100%" }}>
          <p className="Apply-leave-form-title"> Apply A Leave</p>

          <div className="divform">
            <label htmlFor="leaveType" className="apply-leave-form-label">
              Leave Type
            </label>
            <select
              className="form-select"
              aria-label="Default select example"
              style={{ width: "20%", borderColor: "#000f44" }}
              name="leaveType"
              value={leaveType}
              onChange={(e) => handleInputChange(e)}
              required
            >
              <option value="" disabled selected></option>
              <option value="Casual">Casual</option>
              <option value="Annual">Annual</option>
              <option value="Monthly">Monthly</option>
              <option value="Medical">Medical</option>
            </select>
          </div>

          <br />

          <div className="divform-date">
            <div className="start-date">
              <label htmlFor="startDate" className="apply-leave-form-label">
                Start Date
              </label>
              <input
                type="date"
                className="form-control"
                id="startDate"
                name="startDate"
                value={startDate}
                onChange={(e) => handleInputChange(e)}
                required
                style={{ width: "65%", borderColor: "#000f44" }}
              />
            </div>

            <br />
            <div className="end-date">
              <label htmlFor="endDate" className="apply-leave-form-label">
                End Date
              </label>
              <input
                type="date"
                className="form-control"
                id="endDate"
                name="endDate"
                value={endDate}
                onChange={(e) => handleInputChange(e)}
                required
                style={{ width: "65%", borderColor: "#000f44" }}
              />
            </div>
          </div>

          <br />

          {error && <div className="alert alert-danger mt-3">{error}</div>}

          <div className="divform">
            <label htmlFor="leaveType" className="apply-leave-form-label">
              Reason
            </label>
            <textarea
              id="reason"
              name="reason"
              value={reason}
              onChange={(e) => handleInputChange(e)}
              className="applyLeave-inputtext"
              placeholder="Enter the reason.."
              style={{ height: "8rem", width: "55rem", borderColor: "#000f44" }}
            ></textarea>
          </div>

          <div className="contactus-form-button">
            <button
              type="submit"
              className="gradient-blue-btn"
              style={{ color: "white", marginRight: "1rem" }}
            >
              APPLY
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default ApplyLeave;
