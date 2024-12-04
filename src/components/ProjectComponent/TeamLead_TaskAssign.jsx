import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from 'react-router-dom';
import "./Project.css";
import Header from "../layout/Header";
import { IoIosMore } from "react-icons/io";
import { FaCalendarWeek } from "react-icons/fa";
import { HiOutlineDocumentText } from 'react-icons/hi';
import {
  ProjectDone,
  ProjectInProgress,
  ProjectToDo,
  SelectProjects
} from "../constants/temporary";
import { FaPlusSquare, FaUsers, FaBook, FaClock } from "react-icons/fa";
import { AiOutlineClose } from 'react-icons/ai';


import "./EX_Project.css";
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';


import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';

import {FaHeart, FaStar, FaRocket } from "react-icons/fa";
import profile1 from "../../assets/images/profile1.png";
import profile2 from "../../assets/images/profile2.png";
import profile3 from "../../assets/images/profile3.png";
import profile4 from "../../assets/images/profile4.png";
import profile5 from "../../assets/images/profile5.png";



function TeamLead_TaskAssign() {
    const [selectedProject, setSelectedProject] = useState(null);

    const recentProjects = [
        {
          projectName: 'Health & Fitness App',
          icon: <FaHeart />,
          color: "#FFCDD2",
          iconColor: "#D32F2F",
          client: "PrimeHealth Medical Center",
          startDate: 'Mar 28',
          endDate: 'Apr 13',
    
          teamMembers: [
            { name: 'Member 1', avatarUrl: profile1 },
            { name: 'Member 2', avatarUrl: profile2 },
            { name: 'Member 3', avatarUrl: profile3 },
          ],
        },
        {
          projectName: 'Online Shopping App',
          icon: <FaStar />,
          color: "#FFF9C4",
          iconColor: "#FBC02D",
          client: "Commercial Bank",
          startDate: 'Mar 28',
          endDate: 'Apr 13',
          teamMembers: [
            { name: 'Member 4', avatarUrl: profile4 },
            { name: 'Member 5', avatarUrl: profile5 },
            { name: 'Member 6', avatarUrl: profile1 },
          ],
        },
        {
          projectName: 'Ride Sharing App',
          icon: <FaRocket />,
          color: "#BBDEFB",
          iconColor: "#1976D2",
          client: "JourneyHub Travellers",
          startDate: 'Mar 28',
          endDate: 'Apr 13',
          teamMembers: [
            { name: 'Member 7', avatarUrl: profile3 },
            { name: 'Member 8', avatarUrl: profile5 },
            { name: 'Member 9', avatarUrl: profile2 },
          ],
        },
      ];
    
      const handleProjectClick = (project) => {
        setSelectedProject(project); 
      };
    
      const closePopup = () => {
        setSelectedProject(null); 
      };

    
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
    
      const members = [
        {
          member_name: "Olivia Rajan",
          member_profile: profile1
        },
        {
          member_name: "Can Samuel",
          member_profile: profile3
        },
        {
          member_name: "Sara Lovelace",
          member_profile: profile5
        },
    
      ];

  return (
    <div className="contentbodyall1">
      <div className='remain-box'>
            <h2 className='full-box-title'>Recent Projects</h2>

            <div className="project-row">
              {recentProjects.map((project, index) => (
                <div key={index} className="project-box" onClick={() => handleProjectClick(project)}>
                  <div className="project-name-row">
                    <div className="heart-icon-container" style={{ backgroundColor: project.color }}>
                      <span className='heart-icon' style={{ color: project.iconColor }}> {project.icon}</span>
                    </div>
                    <h4 className='project-name' style={{ color: project.iconColor }} >{project.projectName}</h4>
                  </div>

                  <br />

                  <div className='project-detail-row'>
                    <p className='project-subdetail'>Client : </p>
                    <span className='project-maindetail'> {project.client}</span>
                  </div>

                  <div className='project-detail-row'>
                    <p className='project-subdetail'>Start Date : </p>
                    <span className='project-maindetail'> {project.startDate}</span>
                  </div>

                  <div className='project-detail-row'>
                    <p className='project-subdetail'>End Date : </p>
                    <span className='project-maindetail'> {project.endDate}</span>
                  </div>


                  <div className='project-detail-row'>
                    <p className='project-subdetail'>Team Members : </p>
                  </div>

                  <div className="project-detail-team-members">
                    {project.teamMembers.map((member, memberIndex) => (
                      <img
                        key={memberIndex}
                        src={member.avatarUrl}
                        alt={member.name}

                      />
                    ))}
                  </div>


                </div>
              ))}

            </div>
             {/* Popup for the selected project */}
        {selectedProject && (
          <div className="popup-overlay">
            <div className="popup-content">
              <button className="popup-close-btn" onClick={closePopup}>X</button>
              <h2>{selectedProject.projectName}</h2>
             
              <div>
                <br/>
              <div className="project-form-group">
                      <div className="project-form-main-title">
                         <FaBook/>
                         <label>Main Task Title</label>
                      </div>

                      <input type="text" placeholder="Enter a title for this task" />
                  </div>

                  <div className="project-addSubtask" onClick={handleSubTaskClick}>
                    <FaPlusSquare className="me-2" /> Add Sub Tasks
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


              </div>
            </div>
          </div>
        )}



          </div>
    </div>
  )
}

export default TeamLead_TaskAssign
