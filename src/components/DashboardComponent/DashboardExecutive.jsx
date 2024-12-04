import React from "react";
import "./Dashboard.css";
import Header from "../layout/Header";
import { EmployeeDashboard } from "../constants/contents";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import DashboardBarChart from "./DashboardBarChart";
import { FaTrophy } from "react-icons/fa";
import {DashboardCelebration,DashboardMarkTime,} from "../constants/temporary";
import DashboardCalendar from "./DashboardCalendar";
import {  useLocation, useNavigate } from "react-router-dom";


const Dashboard = () => {

  const navigate = useNavigate();
  const location = useLocation(); 

  const handlePage = (PageName) => {
    navigate(`/${PageName}`);
  };
  var role=''
  const getActivePageName = () => {
    const pathname = decodeURIComponent(location.pathname); // Decode the URL
     role = pathname.split('/')[2];
    return role;
  };const activePageName = getActivePageName();

  
  return (
    <div className="dashboard-body">
      {/* <Header />
      <hr className="mb-4" /> */}
      <div className="dashboard-content">
        {EmployeeDashboard.map((data, index) => (
          <div className="dashboard-content-left">
            <div className="dashboard-content-top-boxs">
              <div className="dashboard-content-top-box">
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

              <div className="dashboard-content-top-box">
                <div className="dashboard-content-top-box-icons">
                  <div
                    className="dashboard-content-top-box-icon"
                    style={{ backgroundColor: data.taskbody }}
                  >
                    {<data.taskIcon style={{ color: data.taskcolor }} />}
                  </div>
                </div>
                <div className="dashboard-content-top-box-content">
                  <div className="dashboard-content-top-box-text">
                    Pending Beneficiary
                  </div>
                  <div className="dashboard-content-top-box-data">
                    5 

                  </div>
                </div>
              </div>

              <div className="dashboard-content-top-box">
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
                  <div className="dashboard-content-top-box-data">
                    56
                  </div>
                </div>
              </div>
            </div>

            <div className="dashboard-content-middle-boxs">
              <div className="dashboard-content-middle-box">
                <div className="dashboard-CircularProgressbar">
                  <CircularProgressbar
                    value={100}
                    text={`5`}
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
                  <p>Total Projects</p>
                  <span>5% less than the last month</span>
                </div>
              </div>
              <div className="dashboard-content-middle-box">
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
                  <button onClick={() => handlePage(`Dash Board/${role}/Performance`)} >View Last Report</button>
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
              />
            </div>
            <div className="dashboard-content-right-bottom-events">
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
