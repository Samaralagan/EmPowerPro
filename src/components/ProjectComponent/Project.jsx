import React, { useState } from "react";
import "./Project.css";
import Header from "../layout/Header";
import { IoIosMore } from "react-icons/io";
import { FaCalendarWeek } from "react-icons/fa";
import {
  ProjectDone,
  ProjectInProgress,
  ProjectToDo,
} from "../constants/temporary";
import { useLocation } from "react-router-dom";
import { FaPlusSquare } from "react-icons/fa";
import { FaRegStickyNote } from "react-icons/fa";

const Project = () => {
  const location = useLocation();

  const [showPopup, setShowPopup] = useState(false);
  const [selectedCard, setSelectedCard] = useState(null);
  const [showNestedPopup, setShowNestedPopup] = useState(false);

  const [checkedSubtasks, setCheckedSubtasks] = useState({});


  const getRoleName = () => {
    const pathname = decodeURIComponent(location.pathname); // Decode the URL
    const role = pathname.split("/")[2];
    return role;
  };
  const role = getRoleName();

  // Function to handle card click
  const handleCardClick = (card) => {
    setSelectedCard(card); // Set selected card data
    setShowPopup(true); // Show the popup
  };

  // Function to close the popup
  const handleClosePopup = () => {
    setShowPopup(false);
    setSelectedCard(null);
  };

  const handleViewAllClick = (selectedCard) => {
    setSelectedCard(selectedCard);
    setShowNestedPopup(true); // Show the nested popup
  };

  // Function to close the nested popup
  const handleCloseNestedPopup = () => {
    setShowNestedPopup(false);
  };

    // // Handle checkbox click for subtasks
    // const handleCheckboxClick = (index) => {
    //   if (selectedCard) {
    //     const updatedCard = { ...selectedCard };
    //     updatedCard.finish = Math.min(updatedCard.finish + 1, updatedCard.total);
    //     setSelectedCard(updatedCard);
    //   }
    // };
  

  return (
    <div className="">
      {/* <Header /> */}
      <div className="contentbodyall1">
        <div className="project-boxs">
          <div className="project-box">
            <div className="project-box-top">
              <p className="project-box-title"> To Do</p>
              <IoIosMore className="project-box-top-icon" />
            </div>
            {role === "TeamLeader" && (
              <div className="project-addtask">
                <FaPlusSquare className="me-2" /> Add Task
              </div>
            )}
            <div>
              {ProjectToDo.map((card, index) => (
                <div className="project-card"
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
                    <p>{card.title} </p>
                    <input type="checkbox" />
                  </div>
                  <div className="date-members">
                    <div className="project-card-date">
                      <FaCalendarWeek className="me-2" />
                      {card.date}
                    </div>

                    <div className="project-card-members">
                      <img src={card.image1} alt="" className="project-card-member" />
                      <img src={card.image2} alt="" className="project-card-member" />
                      <img src={card.image3} alt="" className="project-card-member" />
                    </div>

                  </div>

                </div>
              ))}
            </div>
          </div>

          <div div className="project-box">
            <div className="project-box-top">
              <p className="project-box-title"> In Progress</p>
              <IoIosMore className="project-box-top-icon" />
            </div>
            {role === "TeamLeader" && (
              <div className="project-addtask">
                <FaPlusSquare className="me-2" /> Add Task
              </div>
            )}
            <div>
              {ProjectInProgress.map((card, index) => (
                <div className="project-card"
                  key={index}
                  onClick={() => handleCardClick(card)} >

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
                    <div>
                      <div className="d-flex ">
                        <input type="checkbox" className="mt-2 me-2" />
                        <p>{card.title} </p>
                        {/* <p>{card.description} </p> */}

                      </div>
                      <div className="project-card-members">
                        <img src={card.image1} alt="" className="project-card-member-progress" />
                        <img src={card.image2} alt="" className="project-card-member-progress" />
                        <img src={card.image3} alt="" className="project-card-member-progress" />
                      </div>

                      <div className="project-card-date">
                        <FaCalendarWeek className="me-2" />
                        {card.date}
                      </div>
                    </div>
                    <div className="project-card-circle">
                      <p>
                        {card.finish}/{card.total}
                      </p>
                      <div>In Progress.........</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div div className="project-box">
            <div className="project-box-top">
              <p className="project-box-title"> Done</p>
              <IoIosMore className="project-box-top-icon" />
            </div>
            <div>
              {ProjectDone.map((card, index) => (
                <div
                  className="project-card"
                  style={{ opacity: 0.8 }}
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
                    <p>{card.title} </p>
                  </div>

                  <div className="date-members">
                    <div className="project-card-date">
                      <FaCalendarWeek className="me-2" />
                      {card.date}
                    </div>

                    <div className="project-card-members">
                      <img src={card.image1} alt="" className="project-card-member" />
                      <img src={card.image2} alt="" className="project-card-member" />
                      <img src={card.image3} alt="" className="project-card-member" />
                    </div>

                  </div>

                </div>
              ))}
            </div>
          </div>
        </div>
      </div>



      {/* Popup Component */}
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

            <p>
              <span className="description-label">Subtasks:</span> <br />

              <button className="subtasks-button" onClick={() => handleViewAllClick(selectedCard)}>View All</button>

            </p>



            <p>
              <span className="description-label">Members:</span> <br />
              <div className="project-card-members">
                <img src={selectedCard?.image1} alt="Member" className="project-card-member-popup" />
                <img src={selectedCard?.image2} alt="Member" className="project-card-member-popup" />
                <img src={selectedCard?.image3} alt="Member" className="project-card-member-popup" />
              </div>

            </p>

            <p>

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
            </p>
            <p>
              <span className="description-label">Date:</span> <br />
              {selectedCard?.date}
            </p>

            {/* Nested Popup for 'View All' */}
            {showNestedPopup && (
              <div className="nested-popup-overlay" onClick={handleCloseNestedPopup}>
                <div className="nested-popup-content" onClick={(e) => e.stopPropagation()} style={{ backgroundColor: 'blue', color: 'white' }}>
                  <button className="popup-close-btn" onClick={handleCloseNestedPopup}>
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
                        <label htmlFor={`subtask-${index}`} className="subtask-label">
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
};

export default Project;
