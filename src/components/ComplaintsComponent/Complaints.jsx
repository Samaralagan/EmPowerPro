import React, { useState } from "react";
import { FaPlusCircle, FaSearch } from "react-icons/fa";
import { ComplaintsData } from "../constants/temporary";
import ComplaintsCard from "../common/ComplaintsCard";
import ComplaintsToMe from "./ComplaintsToMe";
import "./Complaints.css";

const Complaints = ({ setActiveComponent }) => {
  
  const [activeTab, setActiveTab] = useState("my-complaints");

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  const handleCreateNewComplaint = () => {
    setActiveComponent("NewComplaint");
  };

  return (
    <div className="contentbodyall">
      {/* <Header />
      <hr /> */}
      <nav>
        <div className="nav nav-tabs" id="nav-tab" role="tablist">
          <button
            className={`nav-link ${
              activeTab === "my-complaints" ? "active" : ""
            }`}
            id="nav-home-tab"
            type="button"
            role="tab"
            aria-controls="nav-home"
            aria-selected={activeTab === "my-complaints"}
            onClick={() => handleTabChange("my-complaints")}
          >
            My Complaints
          </button>
          <button
            className={`nav-link ${
              activeTab === "complaints-to-me" ? "active" : ""
            }`}
            id="nav-profile-tab"
            type="button"
            role="tab"
            aria-controls="nav-profile"
            aria-selected={activeTab === "complaints-to-me"}
            onClick={() => handleTabChange("complaints-to-me")}
          >
            Complaints to me
          </button>
        </div>
      </nav>
      <div className="tab-content" id="nav-tabContent">
        <div
          className={`tab-pane fade ${
            activeTab === "my-complaints" ? "show active" : ""
          }`}
          id="nav-home"
          role="tabpanel"
          aria-labelledby="nav-home-tab"
          tabindex="0"
        >
          <div className="contactus-form-button" style={{ width: "97%" }}>
            <button
              className="gradient-blue-btn"
              style={{ color: "white" }}
              onClick={handleCreateNewComplaint}
            >
              <FaPlusCircle className="me-2" />
              Create New Complaint
            </button>
          </div>
          <br />
          <div style={{ display: "flex" }}>
            <select
              className="form-select"
              aria-label="Default select example"
              style={{
                width: "345px",
                border: "2px solid black",
                marginLeft: "3vh",
              }}
            >
              <option selected>Filter By</option>
              <option value="1">Pending</option>
              <option value="2">Approved</option>
            </select>
            <div
              style={{
                display: "flex",
                marginLeft: "28.5rem",
                alignItems: "center",
                position: "relative",
              }}
            >
              <FaSearch className="search-icon" />
              <input
                className="border-inbox"
                type="text"
                placeholder="Search..."
                style={{
                  paddingLeft: "29px",
                  paddingRight: "8px",
                  paddingBottom: "8px",
                  paddingTop: "8px",
                  fontSize: "16px",
                }}
              />
              <button
                style={{
                  padding: "9.8px",
                  fontSize: "16px",
                  background: "var(--Main-color)",
                  color: "white",
                }}
              >
                Search
              </button>
            </div>
          </div>
          <div>
            {ComplaintsData.map((Card, index) => (
              <ComplaintsCard
                key={index}
                status={Card.status}
                about={Card.about}
                date={Card.date}
                setActiveComponent={setActiveComponent}
              />
            ))}
          </div>
        </div>
        <div
          className={`tab-pane fade ${
            activeTab === "complaints-to-me" ? "show active" : ""
          }`}
          id="nav-profile"
          role="tabpanel"
          aria-labelledby="nav-profile-tab"
          tabindex="0"
        >
          <ComplaintsToMe />
        </div>
      </div>
    </div>
  );
};

export default Complaints;
