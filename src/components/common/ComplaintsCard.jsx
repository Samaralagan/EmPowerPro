import React from "react";
import "./ComplaintsCard.css";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

const ComplaintsCard = ({ status, about, date, setActiveComponent }) => {
  const location = useLocation();
  const getRoleName = () => {
    const pathname = decodeURIComponent(location.pathname);
    const role = pathname.split("/")[2];
    return role;
  };
  const role = getRoleName();
  const handlemorecomplaint = () => {
    setActiveComponent("Complaintsmore");
  };
  return (
    <div className="complaintcard-body">
      <div className="complaintcard-content">
        <div className="complaintcard-header">
          <div className="left-flexbox-complaint">
            <h5 className={status === "pending" ? "pending_c" : "approved_c"}>
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
