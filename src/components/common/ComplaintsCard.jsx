import React from "react";
import "./ComplaintsCard.css";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const ComplaintsCard = ({ complaintId, status, about, date }) => {
  const location = useLocation();

  const navigate = useNavigate();

  const getRoleName = () => {
    const pathname = decodeURIComponent(location.pathname);
    const role = pathname.split("/")[2];
    return role;
  };
  const role = getRoleName();

  // const formatDate = (isoDateString) => {
  //   const date = new Date(isoDateString);
  //   return date.toLocaleString('en-US', {
  //     year: 'numeric',
  //     month: 'long',
  //     day: 'numeric',
  //     hour: '2-digit',
  //     minute: '2-digit',
  //     second: '2-digit',
  //     hour12: true,
  //   });
  // };

  const handlemorecomplaint = () => {
    navigate(`/Complaints/HR/${complaintId}`);
  };
  return (
    <div className="complaintcard-body">
      <div className="complaintcard-content">
        <div className="complaintcard-header">
          <div className="left-flexbox-complaint">
            <h5 className={status === "PENDING" ? "pending_c" : "approved_c"}>
              {status}
            </h5>

            <p className="complaintcard-header-gray">Complaint</p>
            <p
              className="complaintcard-header-about"
              style={{ marginBottom: "0%" }}
            >
              <b>{about}</b>
            </p>
          </div>
        </div>
        <div className="complaintcard-header">
          <div className="right-flexbox-complaint">
            <p className="datetxt" style={{ marginBottom: "2vh" }}>
              {date}
            </p>
            <br />

            <p onClick={handlemorecomplaint} style={{ margin: "0%" }}>
              View Details &gt;&gt;&gt;{" "}
            </p>
          </div>
        </div>

        <div></div>
      </div>
    </div>
  );
};

export default ComplaintsCard;
