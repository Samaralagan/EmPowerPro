import React from "react";
import "./ComplaintsCard.css";
import { Link } from "react-router-dom";

const ComplaintsCard = ({ status, about, date }) => {
  return (
    <div className="complaintcard-body">
      <div className="complaintcard-content">
        <div className="complaintcard-header">
          <div className="left-flexbox-complaint">
            <h5 className={status === "pending" ? "pending" : "approved"}>
              {status}
            </h5>
            <br />
            <p className="complaintcard-header-gray">Complaint</p>
            <p className="complaintcard-header-about">
              <b>{about}</b>
            </p>
          </div>
        </div>
        <div className="complaintcard-header">
          <div className="right-flexbox-complaint">
            <h5>{date}</h5>
            <br />
            <br />
            <Link to="/Complaintsmore" style={{ textDecoration: "none" }}>
              <p>View Details &gt;&gt;&gt; </p>
            </Link>
          </div>
        </div>

        <div></div>
      </div>
    </div>

    // <div>
    //   <div className={status === "pending" ? "pending" : "approved"}>
    //     {status}
    //   </div>
    //   {/* <div className="pending">{status}</div> */}
    // </div>
  );
};

export default ComplaintsCard;
