import React from "react";
import "./inquries_card.css";
import { Link } from "react-router-dom";

const Inquries_card = ({
  status,
  number1,
  email,
  subject,
  date,
  setActiveComponent,
}) => {
  const handleReplyinquries = () => {
    setActiveComponent("ReplyInquries");
  };

  return (
    <div className="inquriescard-body">
      <div className="inquriescard-content">
        <div className="d-flex " style={{ alignItems: "center" }}>
          <div className="p-2">
            <div className="circle">{number1}</div>
          </div>
          <div className="email-inquiry">{email}</div>
          <div className="email-inquiry-date">{date}</div>
        </div>

        <div className="d-flex " style={{ alignItems: "center" }}>
          <div className="p-1" style={{ padding: "0" }}>
            <p className="inquriescard-header-gray">Inquiry</p>
          </div>
          <div className="ms-auto p-1">
            <h5 className={status === "Pending" ? "pending_c" : "approved_c"}>
              {status}
            </h5>
          </div>
        </div>

        <div className="d-flex ">
          <div className="p-1">
            <p
              className="inquriescard-header-about"
              style={{ marginBottom: "0px" }}
            >
              {subject}
            </p>
          </div>
          <div className="ms-auto p-1">
            <p onClick={handleReplyinquries} className="view-inquiry"> View Details &gt;&gt;&gt; </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Inquries_card;
