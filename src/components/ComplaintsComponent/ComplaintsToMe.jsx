import React from "react";
import "./complaintstome.css";
import { FaSearch } from "react-icons/fa";
import { ComplaintsData } from "../constants/temporary";
import ComplaintsReply from "./ComplaintsReply";

const ComplaintsToMe = ({ setActiveComponent }) => {
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
          <option defaultValue>Filter By</option>
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
      {ComplaintsData.map((Card, index) => (
        <ComplaintsReply
          key={index}
          reply_status={Card.reply_status}
          about={Card.about}
          image={Card.image}
          name={Card.name}
          date={Card.date}
          setActiveComponent={setActiveComponent}
        />
      ))}
    </div>
  );
};

export default ComplaintsToMe;
