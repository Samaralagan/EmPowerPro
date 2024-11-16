import React from "react";
import "./complaintmorecard.css";
import { IoMdArrowRoundBack } from "react-icons/io";
import { useNavigate } from "react-router-dom";

const ComplaintMoreCard = ({
  status,
  about,
  date,
  to,
  description,
  reply,
  setActiveComponent,
}) => {
  const navigate = useNavigate();
  const handleBackClick = () => {
    navigate(-1); // Navigates to the previous page
  };

  return (
    <div>
      <IoMdArrowRoundBack className="backarrow" onClick={handleBackClick} />
      <div className="claimed-box">
        <div className="complaintmorecard-content">
          <div className="complaintmorecard-header">
            <br />
            <h5 className={status === "PENDING" ? "pending" : "approved"}>
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
            {reply && ( // Conditionally render the reply section
              <>
                <p className="complaintmorecard-header-gray">reply : </p>
                <p className="complaintmorecard-header-text">{reply}</p>
              </>
            )}
            <br />{" "}
            <button className="complaintmorecard-header-button">
              {" "}
              Show Attachments{" "}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ComplaintMoreCard;
