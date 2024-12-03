import React from "react";

function RepliedComplaintCard({
  id,
  about,
  date,
  description,
  reply,
  filePath,
}) {
  console.log(filePath);
  const handleShowAttachment = () => {
    // Open the file using the backend endpoint
    const downloadUrl = `http://localhost:8080/api/v1/hr/complaint-file?filePath=${encodeURIComponent(
      filePath
    )}`;
    window.open(downloadUrl, "_blank");
  };

  return (
    <div>
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

            <p
              className="complaintmorecard-header-gray"
              style={{ marginLeft: "2vw" }}
            >
              Reply :{" "}
            </p>
            <p className="complaintmorecard-header-text">{reply}</p>
            {filePath && (
              <button
                className="complaintmorecard-header-button"
                onClick={handleShowAttachment}
              >
                Show Attachment
              </button>
            )}
          </div>

          <div></div>
        </div>
      </div>
    </div>
  );
}

export default RepliedComplaintCard;
