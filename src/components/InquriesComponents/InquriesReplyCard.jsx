import React from "react";
import "./inquriesreplycard.css";
import { IoMdArrowRoundBack } from "react-icons/io";
import { MdSend } from "react-icons/md";

const InquriesReplyCard = ({
  number,
  subject,
  email,
  description,
  setActiveComponent,
}) => {
  // Accept setActiveComponent as a prop
  const handlereplyinquries = () => {
    setActiveComponent("Inquries"); // Switch back to Inquries component
  };

  return (
    <div>
      <IoMdArrowRoundBack className="backarrow" onClick={handlereplyinquries} />
      <div className="inquriesreplycard-body">
        <div className="inquriesreplycard-content">
          <div className="detailbox">
            <div className="d-flex " style={{ alignItems: "center" }}>
              <div className="p-2">
                <div className="circle">{number}</div>
              </div>
              <div className="p-2">
                <b>{email}</b>
              </div>
            </div>
            <div className="p-2" style={{ color: "#6D6F75" }}>
              {description}
            </div>
          </div>
          <br />

          <div>
            <label style={{ fontWeight: "bolder" }}>Reply :</label>
            <br />
            <br />
            <textarea
              name=""
              id=""
              className="inputtext"
              placeholder="@reply goes here"
            ></textarea>
          </div>
          <div className="contactus-form-button" style={{ width: "100%" }}>
            <button className="gradient-blue-btn " style={{ color: "white" }}>
              <MdSend
                className="me-2"
                style={{ width: "20px", height: "20px" }}
              />
              Send
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InquriesReplyCard;
