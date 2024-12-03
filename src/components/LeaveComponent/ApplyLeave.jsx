import React, { useState } from "react";
import Header from "../layout/Header";
import "./ApplyLeave.css";
import { IoMdArrowRoundBack } from "react-icons/io";
import axios from "axios";

function ApplyLeave({ setActiveComponent }) {
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [leaveType, setLeaveType] = useState("");
  const [reason, setReason] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();

    const userId = localStorage.getItem("userId");

    if (validateDates()) {
      const data = {
        senderId: userId,
        leaveType,
        startDate,
        endDate,
        reason,
      };

      try {
        const token = localStorage.getItem("token");
        const response = await axios.post(
          "http://localhost:8080/api/v1/employee/leave-creation",
          data,
          {
            headers: {
              Authorization: `Bearer ${token}`,
              "Content-Type": "application/json",
            },
          }
        );

        setActiveComponent("Leave");
      } catch (err) {
        console.log("Error submitting leave application", err);
        alert("failed to submit application,please try again");
      }
    }
  };

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

  return (
    <div className="contentbodyall">
      {/* <Header />
      <hr /> */}

      <IoMdArrowRoundBack className="backarrow" onClick={handleBackLeave} />

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
              onChange={(e) => setLeaveType(e.target.value)}
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
                value={startDate}
                onChange={(e) => setStartDate(e.target.value)}
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
                value={endDate}
                onChange={(e) => setEndDate(e.target.value)}
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
              className="applyLeave-inputtext"
              placeholder="Enter the reason.."
              style={{ height: "8rem", width: "60rem", borderColor: "#000f44" }}
              value={reason}
              onChange={(e) => setReason(e.target.value)}
              required
            ></textarea>
          </div>

          <div className="contactus-form-button">
            <button
              type="submit"
              className="gradient-blue-btn"
              style={{ color: "white", marginRight: "5rem" }}
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
