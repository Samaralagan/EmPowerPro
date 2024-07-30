import React from "react";
import "./replycomplaintcard.css";
import { IoMdArrowRoundBack } from "react-icons/io";
import { Link } from "react-router-dom";

const ReplyComplaintCard = ({
  name,
  about,
  date,
  description,
  image,
  // setActiveComponent,
}) => {
  // const handlemorecomplaint = () => {
  //   if (setActiveComponent) {
  //     setActiveComponent("Complaints");
  //   }
  // };
  return (
    // <div>
    //   <div className="reply-complaintcard-header">
    //     <div className="reply-left-flexbox-complaint">
    //       <div
    //         style={{
    //           display: "flex",
    //           flexDirection: "row",
    //           alignItems: "center",
    //         }}
    //       >
    //         <img src={image} alt="" className="img2" />
    //         {name}
    //       </div>

    //       <br />

    //       <p className="reply-complaintcard-header-about">
    //         <b>{about}</b>
    //       </p>
    //       <p>{description}</p>
    //     </div>
    //   </div>
    //   <div className="reply-complaintcard-header">
    //     <div className="reply-right-flexbox-complaint">
    //       <h5>{date}</h5>
    //       <br />
    //       <br />
    //     </div>
    //   </div>

    //   <div></div>
    // </div>

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
            <p className="complaintmorecard-header-text">
              <textarea name="" id="" className="inputtext"></textarea>
            </p>
          </div>
          <div></div>
        </div>
      </div>
    </div>
  );
};

export default ReplyComplaintCard;
