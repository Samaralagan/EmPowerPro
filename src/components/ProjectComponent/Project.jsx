import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./Project.css";
import Header from "../layout/Header";
import { IoIosMore } from "react-icons/io";
import { FaCalendarWeek } from "react-icons/fa";
import { HiOutlineDocumentText } from "react-icons/hi";
import {
  ProjectDone,
  ProjectInProgress,
  ProjectToDo,
  SelectProjects,
} from "../constants/temporary";
import {
  FaPlusSquare,
  FaUsers,
  FaRegStickyNote,
  FaClock,
} from "react-icons/fa";
import { AiOutlineClose } from "react-icons/ai";

import "./EX_Project.css";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { FaPlusCircle, FaHeart, FaStar, FaRocket } from "react-icons/fa";

import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";

import profile1 from "../../assets/images/profile1.png";
import profile2 from "../../assets/images/profile2.png";
import profile3 from "../../assets/images/profile3.png";
import profile4 from "../../assets/images/profile4.png";
import profile5 from "../../assets/images/profile5.png";

import { Switch, makeStyles } from "@material-ui/core";
import { createProject, getAllProject } from "../../service/projectService";

const useStyles = makeStyles({
  switchBase: {
    color: "#B9B5B5", // Default color
    "&$checked": {
      color: "#000F44", // Color when checked
    },
    "&$checked + $track": {
      backgroundColor: "#000F44", // Track color when checked
    },
  },
  checked: {},
  track: {},
});

const Project = () => {
  const location = useLocation();

  const navigate = useNavigate();

  const handlePage = (PageName) => {
    navigate(`/${PageName}`);
  };

  const handleReviews = (PageName) => {
    navigate(`/${PageName}`);
  };

  const handleAssign = (PageName) => {
    navigate(`/${PageName}`);
  };

  const [showPopup, setShowPopup] = useState(false);
  const [selectedCard, setSelectedCard] = useState(null);
  const [showNestedPopup, setShowNestedPopup] = useState(false);

  const [checkedSubtasks, setCheckedSubtasks] = useState({});

  const [showSubTaskFields, setShowSubTaskFields] = useState(false);
  const [showMembersPopup, setShowMembersPopup] = useState(false);
  const [showDatesPopup, setShowDatesPopup] = useState(false);

  const handleSubTaskClick = () => {
    setShowSubTaskFields(!showSubTaskFields);
  };

  const handleCancel = () => {
    setShowSubTaskFields(false);
  };

  const handleSave = () => {
    console.log("Save clicked");
  };

  const toggleMembersPopup = () => {
    setShowMembersPopup(!showMembersPopup);
  };

  const toggleDatesPopup = () => {
    setShowDatesPopup(!showDatesPopup);
  };

  const getRoleName = () => {
    const pathname = decodeURIComponent(location.pathname);
    const role = pathname.split("/")[2];
    return role;
  };
  const role = getRoleName();

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

  const members = [
    {
      member_name: "Olivia Rajan",
      member_profile: profile1,
    },
    {
      member_name: "Can Samuel",
      member_profile: profile3,
    },
    {
      member_name: "Sara Lovelace",
      member_profile: profile5,
    },
  ];

  const [projectName, setProjectName] = useState("");
  const [projectDescription, setProjectDescription] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [clientName, setClientName] = useState("");
  const [languageStack, setLanguageStack] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // Get today's date without time
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    // Convert startDate and endDate to Date objects
    const start = new Date(startDate);
    const end = new Date(endDate);

    if (
      !projectName ||
      !projectDescription ||
      !startDate ||
      !endDate ||
      !clientName ||
      !languageStack
    ) {
      window.alert("All fields are required. Please fill out all the fields.");
      return;
    }
    // Validate the dates
    if (start < today) {
      window.alert("Start date must be today or a future date.");
      return;
    }

    if (end < start) {
      window.alert("End date must be on or after the start date.");
      return;
    }

    const newProject = {
      userId: 101,
      projectName: projectName,
      projectDescription: projectDescription,
      startDate: startDate,
      endDate: endDate,
      clientName: clientName,
      type: isToggled ? "Agile Project" : "Normal Project",
      stack: languageStack,
      teamlead: 201,
      projectTeamMembers: [202, 203, 204, 205],
    };

    console.log(newProject);

    createProject(newProject)
      .then((response) => {
        window.alert("Project Successfully created");
        setProjectName("");
        setProjectDescription("");
        setStartDate();
        setEndDate();
        setClientName();
        setIsToggled(false);
        setLanguageStack("");
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const handleCreateProject = () => {
    navigate("/Project/Executive/create-project");
  };

  const handleCreateAgileProject = () => {
    navigate("/Project/Executive/create-agile-project");
  };
  const [projectData, setProjectData] = useState({});
  const fetchProjects = async () => {
    try {
      const response = await getAllProject();
      setProjectData(response.data); // Assuming response.data contains an array of projects
    } catch (err) {
      console.error(err);
      // setError("Failed to fetch project data. Please try again.");
    }
  };
  fetchProjects();

  // if (error) {
  //   return <div>{error}</div>;
  // }

  const recentProjects = [
    {
      projectName: "Health & Fitness App",
      icon: <FaHeart />,
      color: "#FFCDD2",
      iconColor: "#D32F2F",
      client: "PrimeHealth Medical Center",
      startDate: "Mar 28",
      endDate: "Apr 13",

      teamMembers: [
        { name: "Member 1", avatarUrl: profile1 },
        { name: "Member 2", avatarUrl: profile2 },
        { name: "Member 3", avatarUrl: profile3 },
      ],
    },
    {
      projectName: "Online Shopping App",
      icon: <FaStar />,
      color: "#FFF9C4",
      iconColor: "#FBC02D",
      client: "Commercial Bank",
      startDate: "Mar 28",
      endDate: "Apr 13",
      teamMembers: [
        { name: "Member 4", avatarUrl: profile4 },
        { name: "Member 5", avatarUrl: profile5 },
        { name: "Member 6", avatarUrl: profile1 },
      ],
    },
    {
      projectName: "Ride Sharing App",
      icon: <FaRocket />,
      color: "#BBDEFB",
      iconColor: "#1976D2",
      client: "JourneyHub Travellers",
      startDate: "Mar 28",
      endDate: "Apr 13",
      teamMembers: [
        { name: "Member 7", avatarUrl: profile3 },
        { name: "Member 8", avatarUrl: profile5 },
        { name: "Member 9", avatarUrl: profile2 },
      ],
    },
  ];

  const [isToggled, setIsToggled] = useState(false);
  const classes = useStyles();

  useEffect(() => {
    const savedToggleState = localStorage.getItem("isToggled");
    if (savedToggleState !== null) {
      setIsToggled(JSON.parse(savedToggleState));
    }
  }, []);

  // useEffect(() => {
  //   localStorage.setItem('agileProjectToggle', JSON.stringify(isToggled));
  // }, [isToggled]);

  const handleSwitchChange = (event) => {
    const isChecked = event.target.checked;
    setIsToggled(isChecked);
    localStorage.setItem("isToggled", JSON.stringify(isChecked));
  };

  const handleNavigate = () => {
    navigate("/Project/Executive/create-agile-project");
  };

  console.log("isToggled:", isToggled);
  console.log("role:", role);

  return (
    <div>
      {role === "Executive" && (
        <div className="Ex_project_page">
          <div className="light-blue-box">
            <h2 className="blue-box-title">CREATE A NEW PROJECT</h2>
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <input
                  type="text"
                  id="projectName"
                  name="projectName"
                  placeholder="Enter project name"
                  value={projectName}
                  onChange={(e) => setProjectName(e.target.value)}
                />
              </div>

              <div className="form-group">
                <textarea
                  id="projectDescription"
                  name="projectDescription"
                  placeholder="Enter project description"
                  value={projectDescription}
                  onChange={(e) => setProjectDescription(e.target.value)}
                ></textarea>
              </div>

              <div className="row mt-1">
                <div className="col-3">
                  <DatePicker
                    selected={startDate}
                    onChange={(date) => setStartDate(date)}
                    placeholderText="Start Date"
                    className="date-boxes"
                    style={{ width: "100%" }}
                  />
                </div>
                <div className="col-3">
                  <DatePicker
                    selected={endDate}
                    onChange={(date) => setEndDate(date)}
                    placeholderText="End Date"
                    className="date-boxes"
                    style={{ width: "100%" }}
                  />
                </div>

                <div className="col-4">
                  <input
                    type="text"
                    className="date-boxes"
                    id="clientName"
                    name="clientName"
                    placeholder="Client name"
                    value={clientName}
                    onChange={(e) => setClientName(e.target.value)}
                  />
                </div>
              </div>
              <br />

              <div className="row mt-1">
                <div className="col-4">
                  <input
                    type="text"
                    className="date-boxes"
                    id="languageStack"
                    name="languageStack"
                    placeholder="Language Stacks"
                    value={languageStack}
                    onChange={(e) => setLanguageStack(e.target.value)}
                  />
                </div>

                <div className="one-project-label" onClick={toggleMembersPopup}>
                  <FaUsers className="me-3" />
                  Members
                </div>

                {showMembersPopup && (
                  <div className="members-popup-overlay">
                    <div className="members-popup">
                      <AiOutlineClose
                        className="member-popup-close-icon"
                        onClick={toggleMembersPopup}
                      />
                      <center className="members-popup-topic">Members</center>
                      <input
                        type="text"
                        placeholder="Search Members"
                        className="members-search-bar"
                      />

                      <div className="member-team-leader">
                        Select as Team Leader
                      </div>
                      {members.map((member, index) => (
                        <div key={index} className="member-label">
                          <input
                            type="radio"
                            name="selectedMember"
                            value={member.member_name}
                            className="member-radio-button"
                          />
                          <img
                            src={member.member_profile}
                            className="member-profile-pic"
                          />
                          <p className="member-name">{member.member_name}</p>
                        </div>
                      ))}

                      <button className="add-member-button">ADD</button>
                    </div>
                  </div>
                )}
              </div>

              <div className="blue-project-btn-row">
                <div className="blue-project-btn">
                  <div className="blue-project-btn-add-icon">
                    <FaPlusCircle className="blue-project-btn-add-icon-team" />
                  </div>
                  <div>
                    <button type="submit" className="blue-project-btn-text">
                      Create Project
                    </button>
                  </div>
                </div>

                <div className="toggle-project">
                  <span className="toggle-title" style={{ color: "#000F44" }}>
                    Create an Agile Project
                  </span>
                  <Switch
                    checked={isToggled}
                    onChange={handleSwitchChange}
                    classes={{
                      switchBase: classes.switchBase,
                      checked: classes.checked,
                      track: classes.track,
                    }}
                  />
                </div>

                {/* <div className="blue-project-btn">
                  <div>
                    <button
                      className="blue-project-btn-text"
                      onClick={handleNavigate}
                    >
                      Create Agile Project
                    </button>
                  </div>
                </div> */}
              </div>
            </form>
          </div>

          <div className="remain-box">
            <h2 className="full-box-title">Recent Projects</h2>

            <div className="project-row">
              {!projectData.length ? (
                <p>Loading</p>
              ) : (
                projectData.map((project, index) => (
                  <div key={index} className="project-box">
                    <div className="project-name-row">
                      <div
                        className="heart-icon-container"
                        style={{ backgroundColor: project.color }}
                      >
                        <span
                          className="heart-icon"
                          style={{ color: project.iconColor }}
                        ></span>
                      </div>
                      <h4
                        className="project-name"
                        style={{ color: project.iconColor }}
                      >
                        {project.projectName}
                      </h4>
                    </div>

                    <br />

                    <div className="project-detail-row">
                      <p className="project-subdetail">Client : </p>
                      <span className="project-maindetail">
                        {" "}
                        {project.clientName}
                      </span>
                    </div>

                    <div className="project-detail-row">
                      <p className="project-subdetail">Start Date : </p>
                      <span className="project-maindetail">
                        {" "}
                        {project.startDate}
                      </span>
                    </div>

                    <div className="project-detail-row">
                      <p className="project-subdetail">End Date : </p>
                      <span className="project-maindetail">
                        {" "}
                        {project.endDate}
                      </span>
                    </div>

                    <div className="project-detail-row">
                      <p className="project-subdetail">Team Leader : Name</p>
                    </div>

                    <div className="project-detail-team-members">
                      {/* {project.teamMembers.map((member, memberIndex) => (
                      <img
                        key={memberIndex}
                        src={member.avatarUrl}
                        alt={member.name}
                      />
                    ))} */}
                    </div>
                  </div>
                ))
              )}
            </div>
          </div>
        </div>
      )}

      <div className="contentbodyall1">
        <div className="task-agile-row">
          {role === "TeamLeader" && (
            <div className="task-review-add-line">
              <div className="task-review-container">
                <button
                  className="task-review-button"
                  onClick={() => handleReviews(`Project/${role}/TaskReviews`)}
                >
                  Task Reviews
                </button>
                <span className="notification-badge">5</span>
              </div>

              <div className="task-review-container">
                <button
                  className="task-review-button"
                  onClick={() => handleAssign(`Project/${role}/TaskAssign`)}
                >
                  Assign Tasks
                </button>
              </div>
            </div>
          )}
        </div>

        {isToggled && role !== "Executive" ? (
          <div>
            <div className="project-choose">
              <p className="project-box-title">Select tasks to do</p>

              <div className="project-columns">
                {SelectProjects.map((card, index) => (
                  <div className="select-project-card" key={index}>
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
                    <div className="project-card-date">
                      <FaCalendarWeek className="me-2" />
                      {card.date}
                    </div>
                  </div>
                ))}
              </div>
              <div className="project-form-button-row">
                <button className="project-back-button">Cancel</button>
                <button className="project-next-button">Add</button>
              </div>
            </div>

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
                    <div
                      className="project-card"
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

                        {/* <div className="project-card-members">
                          <img src={card.image1} alt="" className="project-card-member" />
                          <img src={card.image2} alt="" className="project-card-member" />
                          <img src={card.image3} alt="" className="project-card-member" />
                        </div> */}
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
                    <div
                      className="project-card"
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
                        <div>
                          <div className="d-flex ">
                            <input type="checkbox" className="mt-2 me-2" />
                            <p>{card.title} </p>
                            {/* <p>{card.description} </p> */}
                          </div>
                          {/* <div className="project-card-members">
                            <img src={card.image1} alt="" className="project-card-member-progress" />
                            <img src={card.image2} alt="" className="project-card-member-progress" />
                            <img src={card.image3} alt="" className="project-card-member-progress" />
                          </div> */}

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

                        {/* <div className="project-card-members">
                          <img src={card.image1} alt="" className="project-card-member" />
                          <img src={card.image2} alt="" className="project-card-member" />
                          <img src={card.image3} alt="" className="project-card-member" />
                        </div> */}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Popup Component */}
            {showPopup && (
              <div className="popup-overlay" onClick={handleClosePopup}>
                <div
                  className="popup-content"
                  onClick={(e) => e.stopPropagation()}
                >
                  <button
                    className="popup-close-btn"
                    onClick={handleClosePopup}
                  >
                    X
                  </button>

                  <div className="popup-top">
                    <FaRegStickyNote className="sticky" />
                    <h4>{selectedCard?.title}</h4>
                  </div>

                  <p>
                    <span className="description-label">Description:</span>{" "}
                    <br />
                    {selectedCard?.description}
                  </p>

                  <p>
                    <span className="description-label">Subtasks:</span> <br />
                    <button
                      className="subtasks-button"
                      onClick={() => handleViewAllClick(selectedCard)}
                    >
                      View All
                    </button>
                  </p>

                  {/* <p>
              <span className="description-label">Members:</span> <br />
              <div className="project-card-members">
                <img src={selectedCard?.image1} alt="Member" className="project-card-member-popup" />
                <img src={selectedCard?.image2} alt="Member" className="project-card-member-popup" />
                <img src={selectedCard?.image3} alt="Member" className="project-card-member-popup" />
              </div>

            </p> */}

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

                  {selectedCard?.status !== "ToDo" && (
                    <p>
                      <span className="description-label">Review:</span> <br />
                      {selectedCard?.review}
                    </p>
                  )}

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
        ) : (
          <div className="project-boxs">
            <div className="project-box">
              <div className="project-box-top">
                <p className="project-box-title"> To Do</p>
                <IoIosMore className="project-box-top-icon" />
              </div>
              <div>
                {ProjectToDo.map((card, index) => (
                  <div
                    className="project-card"
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
                        <img
                          src={card.image1}
                          alt=""
                          className="project-card-member"
                        />
                        <img
                          src={card.image2}
                          alt=""
                          className="project-card-member"
                        />
                        <img
                          src={card.image3}
                          alt=""
                          className="project-card-member"
                        />
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

              <div>
                {ProjectInProgress.map((card, index) => (
                  <div
                    className="project-card"
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
                      <div>
                        <div className="d-flex ">
                          <input type="checkbox" className="mt-2 me-2" />
                          <p>{card.title} </p>
                          {/* <p>{card.description} </p> */}
                        </div>
                        <div className="project-card-members">
                          <img
                            src={card.image1}
                            alt=""
                            className="project-card-member-progress"
                          />
                          <img
                            src={card.image2}
                            alt=""
                            className="project-card-member-progress"
                          />
                          <img
                            src={card.image3}
                            alt=""
                            className="project-card-member-progress"
                          />
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
                        <img
                          src={card.image1}
                          alt=""
                          className="project-card-member"
                        />
                        <img
                          src={card.image2}
                          alt=""
                          className="project-card-member"
                        />
                        <img
                          src={card.image3}
                          alt=""
                          className="project-card-member"
                        />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
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

            <>
              {/* {selectedCard?.status === "ToDo" && (
                  <div className="project-addSubtask" onClick={handleSubTaskClick}>
                    <FaPlusSquare className="me-2" /> Add Sub Tasks
                  </div>

                )} */}

              {selectedCard?.status !== "ToDo" && (
                <p>
                  <span className="description-label">Subtasks:</span> <br />
                  <button
                    className="subtasks-button"
                    onClick={() => handleViewAllClick(selectedCard)}
                  >
                    View All
                  </button>
                </p>
              )}
            </>

            {/* {showSubTaskFields && (
              <div>
                <div className='subtask-form-input-row'>

                  <Form.Group>
                    <FormControl
                      type="text"
                      placeholder="Add a task"
                      className="subtask-form-input"
                    />
                  </Form.Group>

                  <div className="subtask-form-input-label" onClick={toggleMembersPopup}>
                    <FaUsers className='me-4' />
                    Assign
                  </div>

                  {showMembersPopup && (
                    <div className='members-popup-overlay'>
                      <div className="members-popup">
                        <AiOutlineClose
                          className="member-popup-close-icon"
                          onClick={toggleMembersPopup}
                        />
                        <center className="members-popup-topic">Members</center>
                        <input type="text" placeholder="Search Members" className="members-search-bar" />


                        {members.map((member, index) => (
                          <div key={index} className="member-label">
                            <img src={member.member_profile} className='member-profile-pic' />
                            <p className='member-name'>{member.member_name}</p>
                          </div>
                        ))}

                        <button className="add-member-button">ADD</button>

                      </div>
                    </div>
                  )}

                  <div className="subtask-form-input-label" onClick={toggleDatesPopup}>
                    <FaClock className='me-4' />
                    Due Dates
                  </div>

                  {showDatesPopup && (
                    <div className='dates-popup-overlay'>
                      <div className="dates-popup">
                        <AiOutlineClose
                          className="dates-popup-close-icon"
                          onClick={toggleDatesPopup}
                        />
                        <center className="labels-popup-topic">Dates</center>

                        <div className="date-selection">
                          <label>Due Date</label>
                          <input type="date" />
                        </div>

                        <div className="time-selection">
                          <label>Time</label>
                          <input type="time" />
                        </div>

                        <div className="reminder-selection">
                          <label>Set due date reminder</label>
                          <select>
                            <option>1 Day before</option>
                            <option>2 Days before</option>
                            <option>1 Week before</option>
                          </select>
                          <small>Reminders will send to all task members</small>
                        </div>

                      </div>
                    </div>
                  )}
                </div>

                <div className="subtask-btn-row">
                  <button className="subtask-btn-primary" onClick={handleSave}>
                    Add
                  </button>
                  <button className="subtask-btn-secondary" onClick={handleCancel}>
                    Cancel
                  </button>
                </div>
              </div>
            )} */}

            <p>
              <span className="description-label">Members:</span> <br />
              <div className="project-card-members">
                <img
                  src={selectedCard?.image1}
                  alt="Member"
                  className="project-card-member-popup"
                />
                <img
                  src={selectedCard?.image2}
                  alt="Member"
                  className="project-card-member-popup"
                />
                <img
                  src={selectedCard?.image3}
                  alt="Member"
                  className="project-card-member-popup"
                />
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

            {selectedCard?.status !== "ToDo" && (
              <p>
                <span className="description-label">Review:</span> <br />
                {selectedCard?.review}
              </p>
            )}

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

                  <div className="subtasks-container">
                    {selectedCard?.subtasks?.map((subtask, index) => (
                      <div className="subtask-item" key={index}>
                        <input
                          type="checkbox"
                          id={`subtask-${index}`}
                          className="subtask-checkbox"
                          // onClick={() => handleCheckboxClick(index)}
                        />

                        {role === "TeamLeader" && (
                          <div className="view-all-details-icons">
                            <FaUsers
                              className="me-4"
                              onClick={toggleMembersPopup}
                            />
                            <FaClock
                              className="me-4"
                              onClick={toggleDatesPopup}
                            />

                            {showMembersPopup && (
                              <div className="members-popup-overlay">
                                <div className="members-popup">
                                  <AiOutlineClose
                                    className="member-popup-close-icon"
                                    onClick={toggleMembersPopup}
                                  />
                                  <center className="members-popup-topic">
                                    Assigned Members
                                  </center>

                                  {members.map((member, index) => (
                                    <div key={index} className="member-label">
                                      <img
                                        src={member.member_profile}
                                        className="member-profile-pic"
                                      />
                                      <p className="member-name">
                                        {member.member_name}
                                      </p>
                                    </div>
                                  ))}
                                </div>
                              </div>
                            )}

                            {showDatesPopup && (
                              <div className="dates-popup-overlay">
                                <div className="dates-popup">
                                  <AiOutlineClose
                                    className="dates-popup-close-icon"
                                    onClick={toggleDatesPopup}
                                  />
                                  <center className="labels-popup-topic">
                                    Dates
                                  </center>

                                  <div className="date-selection">
                                    <label>Due Date</label>
                                    <input
                                      type="date"
                                      defaultValue="11/07/2024"
                                    />
                                  </div>

                                  <div className="time-selection">
                                    <label>Time</label>
                                    <input
                                      type="time"
                                      defaultValue="29:55 PM"
                                    />
                                  </div>

                                  <div className="reminder-selection">
                                    <label>Set due date reminder</label>
                                    <select>
                                      <option>1 Day before</option>
                                      <option>2 Days before</option>
                                      <option>1 Week before</option>
                                    </select>
                                    <small>
                                      Reminders will send to all task members
                                    </small>
                                  </div>

                                  <button className="add-dates-button">
                                    Save
                                  </button>
                                </div>
                              </div>
                            )}
                          </div>
                        )}

                        <label
                          htmlFor={`subtask-${index}`}
                          className="subtask-label"
                        >
                          {subtask}
                        </label>
                      </div>
                    ))}

                    <br />

                    {/* <div className="project-form-main-title" onClick={handleSubTaskClick}>
                      <HiOutlineDocumentText style={{ fontSize: '20px' }} />
                      <label style={{ color: 'white' }}>Add Sub Tasks</label>
                    </div> */}

                    {/* {showSubTaskFields && (
                      <div>
                        <div className='subtask-form-input-row'>

                          <Form.Group>
                            <FormControl
                              type="text"
                              placeholder="Add a task"
                              className="subtask-form-input"
                            />
                          </Form.Group>

                          <div className="subtask-form-input-label" onClick={toggleMembersPopup}>
                            <FaUsers className='me-4' style={{ color: 'white' }} />
                            Assign
                          </div>

                          {showMembersPopup && (
                            <div className="members-popup">
                              <AiOutlineClose
                                className="member-popup-close-icon"
                                onClick={toggleMembersPopup}
                              />
                              <center className="members-popup-topic">Members</center>
                              <input type="text" placeholder="Search Members" className="members-search-bar" />


                              {members.map((member, index) => (
                                <div key={index} className="member-label">
                                  <img src={member.member_profile} className='member-profile-pic' />
                                  <p className='member-name'>{member.member_name}</p>
                                </div>
                              ))}

                              <button className="add-member-button">ADD</button>

                            </div>
                          )}

                          <div className="subtask-form-input-label" onClick={toggleDatesPopup}>
                            <FaClock className='me-4' style={{ color: 'white' }} />
                            Due Dates
                          </div>

                          {showDatesPopup && (
                            <div className="dates-popup">
                              <AiOutlineClose
                                className="dates-popup-close-icon"
                                onClick={toggleDatesPopup}
                              />
                              <center className="labels-popup-topic">Dates</center>

                              <div className="date-selection">
                                <label>Due Date</label>
                                <input type="date" />
                              </div>

                              <div className="time-selection">
                                <label>Time</label>
                                <input type="time" />
                              </div>

                              <div className="reminder-selection">
                                <label>Set due date reminder</label>
                                <select>
                                  <option>1 Day before</option>
                                  <option>2 Days before</option>
                                  <option>1 Week before</option>
                                </select>
                                <small>Reminders will send to all task members</small>
                              </div>



                            </div>
                          )}
                        </div>

                        <div className="subtask-btn-row">
                          <button className="subtask-btn-primary" onClick={handleSave}>
                            Add
                          </button>
                          <button className="subtask-btn-secondary" onClick={handleCancel}>
                            Cancel
                          </button>
                        </div>
                      </div>
                    )}
 */}
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
