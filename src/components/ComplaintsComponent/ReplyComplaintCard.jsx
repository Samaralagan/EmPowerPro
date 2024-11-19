import { React, useState } from "react";
import "./replycomplaintcard.css";
import { IoMdArrowRoundBack } from "react-icons/io";
import { Link } from "react-router-dom";
import { FaPlusCircle, FaSearch } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const ReplyComplaintCard = ({ id, about, date, description, filePath }) => {
  const handleShowAttachment = () => {
    // Open the file using the backend endpoint
    const downloadUrl = `http://localhost:8080/api/v1/hr/complaint-file?filePath=${encodeURIComponent(
      filePath
    )}`;
    window.open(downloadUrl, "_blank");
  };

  const [reply, setReply] = useState("");
  const navigate = useNavigate();

  const handleSendReply = async () => {
    if (!reply.trim()) {
      alert("Reply cannot be empty");
      return;
    }

    try {
      const response = await fetch(
        `http://localhost:8080/api/v1/hr/complaint-reply/${id}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ reply, status: "SOLVED" }),
        }
      );

      if (response.ok) {
        alert("Reply Sent!");
        navigate(-1); // Redirect to the previous page
      } else {
        const errorData = await response.json();
        alert(`Failed to send reply: ${errorData.message}`);
      }
    } catch (error) {
      alert(`Error: ${error.message}`);
    }
  };

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

            <br />
            <p
              className="complaintmorecard-header-gray"
              style={{ marginLeft: "2vw" }}
            >
              description :{" "}
            </p>
            <p className="complaintmorecard-header-text">{description}</p>
            <br />
            {filePath && (
              <button
                className="complaintmorecard-header-button"
                onClick={handleShowAttachment}
              >
                Show Attachment
              </button>
            )}
            <p
              className="complaintmorecard-header-gray"
              style={{ marginLeft: "2vw" }}
            >
              Reply :{" "}
            </p>
            <p className="complaintmorecard-header-text">
              <textarea
                value={reply}
                onChange={(e) => setReply(e.target.value)}
                className="inputtext"
                placeholder="Type your reply here..."
              ></textarea>
            </p>
            <div className="contactus-form-button" style={{ width: "97%" }}>
              <button
                className="gradient-blue-btn"
                style={{ color: "white" }}
                onClick={handleSendReply}
              >
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
