<<<<<<< HEAD
import React,{useState,useEffect} from "react";
import "./Complaints.css";
import Header from "../layout/Header";
=======
import React, { useState } from "react";
>>>>>>> main
import { FaPlusCircle, FaSearch } from "react-icons/fa";
import { ComplaintsData } from "../constants/temporary";
import ComplaintsCard from "../common/ComplaintsCard";
import ComplaintsToMe from "./ComplaintsToMe";
<<<<<<< HEAD
import ComplaintsPage from "../../pages/ComplaintsPage";
import axios from "axios";

const Complaints = ({ setActiveComponent }) => {
  const [complaints, setComplaints] = useState([]);
  const location = useLocation();
  const getRoleName = () => {
    const pathname = decodeURIComponent(location.pathname); // Decode the URL
    const role = pathname.split("/")[2];
    return role;
  };
  const role = getRoleName();

  // useEffect(() => {
  //   const fetchComplaints = async () => {
  //     try {
  //       const response = await axios.get("http://localhost:8080/complaints");
  //       setComplaints(response.data);
  //     } catch (error) {
  //       console.error("Error fetching complaints data:", error);
  //     }
  //   };

  //   fetchComplaints();
  // }, []);

=======
import "./Complaints.css";

const Complaints = ({ setActiveComponent }) => {
  const [activeTab, setActiveTab] = useState("my-complaints");

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };
>>>>>>> main

  const handleCreateNewComplaint = () => {
    setActiveComponent("NewComplaint");
  };

  return (
    <div className="contentbodyall">
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
          tabIndex="0"
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
              <option defaultValue>Filter By</option>
              <option value="1">Pending</option>
              <option value="2">Approved</option>
            </select>
            <div
              style={{
                display: "flex",
                marginLeft: "33.5rem",
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
          tabIndex="0"
        >
          <ComplaintsToMe setActiveComponent={setActiveComponent} />
        </div>
      </div>
    </div>
  );
};

export default Complaints;
