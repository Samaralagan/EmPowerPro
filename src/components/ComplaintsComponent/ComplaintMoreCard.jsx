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
  filePath,
  setActiveComponent,
}) => {
  const navigate = useNavigate();
  const handleBackClick = () => {
    navigate(-1); // Navigates to the previous page
  };

  const handleShowAttachment = () => {
    // Open the file using the backend endpoint
    const downloadUrl = `http://localhost:8080/api/v1/hr/complaint-file?filePath=${encodeURIComponent(
      filePath
    )}`;
    window.open(downloadUrl, "_blank");
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
            {filePath && (
              <button
                className="complaintmorecard-header-button"
                onClick={handleShowAttachment}
              >
                Show Attachment
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ComplaintMoreCard;
