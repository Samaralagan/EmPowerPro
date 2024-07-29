import React from "react";
import "./card1.css";
import { FaClock } from "react-icons/fa";
import { GiCash } from "react-icons/gi";

function Card1(props) {
  return (
    <div className="card1body">
      {/* {props.test1} */}
      <div className="darkbox">{props.title}</div>
      <div className="p1" style={{ marginBottom: "0.3rem" }}>
        {props.variety}
      </div>
      <div style={{ display: "flex", flexDirection: "row" }}>
        <div style={{ display: "flex", flexDirection: "column", width: "50%" }}>
          <div className="divcard1" style={{ marginBottom: "0.5rem" }}>
            <FaClock className="card1icon" />{" "}
            <div className="p2">{props.type}</div>
          </div>
          <div className="divcard1">
            <GiCash className="card1icon" />{" "}
            <div className="p2">{props.salary}</div>
          </div>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            marginLeft: "4rem",
          }}
        >
          <div className="divcard2">Read More</div>
          <div className="p2" style={{ fontSize: "15px" }}>
            {props.countappilication}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card1;
