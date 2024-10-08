import React from "react";
import { FaSearch } from "react-icons/fa";
import "./inquries.css";
import Header from "../layout/Header";
import Inquries_card from "./Inquries_card";
import { InquriesData } from "../constants/temporary";

function Inquries({ setActiveComponent }) {
  // Accept setActiveComponent as a prop
  return (
    <div className="contentbodyall1">
      {/* <Header />
      <hr /> */}
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
        {InquriesData.map((card, index) => (
          <Inquries_card
            key={index}
            number1={card.number1}
            email={card.email}
            status={card.status}
            subject={card.subject}
            date={card.date}
            setActiveComponent={setActiveComponent} // Pass the function as a prop
          />
        ))}
      </div>
    </div>
  );
}

export default Inquries;
