import React, { useState, useEffect } from "react";
import { IoIosMore } from "react-icons/io";
import { ProjectDone } from "../constants/temporary";
import { FaCalendarWeek, FaRegStickyNote } from "react-icons/fa";

function TeamLead_TaskReviews() {
  const [showPopup, setShowPopup] = useState(false);
  const [selectedCard, setSelectedCard] = useState(null);
  const [showNestedPopup, setShowNestedPopup] = useState(false);

  const handleCardClick = (card) => {
    setSelectedCard(card);
    setShowPopup(true);
  };

  const handleClosePopup = () => {
    setShowPopup(false);
    setSelectedCard(null);
  };

  const handleViewAllClick = (selectedCard) => {
    setSelectedCard(selectedCard);
    setShowNestedPopup(true);
  };

  const handleCloseNestedPopup = () => {
    setShowNestedPopup(false);
  };

  return (
    <div className="contentbodyall1">
      <div>
        <div className="project-box-top">
          <p className="project-box-title" style={{ marginTop: "2%" }}>
            Completed Tasks
          </p>
        </div>
        <div>
          {ProjectDone.map((card, index) => (
            <div
              className="project-card"
              style={{ opacity: 0.8, fontSize: "2vh" }}
              key={index}
              onClick={() => handleCardClick(card)}
            >
              <div className="project-card-color-boxs">
                {card.green && (
                  <div
                    className="project-card-color-box"
                    style={{ backgroundColor: "#16BD59" }}
                  ></div>
                )}
                {card.orange && (
                  <div
                    className="project-card-color-box"
                    style={{ backgroundColor: "#EE6401" }}
                  ></div>
                )}
                {card.blue && (
                  <div
                    className="project-card-color-box"
                    style={{ backgroundColor: "#2DA3B3" }}
                  ></div>
                )}
              </div>
              <div className="project-card-content">
                <p style={{ fontSize: "2vh" }}>{card.title} </p>
              </div>

              <div className="date-members">
                <div
                  className="project-card-date"
                  style={{ fontSize: "1.8vh" }}
                >
                  <FaCalendarWeek className="me-2" />
                  {card.date}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {showPopup && (
        <div className="popup-overlay" onClick={handleClosePopup}>
          <div className="popup-content" onClick={(e) => e.stopPropagation()}>
            <button className="popup-close-btn" onClick={handleClosePopup}>
              X
            </button>

            <div className="popup-top">
              <FaRegStickyNote className="sticky" />
              <h4>{selectedCard?.title}</h4>
            </div>

            <p>
              <span className="description-label">Description:</span> <br />
              {selectedCard?.description}
            </p>
            {/* 
            <p>
              <span className="description-label">Subtasks:</span> <br />

              <button className="subtasks-button" onClick={() => handleViewAllClick(selectedCard)}>View All</button>

            </p> */}

            {/* <p>

              <span className="description-label">Labels:</span> <br />
              <div className="project-card-color-boxs">
                {selectedCard.green && (
                  <div
                    className="project-card-color-box-popup"
                    style={{ backgroundColor: "#16BD59" }}
                  >
                    <p className="popup-bar-label">Planning</p>

                  </div>
                )}
                {selectedCard.orange && (
                  <div
                    className="project-card-color-box-popup"
                    style={{ backgroundColor: "#EE6401" }}
                  >
                    <p className="popup-bar-label">Design</p>
                  </div>
                )}
                {selectedCard.blue && (
                  <div
                    className="project-card-color-box-popup"
                    style={{ backgroundColor: "#2DA3B3" }}

                  >
                    <p className="popup-bar-label">Implementation</p>
                  </div>
                )}
              </div>
            </p> */}

            <p>
              <span className="description-label">Date:</span> <br />
              {selectedCard?.date}
            </p>

            <p>
              <span className="description-label">Share Reviews:</span> <br />
              <textarea
                className="share-textarea"
                placeholder="Enter your review..."
              ></textarea>
            </p>

            <button className="add-member-button">SHARE REVIEW</button>

            {/* Nested Popup for 'View All' */}
            {showNestedPopup && (
              <div
                className="nested-popup-overlay"
                onClick={handleCloseNestedPopup}
              >
                <div
                  className="nested-popup-content"
                  onClick={(e) => e.stopPropagation()}
                >
                  <button
                    className="popup-close-btn"
                    onClick={handleCloseNestedPopup}
                  >
                    X
                  </button>
                  <h4>Sub Tasks</h4>
                  <div className="project-card-circle-popup">
                    <p>
                      {selectedCard?.finish}/{selectedCard?.total}
                    </p>
                    <div>In Progress.........</div>
                  </div>
                  {/* Display Subtasks with Checkboxes */}
                  <div className="subtasks-container">
                    {selectedCard?.subtasks?.map((subtask, index) => (
                      <div className="subtask-item" key={index}>
                        <input
                          type="checkbox"
                          id={`subtask-${index}`}
                          className="subtask-checkbox"
                          // onClick={() => handleCheckboxClick(index)}
                        />
                        <label
                          htmlFor={`subtask-${index}`}
                          className="subtask-label"
                        >
                          {subtask}
                        </label>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

export default TeamLead_TaskReviews;
