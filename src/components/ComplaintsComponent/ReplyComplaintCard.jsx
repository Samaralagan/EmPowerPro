import React from "react";
import "./replycomplaintcard.css";
import { Link } from "react-router-dom";

const ReplyComplaintCard = ({ name, about, date, description }) => {
  return (
    <div className="reply-complaintcard-body">
      <div className="reply-complaintcard-content">
        <div className="reply-complaintcard-header">
          <div className="reply-left-flexbox-complaint">
            <h5>{name}</h5>
            <br />

            <p className="reply-complaintcard-header-about">
              <b>{about}</b>
            </p>
          </div>
        </div>
        <div className="reply-complaintcard-header">
          <div className="reply-right-flexbox-complaint">
            <h5>{date}</h5>
            <br />
            <br />
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

export default ReplyComplaintCard;
