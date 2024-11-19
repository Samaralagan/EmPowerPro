import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import "./Project.css";
import Header from "../layout/Header";
import { IoIosMore } from "react-icons/io";
import { FaCalendarWeek } from "react-icons/fa";
import { HiOutlineDocumentText } from 'react-icons/hi';
import {
  ProjectDone,
  ProjectInProgress,
  ProjectToDo,
} from "../constants/temporary";
import { useLocation } from "react-router-dom";
import { FaPlusSquare ,  FaUsers , FaRegStickyNote , FaClock   } from "react-icons/fa";
import { AiOutlineClose } from 'react-icons/ai';


import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';

import profile1 from "../../assets/images/profile1.png";
import profile3 from "../../assets/images/profile3.png";
import profile5 from "../../assets/images/profile5.png";

const Project = () => {

  const navigate = useNavigate();

  const handlePage = (PageName) => {
    navigate(`/${PageName}`);
  };

  const location = useLocation();

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

  const members=[
    {
      member_name :"Olivia Rajan",
      member_profile: profile1
    },
    {
      member_name :"Can Samuel",
      member_profile: profile3
    },
    {
      member_name :"Sara Lovelace",
      member_profile: profile5
    },

  ];

  return (
    <div className="">
      <div className="contentbodyall1">
        <button className="select-agile-button" onClick={() => handlePage(`Project/${role}/AgileProject`)}>For Agile Companies</button>

        <div className="project-boxs">
          <div className="project-box">
            <div className="project-box-top">
              <p className="project-box-title"> To Do</p>
              <IoIosMore className="project-box-top-icon" />
            </div>
            {/* {role === "TeamLeader" && (
              <div className="project-addtask">
                <FaPlusSquare className="me-2" /> Add Task
              </div>
            )} */}
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
            {/* {role === "TeamLeader" && (
              <div className="project-addtask">
                <FaPlusSquare className="me-2" /> Add Task
              </div>
            )} */}


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

            {role === "TeamLeader" && (
              <>
                {selectedCard?.status === "ToDo" && (
                  <div className="project-addSubtask" onClick={handleSubTaskClick}>
                    <FaPlusSquare className="me-2" /> Add Sub Tasks
                  </div>
                  
                )}

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
            )}

             {showSubTaskFields && (
                      <div>
                        <div className='subtask-form-input-row'>

                          <Form.Group>
                          <FormControl
                            type="text"
                            placeholder="Add a task"
                            className="subtask-form-input"
                          />
                         </Form.Group>

                          <div className="subtask-form-input-label"  onClick={toggleMembersPopup}>
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
                    )}


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



            {showNestedPopup && (
              <div className="nested-popup-overlay" onClick={handleCloseNestedPopup}>
                <div className="nested-popup-content" onClick={(e) => e.stopPropagation()} >
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

                  <div className="subtasks-container">

                    {selectedCard?.subtasks?.map((subtask, index) => (
                      <div className="subtask-item" key={index}>
                        <input
                          type="checkbox"
                          id={`subtask-${index}`}
                          className="subtask-checkbox"
                        // onClick={() => handleCheckboxClick(index)}
                        />

                        {role ==="TeamLeader" &&(
                            <div className="view-all-details-icons">
                            <FaUsers className='me-4' onClick={toggleMembersPopup} />
                            <FaClock className='me-4' onClick={toggleDatesPopup}/>
  
                            {showMembersPopup && (
                              <div className='members-popup-overlay'>
                                <div className="members-popup">
                                  <AiOutlineClose
                                    className="member-popup-close-icon"
                                    onClick={toggleMembersPopup}
                                  />
                                  <center className="members-popup-topic">Assigned Members</center>
                                 
                                  {members.map((member, index) => (
                                    <div key={index} className="member-label">
                                      <img src={member.member_profile} className='member-profile-pic' />
                                      <p className='member-name'>{member.member_name}</p>
                                    </div>
                                  ))}
  
                                 
  
                                </div>
                              </div>
  
                            )}
  
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
                                    <input type="date" defaultValue= "11/07/2024" />
                                  </div>
  
                                  <div className="time-selection">
                                    <label>Time</label>
                                    <input type="time" defaultValue="29:55 PM"/>
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
  
                                  <button className="add-dates-button">Save</button>
  
                                </div>
                              </div>
  
                            )}
  
  
                          </div>

                        )}


                        <label htmlFor={`subtask-${index}`} className="subtask-label">
                          {subtask}
                        </label>
                      </div>
                    ))}

<br/>
                     
                     <div className="project-form-main-title" onClick={handleSubTaskClick}>
                       <HiOutlineDocumentText style={{ fontSize: '20px' }} />
                       <label style={{ color: 'white' }}>Add Sub Tasks</label>
                     </div>
 
                     {showSubTaskFields && (
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
                             <FaClock className='me-4'  style={{ color: 'white' }} />
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
