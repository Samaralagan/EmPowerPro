import React from "react";

function RepliedComplaintCard({
  name,
  about,
  date,
  description,
  image,
  replied,
}) {
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
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                margin: "1vw 0 1vw 2vw",
              }}
            >
              <img src={image} alt="" className="img2" />
              <p>{name}</p>
            </div>

            <br />
            <p
              className="complaintmorecard-header-gray"
              style={{ marginLeft: "2vw" }}
            >
              description :{" "}
            </p>
            <p className="complaintmorecard-header-text">{description}</p>
            {/* <br /> */}
            <p
              className="complaintmorecard-header-gray"
              style={{ marginLeft: "2vw" }}
            >
              Reply :{" "}
            </p>
            <p className="complaintmorecard-header-text">{replied}</p>
          </div>

          <div></div>
        </div>
      </div>
    </div>
  );
}

export default RepliedComplaintCard;
