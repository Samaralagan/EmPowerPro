import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import "./EX_Project.css";
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import {  FaPlusCircle , FaHeart , FaStar, FaRocket } from "react-icons/fa";


import profile1 from "../../assets/images/profile1.png";
import profile2 from "../../assets/images/profile2.png";
import profile3 from "../../assets/images/profile3.png";
import profile4 from "../../assets/images/profile4.png";
import profile5 from "../../assets/images/profile5.png";


function EX_Project() {
    const [projectName, setProjectName] = useState('');
    const [projectDescription, setProjectDescription] = useState('');
    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');
    const [clientName, setClientName] = useState('');


    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(projectName, projectDescription, startDate, endDate);

        setProjectName('');
        setProjectDescription('');
        setStartDate('');
        setEndDate('');

        navigate('/Project/Executive/create-project');
    };

    const recentProjects = [
        {
          projectName: 'Health & Fitness App',
          icon: <FaHeart />,            
          color: "#FFCDD2", 
          iconColor: "#D32F2F", 
          client:"PrimeHealth Medical Center",
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
          client:"Commercial Bank",
          startDate: 'Mar 28',
          endDate: 'Apr 13',
          teamMembers: [
            { name: 'Member 4', avatarUrl: profile4 },
            { name: 'Member 5', avatarUrl: profile5 },
            { name: 'Member 6', avatarUrl: profile1},
          ],
        },
        {
          projectName: 'Ride Sharing App',
          icon: <FaRocket />,         
          color: "#BBDEFB", 
          iconColor: "#1976D2",
          client:"JourneyHub Travellers",
          startDate: 'Mar 28',
          endDate: 'Apr 13',
          teamMembers: [
            { name: 'Member 7', avatarUrl: profile3 },
            { name: 'Member 8', avatarUrl: profile5 },
            { name: 'Member 9', avatarUrl: profile2},
          ],
        },
      ];

    return (
        <div className='Ex_project_page'>

        <div className="light-blue-box">
            <h2 className='blue-box-title'>CREATE  A  NEW  PROJECT</h2>
            <form  onSubmit={handleSubmit}>
                <div className='form-group'>

                    <input
                        type="text"
                        id="projectName"
                        name="projectName"
                        placeholder="Enter project name"
                        value={projectName}
                        onChange={(e) => setProjectName(e.target.value)}
                    />

                </div>

                <div className='form-group'>

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
                            style={{ width: '100%' }}
                        />
                    </div>
                    <div className="col-3">
                        <DatePicker
                            selected={endDate}
                            onChange={(date) => setEndDate(date)}
                            placeholderText="End Date"
                            className="date-boxes"
                            style={{ width: '100%' }}
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

               
                <div className="blue-project-btn">
                    <div className="blue-project-btn-add-icon">
                        <FaPlusCircle className="blue-project-btn-add-icon-team" />
                    </div>
                    <div>
                        <button type="submit" className='blue-project-btn-text'>Create Project</button>
                    </div>
                </div>
            </form>
        </div>

        <div className='remain-box'>
           <h2 className='full-box-title'>Recent Projects</h2>

           <div className="project-row">
              {recentProjects.map((project, index)=>(
                 <div key={index} className="project-box">
                      <div className="project-name-row">
                          <div className="heart-icon-container" style={{ backgroundColor: project.color }}>
                               <span className='heart-icon' style={{ color: project.iconColor }}> {project.icon}</span>
                          </div>
                          <h4 className='project-name'style={{ color: project.iconColor }} >{project.projectName}</h4>
                      </div>

                     <br/>

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
                        {project.teamMembers.map((member, memberIndex)=>(
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



        </div>
        

        </div>
    )
}

export default EX_Project
