import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

const ComplaintsReply = ({
  complaintId,
  status,
  about,
  date,
  setActiveComponent,
}) => {
  const location = useLocation();

  const navigate = useNavigate();

  const getRoleName = () => {
    const pathname = decodeURIComponent(location.pathname);
    const role = pathname.split("/")[2];
    return role;
  };

  const handlereplycomplaint = () => {
    console.log(complaintId);
    if (status === "PENDING") {
      navigate(`/Complaints/HR/ReplyComplaint/${complaintId}`);
    } else if (status === "SOLVED") {
      navigate(`/Complaints/HR/RepliedComplaint/${complaintId}`);
    }
  };

  return (
    <div className="complaintcard-body">
      <div className="complaintcard-content">
        <div className="complaintcard-header">
          <div className="left-flexbox-complaint">
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                gap: "0.3vw",
                width: "100%",
                alignItems: "center",
              }}
            ></div>
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
            <div className={status === "PENDING" ? "pending_c" : "approved_c"}>
              {status}
            </div>
            <div onClick={handlereplycomplaint}>View Details &gt;&gt;&gt;</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ComplaintsReply;
