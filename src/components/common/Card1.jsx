import React, { useState } from "react";
import "./card1.css";
import { FaClock } from "react-icons/fa";
import { GiCash } from "react-icons/gi";
import { FaHourglassEnd } from "react-icons/fa6";
import { HiDotsVertical } from "react-icons/hi";
import EventVacancyPopup from "./EventVacancyPopup";
import { useLocation, useNavigate } from "react-router-dom";

function Card1(props, { setActiveComponent }) {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const navigate = useNavigate();
  //open and clocse popup
  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  const [openToggle, setOpentoggle] = useState(false);
  const handleopentoggle = () => {
    setOpentoggle(!openToggle);
  };
  const EditVacancy = () => {
    navigate("/Jobs/HR/card1");
  };

  return (
    <div className="card1body">
      {/* {props.test1} */}
      <div style={{ display: "flex" }}>
        <div className="darkbox">{props.title}</div>
        <div className="card1-toggle" style={{ marginLeft: "11vw" }}>
          <HiDotsVertical onClick={handleopentoggle} />
          <div
            className={openToggle ? "card1-opentoggle" : "card1-opentoggle1"}
            onMouseLeave={handleopentoggle}
          >
            <div onClick={EditVacancy}>Edit</div>
            <div>Delete</div>
          </div>
        </div>
      </div>
      <div className="p1" style={{ marginBottom: "0.3rem" }}>
        {props.variety}
      </div>
      <div style={{ display: "flex", flexDirection: "row" }}>
        <div style={{ display: "flex", flexDirection: "column", width: "50%" }}>
          <div className="divcard1" style={{ marginBottom: "0.5rem" }}>
            <FaClock className="card1icon" />{" "}
            <div className="p2">{props.type}</div>
          </div>
          <div className="divcard1">
            <FaHourglassEnd className="card1icon" />{" "}
            <div className="p2">{props.deadLine}</div>
          </div>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            marginLeft: "4rem",
          }}
        >
          <div className="divcard2" onClick={openModal}>
            Read More
          </div>
          <EventVacancyPopup
            modalIsOpen={modalIsOpen}
            closeModal={closeModal}
          />
          <div className="p2" style={{ fontSize: "10px" }}>
            {props.countappilication}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card1;
