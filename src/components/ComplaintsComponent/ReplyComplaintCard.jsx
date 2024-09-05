import React from "react";
import "./replycomplaintcard.css";
import { IoMdArrowRoundBack } from "react-icons/io";
import { Link } from "react-router-dom";
import { FaPlusCircle, FaSearch } from "react-icons/fa";

const ReplyComplaintCard = ({ name, about, date, description, image }) => {
  return (
    <div>
      {/* <IoMdArrowRoundBack className="backarrow" onClick={handlemorecomplaint} /> */}
      <div className="">
        <div className="complaintmorecard-content">
          <div className="complaintmorecard-header">
            <div className="complaintmorecard-content">
              <h3 className="complaintmorecard-header-heading">
                <b>{about}</b>
              </h3>
              <p className="right-flexbox-complaintmore">
                Complaint raised on {date}
              </p>
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                margin: "1vw 0 1vw 2vw",
              }}
            >
              <img src={image} alt="" className="img2" />
              <p>{name}</p>
            </div>

            <br />
            <p
              className="complaintmorecard-header-gray"
              style={{ marginLeft: "2vw" }}
            >
              description :{" "}
            </p>
            <p className="complaintmorecard-header-text">{description}</p>
            {/* <br /> */}
            <p
              className="complaintmorecard-header-gray"
              style={{ marginLeft: "2vw" }}
            >
              Reply :{" "}
            </p>
            <p className="complaintmorecard-header-text">
              <textarea name="" id="" className="inputtext"></textarea>
            </p>
            <div className="contactus-form-button" style={{ width: "97%" }}>
              <button className="gradient-blue-btn" style={{ color: "white" }}>
                <FaPlusCircle className="me-2" />
                Send
              </button>
            </div>
          </div>

          <div></div>
        </div>
      </div>
    </div>
  );
};

export default ReplyComplaintCard;
