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


function Create_Project_1() {
  const [showPopup, setShowPopup] = useState(false);

  const togglePopup = () => {
    setShowPopup(!showPopup);
};

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
              <div className="project-popup-overlay" onClick={togglePopup}>
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
                         <HiOutlineDocumentText style={{ fontSize: '20px' }}/>
                         <label>Sub Tasks</label>
                      </div>

                     <div className="add-subtask-button">
                           <FaPlusSquare className="me-4" /> 
                           Add a Sub Task
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
