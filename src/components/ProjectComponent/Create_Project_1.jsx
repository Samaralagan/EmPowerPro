import React, { useState , useCallback } from 'react';
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
import { BsUpload } from "react-icons/bs";
import { useDropzone } from 'react-dropzone';
import { FaCalendarWeek ,  FaRegStickyNote } from "react-icons/fa";
import { SiReact } from 'react-icons/si';


import profile1 from "../../assets/images/profile1.png";
import profile3 from "../../assets/images/profile3.png";
import profile5 from "../../assets/images/profile5.png";

import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';

import {
  ProjectDone,
  ProjectInProgress,
  ProjectToDo
} from "../constants/temporary";




function Create_Project_1() {
  const [showPopup, setShowPopup] = useState(false);
  const [showMembersPopup, setShowMembersPopup] = useState(false);
  const [showLabelsPopup, setShowLabelsPopup] = useState(false);
  const [showDatesPopup, setShowDatesPopup] = useState(false);
  const [showAttachmentsPopup, setShowAttachmentsPopup] = useState(false);
 
  const [showSubTaskFields, setShowSubTaskFields] = useState(false);
  const [showCreateLabelFields, setShowCreateLabelFields] = useState(false); 

  const [showCardPopup, setCardShowPopup] = useState(false);
  const [selectedProcessCard, setSelectedProcessCard] = useState(null);
  const [showNestedProcessPopup, setShowNestedProcessPopup] = useState(false);


  const togglePopup = () => {
    setShowPopup(!showPopup);
}; 

const toggleMembersPopup = () => {
  setShowMembersPopup(!showMembersPopup); 
};

const toggleLabelsPopup = () => {
  setShowLabelsPopup(!showLabelsPopup); 
};

const toggleDatesPopup = () => {
  setShowDatesPopup(!showDatesPopup); 
};

const toggleAttachmentsPopup = () => {
  setShowAttachmentsPopup(!showAttachmentsPopup); 
};


  const handleSubTaskClick = () => {
    setShowSubTaskFields(!showSubTaskFields); 
  };

  const handleCreateLabelClick = () => {
    setShowCreateLabelFields(!showCreateLabelFields); 
  };

  const handleSave = () => {
    console.log("Save clicked");
  };

  const handleCancel = () => {
    setShowSubTaskFields(false); 
  };


  const handleCardClick = (card) => {
    setSelectedProcessCard(card);
    setCardShowPopup(true); 
  };

 
  const handleClosePopup = () => {
    setCardShowPopup(false);
    setSelectedProcessCard(null);
  };

  const handleViewAllClick = (selectedCard) => {
    setSelectedProcessCard(selectedCard);
    setShowNestedProcessPopup(true);
  };

  const handleCloseNestedPopup = () => {
    setShowNestedProcessPopup(false);
  };


  const onDrop = useCallback((acceptedFiles) => {
    setFileName(acceptedFiles[0].name);
}, []);

const { getRootProps, getInputProps } = useDropzone({
    onDrop, 
    accept: '.pdf, .doc, .docx', 
});

const [fileName, setFileName] = React.useState('');



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

  const labels=[
    {
      label_name:"Planning",
      label_color: "#16BD59",
    },
    {
      label_name:"Design",
      label_color: "#EE6401",
    },
    {
      label_name:"Implementation",
      label_color: "#2DA3B3",
    },
    {
      label_name:"Documentation",
      label_color: "#B40799",
    },

  ]

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
                      <div className="project-form-main-title">
                         <SiReact style={{ fontSize: '20px' }}/>
                         <label>Language Stack</label>
                      </div>
                       <textarea placeholder="Add language stacks to use..."></textarea>
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

                          <div className="subtask-form-input-label"  onClick={toggleMembersPopup}>
                            <FaUsers className='me-4' />
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
                            <FaClock className='me-4' />
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



                  <div className='project-labels-row'>

                    <div className="one-project-label" onClick={toggleMembersPopup}>
                      <FaUsers className='me-4' />
                      Members
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


                          <div className='member-team-leader'>Select as Team Leader</div>
                          {members.map((member, index) => (
                            <div key={index} className="member-label">
                              <input  type="radio" name="selectedMember" value={member.member_name} className="member-radio-button" />
                              <img src={member.member_profile} className='member-profile-pic' />
                              <p className='member-name'>{member.member_name}</p>
                            </div>
                          ))}

                          <button className="add-member-button">ADD</button>

                        </div>
                      </div>

                    )}



                    <div className="one-project-label" onClick={toggleLabelsPopup}>
                      <FaList className='me-4' />
                      Labels
                    </div>

                    {showLabelsPopup && (
                      <div className='labels-popup-overlay'>
                         <div className="labels-popup">
                        <AiOutlineClose
                          className="labels-popup-close-icon"
                          onClick={toggleLabelsPopup}
                        />
                        <center className="labels-popup-topic">Labels</center>
                        <input type="text" placeholder="Search Labels" className="labels-search-bar" />

                        {labels.map((label, index) => (
                          <div className='label-full-line' key={index}>
                            <input type="checkbox" className="label-checkbox" />
                            <div className="labels-label" style={{ backgroundColor: label.label_color }}>
                              <p className='labels-name'>{label.label_name}</p>
                            </div>
                          </div>
                        ))}

                        <button className="add-labels-button">Add</button> <br/>
                        <button className="add-labels-create-button" onClick={handleCreateLabelClick} >Create a new label</button>

                        {showCreateLabelFields && (
                          <div className="create-label-fields">
                            <input type="text" placeholder="Label Name" className='label-name-input' />
                            <input type="color" />
                            <button onClick={() => setShowCreateLabelFields(false)} className="add-new-labels-create-button">Save Label</button>
                          </div>
                        )}

                      </div>

                      </div>
                     
                    )}


                    <div className="one-project-label" onClick={toggleDatesPopup}>
                      <FaClock className='me-4' />
                      Dates
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

                        <button className="add-dates-button">Save</button>

                      </div>
                      </div>
                     
                    )}


                    <div className="one-project-label" onClick={toggleAttachmentsPopup}>
                      <FaPaperclip className='me-4' />
                      Attachments
                    </div>

                    {showAttachmentsPopup && (
                      <div className='attachment-popup-overlay'>
                        <div className="attachment-popup">
                        <AiOutlineClose
                          className="attachment-popup-close-icon"
                          onClick={toggleAttachmentsPopup}
                        />
                        <center className="labels-popup-topic">Attachments</center>

                        <div className='col-16 attachment-input '>
                          <div
                            {...getRootProps()}
                            className="attachment-input-upload-area"
                          >
                            <BsUpload className='attachment-input-upload-area-icon' />
                            <br />
                            <span>Drag and drop to upload Or click to browse</span>
                            <input {...getInputProps()} /> { }
                          </div>

                          {fileName && <div>Selected File: {fileName}</div>}


                        </div>

                        <div className="link-selection">
                          <label>Paste a link</label>
                          <input type="text" />
                        </div>

                        <button className="add-link-button">Insert</button>
                      </div>

                      </div>
                      
                    )}
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

          <div>
          {ProjectInProgress.map((card, index) => (
                <div className="project-progress-card"
                  key={index}
                  onClick={() => handleCardClick(card)} >

                  <div className="project-progress-card-color-boxs">
                    {card.green && (
                      <div
                        className="project-progress-card-color-box"
                        style={{ backgroundColor: "#16BD59" }}
                      ></div>
                    )}
                    {card.orange && (
                      <div
                        className="project-progress-card-color-box"
                        style={{ backgroundColor: "#EE6401" }}
                      ></div>
                    )}
                    {card.blue && (
                      <div
                        className="project-progress-card-color-box"
                        style={{ backgroundColor: "#2DA3B3" }}
                      ></div>
                    )}
                  </div>
                  <div className="project-progress-card-content">
                    <div>
                      <div className="d-flex ">
                        <p>{card.title} </p>
                      </div>

                      <div className="project-progress-card-members">
                        <img src={card.image1} alt="" className="project-progress-card-member-progress" />
                        <img src={card.image2} alt="" className="project-progress-card-member-progress" />
                        <img src={card.image3} alt="" className="project-progress-card-member-progress" />
                      </div>

                      <div className="project-progress-card-date">
                        <FaCalendarWeek className="me-2" />
                        {card.date}
                      </div>
                    </div>
                    <div className="project-progress-card-circle">
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


        <div className='create-project-box'>
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
                  onClick={() =>  handleCardClick(card)}
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



       {/* Popup Card Component */}
       {showCardPopup && (
        <div className="popup-overlay-process" onClick={handleClosePopup}>
          <div className="popup-content-process" onClick={(e) => e.stopPropagation()}>
            <button className="popup-close-btn-process" onClick={handleClosePopup}>
              X
            </button>

            <div className="popup-top-process">
              <FaRegStickyNote className="sticky-process" />
              <h4>{selectedProcessCard?.title}</h4>

            </div>

            <p>
              <span className="description-label-process">Description:</span> <br />

              <input type="text" defaultValue={selectedProcessCard?.description}  className='description-input'/>
           
            </p>

            <p>
              <span className="description-label-process">Subtasks:</span> <br />

              <button className="subtasks-button-process" onClick={() => handleViewAllClick(selectedProcessCard)}>View All</button>

            </p>

            <p>
              <span className="description-label-process">Members:</span> <br />

              <div className="project-progress-card-members">
                {[selectedProcessCard?.image1, selectedProcessCard?.image2, selectedProcessCard?.image3].map((image, index) => (
                  <img
                    key={index}
                    src={image}
                    alt={`Member ${index + 1}`}
                    className="project-progress-card-member-popup"
                  />
                ))}

                <button className="member-add-button"  onClick={toggleMembersPopup}>+</button>

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

              {showLabelsPopup && (
                <div className='labels-popup-overlay'>
                  <div className="labels-popup">
                    <AiOutlineClose
                      className="labels-popup-close-icon"
                      onClick={toggleLabelsPopup}
                    />
                    <center className="labels-popup-topic">Labels</center>
                    <input type="text" placeholder="Search Labels" className="labels-search-bar" />

                    {labels.map((label, index) => (
                      <div className='label-full-line' key={index}>
                        <input type="checkbox" className="label-checkbox" />
                        <div className="labels-label" style={{ backgroundColor: label.label_color }}>
                          <p className='labels-name'>{label.label_name}</p>
                        </div>
                      </div>
                    ))}

                    <button className="add-labels-button">Add</button> <br />
                    <button className="add-labels-create-button" onClick={handleCreateLabelClick} >Create a new label</button>

                    {showCreateLabelFields && (
                      <div className="create-label-fields">
                        <input type="text" placeholder="Label Name" className='label-name-input' />
                        <input type="color" />
                        <button onClick={() => setShowCreateLabelFields(false)} className="add-new-labels-create-button">Save Label</button>
                      </div>
                    )}

                  </div>

                </div>

              )}

            </p>

            <p>

              <span className="description-label-process">Labels:</span> <br />

              <div className="project-card-color-boxs">

                {selectedProcessCard.green && (
                  <div
                    className="project-card-color-box-popup"
                    style={{ backgroundColor: "#16BD59" }}
                  >
                    <p className="popup-bar-label">Planning</p>
                  </div>
                )}

                {selectedProcessCard.orange && (
                  <div
                    className="project-card-color-box-popup"
                    style={{ backgroundColor: "#EE6401" }}
                  >
                    <p className="popup-bar-label">Design</p>
                  </div>
                )}

                {selectedProcessCard.blue && (
                  <div
                    className="project-card-color-box-popup"
                    style={{ backgroundColor: "#2DA3B3" }}
                  >
                    <p className="popup-bar-label">Implementation</p>
                  </div>
                )}

               <button className="label-add-button"  onClick={toggleLabelsPopup}>+</button>

              </div>
            </p>
            <p>
              <span className="description-label-process">Date:</span> <br />
              {selectedProcessCard?.date}
            </p>

            {showNestedProcessPopup && (
              <div className="nested-popup-overlay-process" onClick={handleCloseNestedPopup}>
                <div className="nested-popup-content-process" onClick={(e) => e.stopPropagation()} >
                  <button className="popup-close-btn-process" onClick={handleCloseNestedPopup}>
                    X
                  </button>
                  <h4>Sub Tasks</h4>
                  <div className="project-card-circle-popup-process">
                    <p>
                      {selectedProcessCard?.finish}/{selectedProcessCard?.total}
                    </p>
                    <div>In Progress.........</div>
                  </div>
                 
                  <div className="subtasks-container-process">
                    {selectedProcessCard?.subtasks?.map((subtask, index) => (
                      <div className="subtask-item-process" key={index}>
                        <input
                          type="checkbox"
                          id={`subtask-${index}`}
                          className="subtask-checkbox-process"
                          
                        />
                        
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
                        <label htmlFor={`subtask-${index}`} className="subtask-label-process">
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

           <button className="add-task-button">Save Changes</button>
          </div>

        </div>

      )}



    </div>
  )
}

export default Create_Project_1
