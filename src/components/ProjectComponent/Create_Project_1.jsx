import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import "./EX_Project.css";
import { IoIosMore } from "react-icons/io";
import { FaPlusSquare } from "react-icons/fa";
import todo from "../../assets/images/todo.png";
import process from "../../assets/images/process.png";
import done from "../../assets/images/done.png";
import { FaBook} from 'react-icons/fa';
import { IoIosPaper } from 'react-icons/io';
import { HiOutlineDocumentText } from 'react-icons/hi';
import { FaUsers ,  FaList , FaClock  , FaPaperclip} from 'react-icons/fa';
import { AiOutlineClose } from 'react-icons/ai';

import profile1 from "../../assets/images/profile1.png";
import profile2 from "../../assets/images/profile2.png";
import profile3 from "../../assets/images/profile3.png";
import profile4 from "../../assets/images/profile4.png";
import profile5 from "../../assets/images/profile5.png";



import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';




function Create_Project_1() {
  const [showPopup, setShowPopup] = useState(false);
  const [showSubTaskFields, setShowSubTaskFields] = useState(false);
  const [showMembersPopup, setShowMembersPopup] = useState(false);

  const togglePopup = () => {
    setShowPopup(!showPopup);
}; 

const toggleMembersPopup = () => {
  setShowMembersPopup(!showMembersPopup); 
};

  const handleSubTaskClick = () => {
    setShowSubTaskFields(!showSubTaskFields); 
  };

  const handleSave = () => {
    console.log("Save clicked");
  };

  const handleCancel = () => {
    setShowSubTaskFields(false); 
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
    <div className='create-project-1'>
      <div className='create-project-row'>

        <div className='create-project-box'>
          <div className="project-box-top">
            <p className="project-box-title"> To Do</p>
            <IoIosMore className="project-box-top-icon" />
          </div>

          <img src={todo} alt='todo-image' className='project-box-image'/>

          <div className="project-addtask" onClick={togglePopup}>
                <FaPlusSquare className="me-2" /> Add Task
          </div>

          {
            showPopup && (
              <div  className={`project-popup-overlay`} 
               onClick={togglePopup}>
                <div className="project-popup-content" onClick={(e) => e.stopPropagation()}>
 
                  <div className="project-form-group">
                      <div className="project-form-main-title">
                         <FaBook/>
                         <label>Main Task Title</label>
                      </div>
                     
                      <input type="text" placeholder="Enter a title for this task" />
                  </div>

                  <div className="project-form-group">
                      <div className="project-form-main-title">
                         <IoIosPaper style={{ fontSize: '20px' }}/>
                         <label>Description</label>
                      </div>
                      
                       <textarea placeholder="Add more detailed description..."></textarea>
                  </div>

                  <div className="project-form-group">
                    <div className="project-form-main-title" onClick={handleSubTaskClick}>
                      <HiOutlineDocumentText style={{ fontSize: '20px' }} />
                      <label>Sub Tasks</label>
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

                          <div className="subtask-form-input-label">
                            <FaUsers className='me-4' />
                            Assign
                          </div>

                          <div className="subtask-form-input-label">
                            <FaClock className='me-4' />
                            Due Dates
                          </div>
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



                  <div className='project-labels-row'>
                    <div className="one-project-label"  onClick={toggleMembersPopup}>
                      <FaUsers className='me-4' />
                      Members
                    </div>

                    {showMembersPopup && (
                      <div className="members-popup">
                        <AiOutlineClose
                          className="member-popup-close-icon"
                          onClick={toggleMembersPopup}
                        />
                        <center className="members-popup-topic">Members</center>
                        <input type="text" placeholder="Search Members"  className="members-search-bar"/>


                        {members.map((member, index)=>(
                           <div key={index} className="member-label">
                            <img src={member.member_profile} className='member-profile-pic'/>
                            <p className='member-name'>{member.member_name}</p>
                          </div>
                        ))}

                      <button className="add-member-button">ADD</button>

                      </div>
                    )}

                    <div className="one-project-label">
                        <FaList className='me-4'/>
                         Labels
                    </div>

                    <div className="one-project-label">
                        <FaClock className='me-4'/>
                         Dates
                    </div>

                    <div className="one-project-label">
                        <FaPaperclip className='me-4'/>
                         Attachments
                    </div>
                  </div>

                  

                  <button className="add-task-button">ADD TASK</button>

                </div>
              </div>
            )
          }
        </div>



        <div className='create-project-box'>
          <div className="project-box-top">
            <p className="project-box-title"> In Progress</p>
            <IoIosMore className="project-box-top-icon" />
          </div>

          <img src={process} alt='process-image' className='project-box-image'/>
          <div className="project-addtask">
                <FaPlusSquare className="me-2" /> Add Task
          </div>
        </div>


        <div className='create-project-box'>
          <div className="project-box-top">
            <p className="project-box-title"> Done</p>
            <IoIosMore className="project-box-top-icon" />
          </div>

          <img src={done} alt='done-image' className='project-box-image'/>
          <div className="project-addtask">
                <FaPlusSquare className="me-2" /> Add Task
          </div>

        </div>

      </div>
      
    </div>

  )
}

export default Create_Project_1
