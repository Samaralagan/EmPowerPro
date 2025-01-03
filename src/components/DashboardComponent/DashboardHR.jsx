import React from "react";
import "./Dashboard.css";
import Header from "../layout/Header";
import { EmployeeDashboard } from "../constants/contents";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import DashboardBarChart from "./DashboardBarChart";
import { FaPlusSquare, FaTrophy } from "react-icons/fa";
import {
  DashboardCelebration,
  DashboardMarkTime,
} from "../constants/temporary";
import DashboardCalendar from "./DashboardCalendar";
import { useLocation, useNavigate } from "react-router-dom";
import { MdPersonSearch } from "react-icons/md";

const Dashboard = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const handlePage = (PageName) => {
    navigate(`/${PageName}`);
  };
  var role = "";
  const getActivePageName = () => {
    const pathname = decodeURIComponent(location.pathname); // Decode the URL
    role = pathname.split("/")[2];
    return role;
  };
  const activePageName = getActivePageName();

  const markedDates = ["2024-08-07", "2024-08-12", "2024-08-27"];


  return (
    <div className="dashboard-body">
      {/* <Header />
      <hr className="mb-4" /> */}
      <div className="dashboard-content">
        {EmployeeDashboard.map((data, index) => (
          <div className="dashboard-content-left">
            <div style={{ display: "flex", flexDirection: "row" }}>
              <div style={{width:'50%'}}>
                <div
                  className="dashboard-content-top-boxs"
                  style={{ display: "flex", flexDirection: "column",gap:'1vh' }}
                >
                  <div className="dashboard-content-top-box" style={{width:"100%"}}>
                    <div className="dashboard-content-top-box-icons">
                      <div
                        className="dashboard-content-top-box-icon"
                        style={{ backgroundColor: data.timebody }}
                      >
                        {<data.timeIcon style={{ color: data.timecolor }} />}
                      </div>
                    </div>
                    <div className="dashboard-content-top-box-content">
                      <div className="dashboard-content-top-box-text">
                        {data.timeContent}
                      </div>
                      <div className="dashboard-content-top-box-data">
                        {data.time}
                      </div>
                    </div>
                  </div>

                  <div className="dashboard-content-top-box" style={{width:"100%"}}>
                    <div className="dashboard-content-top-box-icons">
                      <div
                        className="dashboard-content-top-box-icon"
                        style={{ backgroundColor: data.taskbody }}
                      >
                        <MdPersonSearch style={{ color: data.taskcolor }} />
                      </div>
                    </div>
                    <div className="dashboard-content-top-box-content">
                      <div className="dashboard-content-top-box-text">
                        Job Vacancy
                      </div>
                      <div className="dashboard-content-top-box-data">03</div>
                    </div>
                  </div>

                  <div className="dashboard-content-top-box" style={{width:"100%"}}>
                    <div className="dashboard-content-top-box-icons">
                      <div
                        className="dashboard-content-top-box-icon"
                        style={{ backgroundColor: data.teambody }}
                      >
                        {<data.teamIcon style={{ color: data.teamcolor }} />}
                      </div>
                    </div>
                    <div className="dashboard-content-top-box-content">
                      <div className="dashboard-content-top-box-text">
                        Total Employees
                      </div>
                      <div className="dashboard-content-top-box-data">150</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="dashboard-content-middle-boxs">
                {/* <div className="dashboard-content-middle-box">
                <div className="dashboard-CircularProgressbar">
                  <CircularProgressbar
                    value={50}
                    text={`${50}%`}
                    styles={buildStyles({
                      // Colors
                      pathColor: `rgba(0, 170, 139, ${50 / 100})`,
                      textColor: "#004437",
                      trailColor: "#004437",
                      backgroundColor: "#004437",
                    })}
                  />
                </div>
                <div className="dashboard-content-middle-content">
                  <p>Project progress</p>
                  <span>5% less than the last month</span>
                </div>
              </div> */}
                <div className="dashboard-content-middle-box" style={{width:'88%', height:'100%', marginLeft:'4vw'}}>
                  {/* <div className="dashboard-Trophy">
                  <FaTrophy />
                </div>
                <div className="dashboard-content-middle-box-content">
                  <h5>Evaluation Marks</h5>
                  <h2>9/10</h2>
                  <p>You did a great job, keep it up</p>
                </div> */}
                  <div className="dashboard-content-middle-box-content">
                    <h5>Last Performance Evaluation</h5>
                    <h2>Exceptionally Succeed</h2>
                    <button
                      onClick={() =>
                        handlePage(`Dash Board/${role}/Performance`)
                      }
                    >
                      View Last Report
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="dashboard-content-bottom-box">
              <DashboardBarChart />
            </div>
          </div>
        ))}

        <div className="dashboard-content-right">
          <div className="dashboard-content-right-top">
            <p>Celebrations Today !</p>
            <div className="dashboard-content-right-celebrations">
              {DashboardCelebration.map((data, index) => (
                <div className="dashboard-content-right-celebration">
                  <img src={data.img} alt="" />
                  <p>{data.name}</p>
                  <p>{data.event}</p>
                  <div>{<data.icon />}</div>
                </div>
              ))}
            </div>
          </div>
          <div className="dashboard-content-right-bottom">
            <div>
            <DashboardCalendar
                initialMonth={new Date().getMonth()}
                initialYear={new Date().getFullYear()}
                markedDates={markedDates}
              />
            </div>
            <div className="dashboard-content-right-bottom-events">
            <button className="dashboard-content-right-bottom-event-add">
                <FaPlusSquare className="me-1" />
                SCHEDULE AN EVENT
              </button>
              {DashboardMarkTime.map((data, index) => (
                <div
                  className="dashboard-content-right-bottom-event"
                  key={index}
                >
                  <p>{data.date}</p>
                  <p>{data.name}</p>
                  <p>{data.time}</p>
                </div>
              ))}
              <div>
                <p></p>
                <p></p>
                <p></p>
              </div>
            </div>
            <div></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
