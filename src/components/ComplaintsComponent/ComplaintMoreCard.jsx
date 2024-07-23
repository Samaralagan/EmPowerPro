import React from "react";
import "./complaintmorecard.css";
import { IoMdArrowRoundBack } from "react-icons/io";

const ComplaintMoreCard = ({
  status,
  about,
  date,
  to,
  description,
  reply,
  setActiveComponent,
}) => {
  const handlemorecomplaint = () => {
    if (setActiveComponent) {
      setActiveComponent("Complaints"); // Ensure "Complaints" matches the value in ComplaintsPage.jsx
    }
  };

  return (
    <div>
      <IoMdArrowRoundBack className="backarrow" onClick={handlemorecomplaint} />
      <div className="complaintmorecard-body">
        <div className="complaintmorecard-content">
          <div className="complaintmorecard-header">
            <br />
            <h5 className={status === "pending" ? "pending" : "approved"}>
              {status}
            </h5>
            <br />
            <div className="complaintmorecard-content">
              <h3 className="complaintmorecard-header-heading">
                <b>{about}</b>
              </h3>
              <p className="right-flexbox-complaintmore">
                Complaint raised on {date}
              </p>
            </div>
            <p className="complaintmorecard-header-gray">to : </p>
            <p className="complaintmorecard-header-text">{to}</p>
            <br />
            <p className="complaintmorecard-header-gray">description : </p>
            <p className="complaintmorecard-header-text">{description}</p>
            <br />
            <p className="complaintmorecard-header-gray">reply : </p>
            <p className="complaintmorecard-header-text">{reply}</p>
          </div>
          <div></div>
        </div>
      </div>
    </div>
  );
};

export default ComplaintMoreCard;
