import React, { useState, useEffect } from "react";
import { IoIosMore } from "react-icons/io";
import { ProjectDone } from "../constants/temporary";
import {
  FaCalendarWeek,
  FaProjectDiagram,
  FaRegStickyNote,
} from "react-icons/fa";

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

  useEffect(() => {
    fetchProjectTask();
  }, []);

  const [reviews, setReviews] = useState("");

  const userId = localStorage.getItem("userId");
  const [tasks, setTasks] = useState([]);

  const fetchProjectTask = async () => {
    const url =
      "http://localhost:8080/api/v1/teamlead/findCheckedTasksByTeamLead/" +
      userId;
    try {
      const response = await fetch(url);

      console.log("Response Status:", response.status);

      if (response.ok) {
        const data = await response.json();
        console.log("Fetched Data:", data);

        console.log("data is", data);

        setTasks(data);

        if (!data || typeof data !== "object") {
          console.error("Unexpected response format:", data);
          return;
        }

        console.log("Processed Data:", data);
      } else {
        console.error(
          `Failed to fetch: HTTP ${response.status}, ${response.statusText}`
        );
      }
    } catch (error) {
      console.error("Fetch failed:", error.message);

      if (error.name === "TypeError") {
        console.error(
          "Possible reasons: Network issue, incorrect URL, or CORS restriction."
        );
      }
    }
  };

  const fetchEmployee = async (id) => {
    const url = `http://localhost:8080/api/v1/employees/${id}`;

    try {
      const response = await fetch(url);

      console.log("Response Status:", response.status);

      if (response.ok) {
        const data = await response.json();

        if (!data || typeof data !== "object") {
          console.error("Unexpected response format:", data);
          return null;
        }

        console.log("Processed Data:", data);

        // Return a <p> tag with firstName and lastName
        return `<p>${data.firstName} ${data.lastName}</p>`;
      } else {
        console.error(
          `Failed to fetch: HTTP ${response.status}, ${response.statusText}`
        );
        return null;
      }
    } catch (error) {
      console.error("Fetch failed:", error.message);

      if (error.name === "TypeError") {
        console.error(
          "Possible reasons: Network issue, incorrect URL, or CORS restriction."
        );
      }
      return null;
    }
  };

  const handleClickComplete = (id, title) => {
    if (reviews === "") {
      window.alert("Please add a review before completing the task");
      return;
    }
    const url = `http://localhost:8080/api/v1/teamlead/updateProjectTask/${id}/${reviews}`;
    try {
      const response = fetch(url);

      console.log("Response Status:", response.status);
      handleClosePopup();
      if (response.ok) {
        const data = response.json();
        window.alert(`Completed Task : ${title}`);

        if (!data || typeof data !== "object") {
          console.error("Unexpected response format:", data);
          return;
        }

        console.log("Processed Data:", data);
      } else {
        console.error(
          `Failed to fetch: HTTP ${response.status}, ${response.statusText}`
        );
      }
    } catch (error) {
      console.error("Fetch failed:", error.message);

      if (error.name === "TypeError") {
        console.error(
          "Possible reasons: Network issue, incorrect URL, or CORS restriction."
        );
      }
    }

    window.location.reload();
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
          {tasks.filter((card) => card.taskStatus === "check").length === 0 ? (
            <center>
              <p
                style={{
                  fontSize: "20px",
                  color: "darkblue",
                  border: "solid",
                  padding: "6px 10px",
                  borderRadius: "5px",
                }}
              >
                No Tasks for Review
              </p>
            </center>
          ) : (
            tasks.map((card, index) => (
              <>
                {card.taskStatus === "check" && (
                  <div
                    className="project-card"
                    style={{ opacity: 0.8, fontSize: "2vh" }}
                    key={index}
                    onClick={() => handleCardClick(card)}
                  >
                    <div
                      className="project-card-color-boxs"
                      style={{ color: "White", fontSize: "20px" }}
                    >
                      <FaProjectDiagram style={{ marginRight: "10px" }} />
                      {"  "} {card.projectName}
                    </div>
                    {/* <div className="project-card-content">
                      <p style={{ fontSize: "2vh" }}>
                        {fetchEmployee(card.members)}{" "}
                      </p>
                    </div> */}
                    <div className="project-card-content">
                      <p style={{ fontSize: "2vh" }}>{card.taskTitle} </p>
                    </div>

                    <div className="date-members">
                      <div
                        className="project-card-date"
                        style={{ fontSize: "1.8vh" }}
                      >
                        <FaCalendarWeek className="me-2" />
                        {card.dueDate}
                      </div>
                    </div>
                  </div>
                )}
              </>
            ))
          )}
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
              <h4>{selectedCard?.taskTitle}</h4>
            </div>

            <p>
              <span className="description-label">Description:</span> <br />
              {selectedCard?.taskDescription}
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
              {selectedCard?.dueDate}
            </p>

            <p>
              <span className="description-label">Share Reviews:</span> <br />
              <textarea
                className="share-textarea"
                placeholder="Enter your review..."
                value={reviews}
                onChange={(e) => setReviews(e.target.value)}
              ></textarea>
            </p>

            <button
              className="add-member-button"
              onClick={() =>
                handleClickComplete(selectedCard?.id, selectedCard?.taskTitle)
              }
            >
              SHARE REVIEW
            </button>

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
