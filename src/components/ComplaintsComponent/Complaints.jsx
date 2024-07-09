import React from "react";
import "./Complaints.css";
import Header from "../layout/Header";
import { FaPlusCircle } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";
import { ComplaintsData } from "../constants/temporary";
import { Card } from "react-bootstrap";
import ComplaintsCard from "../common/ComplaintsCard";

const Complaints = ({ setActiveComponent }) => {
  const handleCreateNewComplaint = () => {
    setActiveComponent("NewComplaint");
  };
  return (
    <div className="complaints-body">
      <Header />
      <hr />
      <div className="contactus-form-button">
        <button
          className="gradient-blue-btn "
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
            marginLeft: "32rem",
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
              // padding: "8px,8px,8px,29px",
              paddingLeft: "29px",
              paddingRight: "8px",
              paddingBottom: "8px",
              paddingTop: "8px",
              fontSize: "16px",
            }}
          />
          <button
            style={{
              padding: "8px",
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
          />
        ))}
      </div>
    </div>
  );
};

export default Complaints;
