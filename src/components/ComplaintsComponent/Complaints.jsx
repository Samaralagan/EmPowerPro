import React, { useState, useEffect } from "react";
import { FaPlusCircle, FaSearch } from "react-icons/fa";
import ComplaintsCard from "../common/ComplaintsCard";
import ComplaintsToMe from "./ComplaintsToMe";
import "./Complaints.css";
import axios from "axios";

const Complaints = ({ setActiveComponent }) => {
  const [activeTab, setActiveTab] = useState("my-complaints");
  const [complaints, setComplaints] = useState([]);
  const [filteredComplaints, setFilteredComplaints] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [filter, setFilter] = useState("All");

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  const handleCreateNewComplaint = () => {
    setActiveComponent("NewComplaint");
  };

  useEffect(() => {
    const fetchComplaints = async () => {
      try {
        const userId = localStorage.getItem("userId");

        if (userId) {
          const response = await axios.get(
            `http://localhost:8080/api/v1/hr/complaint/${userId}`
          );
          setComplaints(response.data);
          setFilteredComplaints(response.data);
        } else {
          console.error("No userId found in localStorage.");
        }
      } catch (error) {
        console.error("Error fetching complaints", error);
      }
    };

    fetchComplaints();
  }, []);

  useEffect(() => {
    const applyFilters = () => {
      let updatedComplaints = complaints;

      if (filter !== "All") {
        updatedComplaints = updatedComplaints.filter(
          (complaint) => complaint.status === filter.toUpperCase()
        );
      }

      if (searchTerm.trim() !== "") {
        updatedComplaints = updatedComplaints.filter((complaint) =>
          complaint.about.toLowerCase().includes(searchTerm.toLowerCase())
        );
      }

      setFilteredComplaints(updatedComplaints);
    };

    applyFilters();
  }, [filter, searchTerm, complaints]);

  const handleFilterChange = (e) => {
    setFilter(e.target.value);
  };

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <div className="contentbodyall">
      <nav>
        <div className="leave-hr-tabs" id="nav-tab" role="tablist">
          <button
            className={`tab-hr my-leaves ${
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
            className={`tab-hr others-leaves ${
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
              value={filter}
              onChange={(e) => setFilter(e.target.value)}
              style={{
                width: "345px",
                border: "2px solid black",
                marginLeft: "3vh",
              }}
            >
              <option value="All">All</option>
              <option value="Pending">Pending</option>
              <option value="Solved">Solved</option>
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
                placeholder="Search by about..."
                value={searchTerm}
                onChange={handleSearchChange}
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
                onClick={() => {}}
              >
                Search
              </button>
            </div>
          </div>
          <div>
            {filteredComplaints.map((complaint, index) => (
              <ComplaintsCard
                key={index}
                complaintId={complaint.id}
                status={complaint.status}
                about={complaint.about}
                date={`${new Date(
                  complaint.date
                ).toLocaleDateString()} ${new Date(
                  complaint.date
                ).toLocaleTimeString()}`}
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
