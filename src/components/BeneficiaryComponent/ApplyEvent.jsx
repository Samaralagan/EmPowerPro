import React, { useState } from "react";
import SideBar from "../common/SideBar";
import Header from "../layout/Header";
import "./Beneficiary.css";
import { FaArrowLeft } from "react-icons/fa6";
import { FaUpload } from "react-icons/fa6";
import axios from "axios";

function ApplyEvent({ setActiveComponent }) {
  const [fileName, setFileName] = useState(null);
  const [eventName, setEventName] = useState("");
  const [reason, setReason] = useState("");
  const [location, setLocation] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [cost, setCost] = useState("");
  const token = localStorage.getItem("token");

  const handleClaimClick = () => {
    setActiveComponent("Beneficiary");
  };

  const handleFileChange = (event) => {
    if (event.target.files && event.target.files.length > 0) {
      setFileName(event.target.files[0]);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("name", eventName);
    formData.append("reason", reason);
    formData.append("location", location);
    formData.append("date", date);
    formData.append("time", time);
    formData.append("estimatedCost", cost);
    if (fileName) {
      formData.append("image", fileName);
    }

    console.log(formData);
    try {
      const response = await axios.post(
        "http://localhost:8080/api/v1/hr/event-creation",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
            Authorization: `Bearer ${token}`,
          },
        }
      );
      alert("Event submitted successfully!");
      console.log("Response:", response.data);
      setActiveComponent("Beneficiary");
    } catch (error) {
      console.error("Error submitting event:", error);
      alert("There was an error submitting your event request.");
    }
  };

  return (
    <div>
      <SideBar />
      <Header />

      <div className="applied-claim-body">
        <div className="applied-claim-body-2">
          <div className="form-arrow" onClick={handleClaimClick}>
            <FaArrowLeft className="arrow_icon" />
          </div>

          <div className="form-box">
            <div className="event-form-heading">Request New Event</div>

            <div className="form-detail">
              <label htmlFor="event-name" className="form-detail-topic">
                Event Name
              </label>
              <br />
              <input
                id="event-name"
                className="form-input"
                value={eventName}
                onChange={(e) => setEventName(e.target.value)}
              />
            </div>

            <div className="form-detail">
              <label htmlFor="reason" className="form-detail-topic">
                Reason
              </label>
              <br />
              <textarea
                id="reason"
                className="claim-input-textarea"
                value={reason}
                onChange={(e) => setReason(e.target.value)}
              />
            </div>

            <div className="form-detail">
              <label htmlFor="event-location" className="form-detail-topic">
                Location
              </label>
              <br />
              <input
                id="event-location"
                className="form-input"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
              />
            </div>

            <div className="one-row-detail">
              <div className="form-detail">
                <label htmlFor="start-date" className="form-detail-topic">
                  Date
                </label>
                <br />
                <input
                  type="date"
                  id="start-date"
                  className="form-input-date"
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                />
              </div>

              <div className="form-detail">
                <label htmlFor="event-time" className="form-detail-topic">
                  Time
                </label>
                <br />
                <input
                  id="event-time"
                  type="time"
                  className="form-input-time"
                  value={time}
                  onChange={(e) => setTime(e.target.value)}
                />
              </div>
            </div>

            <div className="one-row-detail">
              <div className="form-detail">
                <label htmlFor="event-cost" className="form-detail-topic">
                  Estimated Cost
                </label>
                <br />
                <input
                  id="event-cost"
                  className="form-input"
                  value={cost}
                  onChange={(e) => setCost(e.target.value)}
                />
              </div>

              <div className="form-detail">
                <div className="upload-topic" style={{ fontSize: "13px" }}>
                  Upload Documents
                </div>

                <div
                  className="upload-box"
                  onClick={() => document.getElementById("fileInput").click()}
                  style={{
                    height: "44px",
                    width: "330px",
                    border: "2px solid #D9D9D9",
                    borderRadius: "10px",
                    padding: "10px",
                    textAlign: "center",
                    cursor: "pointer",
                    color: "#007bff",
                    fontFamily: "Arial, sans-serif",
                    fontSize: "14px",
                    position: "relative",
                    margin: "8px 0px 0px 0px",
                  }}
                >
                  <FaUpload size={20} className="upload-icon" />

                  <input
                    id="fileInput"
                    type="file"
                    onChange={handleFileChange}
                    style={{ display: "none" }}
                  />
                </div>
                {fileName && (
                  <p style={{ marginTop: "10px", color: "#28a745" }}>
                    {fileName.name}
                  </p>
                )}
              </div>
            </div>

            <button className="newevent-button" onClick={handleSubmit}>
              Request
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ApplyEvent;
