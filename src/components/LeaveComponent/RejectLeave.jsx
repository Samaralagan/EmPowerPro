import { React, useState, useEffect } from "react";
import Header from "../layout/Header";
import "./RejectLeave.css";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

import { IoMdArrowRoundBack } from "react-icons/io";

const RejectLeave = ({ setActiveComponent }) => {
  const navigate = useNavigate();
  const [leave, setLeave] = useState("");
  const { leaveId } = useParams();

  const handleSubmit = (event) => {
    event.preventDefault();
    // Add your form submission logic here
    navigate("/somewhere"); // Navigate to another route after form submission
  };
  const handleBackLeave = () => {
    navigate("/Leaves/HR/OthersLeave");
  };

  useEffect(() => {
    axios
      .get(`http://localhost:8080/api/v1/hr/leave-request-getOne/${leaveId}`)
      .then((response) => {
        setLeave(response.data);
      })
      .catch((error) => {
        console.error("Error fetching leave details", error);
      });
  }, [leaveId]);

  console.log("this is leave", leave);
  return (
    <div className="pending-leave-body">
      <hr />

      <IoMdArrowRoundBack
        className="backarrow mt-3"
        style={{ color: "#000f44" }}
        onClick={handleBackLeave}
      />
      <div className="pending-leave-form-body">
        <form onSubmit={handleSubmit} style={{ width: "100%" }}>
          <div className="pending-leave-profile-section">
            <img
              src="https://randomuser.me/api/portraits/men/9.jpg"
              className="profile-pic"
            />
            <div className="pending-profile-info">
              <h2>
                {leave.employeeName}({leave.role})
              </h2>
            </div>

            <div className="leave-type">
              <span style={{ color: "#95a5a6" }}>Leave Type : </span>
              <span className="leave-type-value">{leave.leaveType}</span>
            </div>
          </div>

          <div className="leave-details">
            <div className="date-section">
              <div>
                <div>
                  <label style={{ color: "#95a5a6" }}>From :</label>
                </div>
                <div>
                  <label>{leave.startDate}</label>
                </div>
              </div>
              <div>
                <div>
                  <label style={{ color: "#95a5a6" }}>To :</label>
                </div>
                <div>
                  <label> {leave.endDate}</label>
                </div>
              </div>
            </div>

            <div className="reason-section">
              <label>Reason : </label>
              <textarea value={leave.reason} readOnly />
            </div>
          </div>
        </form>
      </div>
      <div className="leave-reply-container">
        <div className="leave-reject-reply-buttons">
          <div className="leave-hr-rejected">Rejected</div>
        </div>

        <div className="leave-reply-comment" style={{ color: "#2c3e50" }}>
          {leave.comment}
        </div>
      </div>
    </div>
  );
};

export default RejectLeave;
