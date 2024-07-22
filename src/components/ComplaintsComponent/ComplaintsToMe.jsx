import React from "react";
import "./complaintstome.css";
import { FaSearch } from "react-icons/fa";
import { ComplaintsData } from "../constants/temporary";
import { Card } from "react-bootstrap";
import ComplaintsCard from "../common/ComplaintsCard";
function ComplaintsToMe() {
  return (
    <div className="complaintstome-body">
      <div style={{ display: "flex", marginTop: "1.5rem" }}>
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
      {ComplaintsData.map((Card, index) => (
        <ComplaintsCard
          key={index}
          status={Card.status}
          about={Card.about}
          date={Card.date}
        />
      ))}
    </div>
  );
}

export default ComplaintsToMe;
