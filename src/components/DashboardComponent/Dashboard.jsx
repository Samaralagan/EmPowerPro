import React, { useEffect, useState } from "react";
import "./Dashboard.css";
import DashboardDateMark from "./DashboardDateMark";
import { EmployeeDashboard } from "../constants/contents";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import DashboardBarChart from "./DashboardBarChart";
import { DashboardCelebration } from "../constants/temporary";
import DashboardCalendar from "./DashboardCalendar";
import { useLocation, useNavigate } from "react-router-dom";
import { FaPlusSquare } from "react-icons/fa";
import { getAllcalendarMarker } from "../../service/IncomeExpenseService";

const Dashboard = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [markData, setMarkData] = useState([]);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const markedDates = [];
  const markedDates1 = [];
  useEffect(() => {
    getAllMarker();
  });
  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };
  const id = 1;
  function getAllMarker() {
    getAllcalendarMarker(id)
      .then((response) => {
        setMarkData(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }

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

  // const markedDates = ["2024-08-07", "2024-08-12", "2024-08-27"];

  const updatemarkedDates = (date) => {
    markedDates.push(date);
  };
  const updatemarkedDates1 = (date) => {
    markedDates1.push(date);
  };

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
                    {data.taskContent}
                  </div>
                  <div className="dashboard-content-top-box-data">
                    {data.task}
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
                    {data.teamContent}
                  </div>
                  <div className="dashboard-content-top-box-data">
                    {data.team}
                  </div>
                </div>
              </div>
            </div>

            <div className="dashboard-content-middle-boxs">
              <div className="dashboard-content-middle-box">
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
                markedDates1={markedDates1}
              />
            </div>

            <div className="dashboard-content-right-bottom-events">
              <button
                className="dashboard-content-right-bottom-event-add "
                onClick={openModal}
              >
                <FaPlusSquare className="me-1" />
                SCHEDULE AN EVENT
              </button>
              <DashboardDateMark
                modalIsOpen={modalIsOpen}
                closeModal={closeModal}
              />
              {markData.map((data, index) => (
                <div
                  className="dashboard-content-right-bottom-event"
                  style={
                    data.state === "complete"
                      ? { backgroundColor: "#11f4d0" }
                      : {}
                  }
                  key={index}
                >
                  <p className="mt-1">{data.eventDate}</p>
                  {/* {markedDates.push(data.eventDate)} */}
                  {data.state === "complete" ? (
                    <>{updatemarkedDates1(data.eventDate)}</>
                  ) : (
                    <>{updatemarkedDates(data.eventDate)}</>
                  )}
                  <p className="mt-1">{data.event}</p>
                  <p className="mt-1">{data.eventTime}</p>
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
