import React from "react";
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

const Project = () => {
  const location = useLocation();
  const getRoleName = () => {
    const pathname = decodeURIComponent(location.pathname); // Decode the URL
    const role = pathname.split("/")[2];
    return role;
  };
  const role = getRoleName();
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
                <div className="project-card" key={index}>
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
                <div className="project-card" key={index}>
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
                  <div className="project-card-date">
                    <FaCalendarWeek className="me-2" />
                    {card.date}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;
