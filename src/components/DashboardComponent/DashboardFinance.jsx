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
import { FaDonate } from "react-icons/fa";
import { FaCalendarDay } from "react-icons/fa";

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
            <div className="dashboard-content-top-boxs">
              <div className="dashboard-content-top-box">
                <div className="dashboard-content-top-box-icons">
                  <div
                    className="dashboard-content-top-box-icon"
                    style={{ backgroundColor: data.timebody }}
                  >
                    <FaDonate style={{ color: data.timecolor }} />
                  </div>
                </div>
                <div className="dashboard-content-top-box-content">
                  <div className="dashboard-content-top-box-text">
                    Monthly Payroll
                  </div>
                  <div className="dashboard-content-top-box-data-finance">
                    RS.84,678.92
                  </div>
                </div>
              </div>

              <div className="dashboard-content-top-box">
                <div className="dashboard-content-top-box-icons">
                  <div
                    className="dashboard-content-top-box-icon"
                    style={{ backgroundColor: data.taskbody }}
                  >
                    <FaCalendarDay style={{ color: data.taskcolor }} />
                  </div>
                </div>
                <div className="dashboard-content-top-box-content">
                  <div className="dashboard-content-top-box-text">
                    Payroll Date
                  </div>
                  <div className="dashboard-content-top-box-data-finance">
                    25/03/2024
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
                  <div className="dashboard-content-top-box-data-finance">
                    105
                  </div>
                </div>
              </div>
            </div>

            <div className="dashboard-content-middle-boxs">
              <div className="dashboard-content-middle-box">
                <div className="dashboard-CircularProgressbar">
                  <CircularProgressbar
                    value={60}
                    text={`${60}%`}
                    styles={buildStyles({
                      // Colors
                      pathColor: `rgba(0, 170, 139, ${25 / 100})`,
                      textColor: "#004437",
                      trailColor: "#004437",
                      backgroundColor: "#004437",
                    })}
                  />
                </div>
                <div className="dashboard-content-middle-content">
                  <p>Payroll Summary</p>
                  <span>1 March - 31 March</span>
                  <div style={{ display: "flex", gap: "1vw" }}>
                    <div>
                      Revenue
                      <div
                        style={{
                          borderRadius: "20px",
                          height: "1vw",
                          width: "1vw",
                          background: "rgb(0, 68, 55)",
                        }}
                      ></div>
                    </div>
                    <div>Expenses
                    <div
                        style={{
                          borderRadius: "20px",
                          height: "1vw",
                          width: "1vw",
                          background: "rgb(0 94 76)",
                        }}
                      ></div>
                    </div>
                  </div>
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
                  <button
                    onClick={() => handlePage(`Dash Board/${role}/Performance`)}
                  >
                    View Last Report
                  </button>
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
