import React, { useState } from "react";
import "./card1.css";
import { FaClock } from "react-icons/fa";
import { GiCash } from "react-icons/gi";
import { FaHourglassEnd } from "react-icons/fa6";
import { HiDotsVertical } from "react-icons/hi";
import EventVacancyPopup from "./EventVacancyPopup";
import { useLocation, useNavigate, Link } from "react-router-dom";
import axios from "axios";

function Card1(props, { setActiveComponent }) {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const navigate = useNavigate();
  //open and clocse popup
  const openModal = (id) => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  const [openToggle, setOpentoggle] = useState(false);
  const handleopentoggle = () => {
    setOpentoggle(!openToggle);
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(
        `http://localhost:8080/api/v1/hr/vacancy-delete/${id}`
      );
      props.onDelete(id);
    } catch (error) {
      console.log(error);
    }
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
            <div>
              <Link
                style={{ textDecoration: "none", color: "inherit" }}
                to={`/Jobs/HR/edit/${props.id}`}
              >
                Edit
              </Link>
            </div>

            <div
              style={{ background: "red" }}
              onClick={() => handleDelete(props.id)}
            >
              Delete
            </div>
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
            id={props.id}
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
