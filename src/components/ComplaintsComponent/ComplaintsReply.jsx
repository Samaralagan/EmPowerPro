import React from "react";
import { useLocation } from "react-router-dom";

const ComplaintsReply = ({
  name,
  reply_status,
  about,
  date,
  setActiveComponent,
  image,
}) => {
  const location = useLocation();

  const getRoleName = () => {
    const pathname = decodeURIComponent(location.pathname);
    const role = pathname.split("/")[2];
    return role;
  };
  const role = getRoleName();
  const handlereplycomplaint = () => {
    if (reply_status === "Reply") {
      setActiveComponent("ReplyComplaint");
    } else if (reply_status === "Replied") {
      setActiveComponent("RepliedComplaint");
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
            >
              <img src={image} alt="" className="img1" />
              {name}
            </div>
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
            <div
              className={reply_status === "Reply" ? "pending_c" : "approved_c"}
              onClick={handlereplycomplaint}
            >
              {reply_status}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ComplaintsReply;
