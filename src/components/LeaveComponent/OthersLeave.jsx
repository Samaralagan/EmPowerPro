import React, { useEffect, useState } from "react";
import Header from "../layout/Header";
import "./OthersLeave.css";
import { FaCalendarAlt } from "react-icons/fa";
import { Checkmark } from "react-checkmark";
import { FaTimesCircle } from "react-icons/fa";
import img1 from "../../assets/images/image 1.png";
import axios from "axios";
import { Navigate, useNavigate } from "react-router-dom";

function OthersLeave({ setActiveComponent }) {
  const [allLeaves, setAllLeaves] = useState([]);
  const [pendingLeaves, setPendingLeaves] = useState([]);
  const [todayLeaves, setTodayLeaves] = useState([]);
  const [historyLeaves, setHistoryLeaves] = useState([]);
  const [leave, setLeave] = useState(null);
  const [error, setError] = useState();

  const navigate = useNavigate();

  const fetchLeaves = async () => {
    try {
      const userId = localStorage.getItem("userId");
      console.log(userId);
      const response = await axios.get(
        `http://localhost:8080/api/v1/hr/leave-to-hr/${userId}`
      );
      setAllLeaves(response.data);
    } catch {
      setError("failed to fetch leave details");
    }
  };

  const todayLeave = async () => {
    try {
      const response = await axios.get(
        `http://localhost:8080/api/v1/hr/leave-today`
      );
      setTodayLeaves(response.data);
    } catch {
      setError("failed to fetch leave details");
    }
  };

  const fetchHistoryLeaves = () => {
    const filtered = allLeaves.filter((leave) => leave.status !== "PENDING");
    setHistoryLeaves(filtered);
  };

  const filterPendingLeaves = () => {
    let filtered = [...allLeaves];

    filtered = filtered.filter((leave) => leave.status === "PENDING");
    setPendingLeaves(filtered);
  };

  useEffect(() => {
    fetchLeaves();
  }, []);

  useEffect(() => {
    filterPendingLeaves();
    todayLeave();
    fetchHistoryLeaves();
  }, [allLeaves]);

  console.log("today leaves", todayLeaves);
  console.log("history leaves", historyLeaves);

  const handleBackLeave = () => {
    setActiveComponent("Leave");
  };
  const handleLeaveHistory = () => {
    setActiveComponent("LeaveHistory");
  };

  const handleLeaveRequest = (leaveId) => {
    navigate(`/Leaves/HR/LeaveRequest/${leaveId}`);
  };

  return (
    <div className="contentbodyall">
      {/* <Header />
      <hr /> */}
      <div className="leave-section">
        <div className="leave-tabs">
          <button className="tab my-leaves" onClick={handleBackLeave}>
            My Leaves
          </button>
          <button className="tab others-leaves active">Others Leaves</button>
        </div>

        <div className="leave-requests-container">
          Leave Requests
          <br />
          <br />
          {pendingLeaves.map((leave, index) => (
            <div className="leave-request">
              <img src={img1} className="profile-picture" />

              <div>
                <p>{leave.employeeName}</p>
              </div>
              <div>
                <p>{leave.leaveType}</p>
              </div>
              <div>
                <p>
                  From <span>{leave.startDate}</span>
                </p>
              </div>
              <div>
                <p>
                  To <span>{leave.endDate}</span>
                </p>
              </div>
              <div>
                <div
                  className="leave-view-details-button"
                  onClick={() => handleLeaveRequest(leave.id)}
                >
                  View Details »
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* lower box  left box */}

        <div className="leave-tracker">
          <div className="today-leave-tracker">
            <div className="today-leave-title">Today Leave</div>
            {todayLeaves.map((leave, index) => (
              <div className="leave-card">
                <img
                  src="https://randomuser.me/api/portraits/men/5.jpg"
                  alt="Diana Lovace"
                  className="profile-pic"
                />
                <div className="leave-details">
                  <p>{leave.employeeName}</p>

                  <p
                    style={{
                      color: "#9e9d9d",
                      alignSelf: "center",
                      fontSize: "13px",
                      fontFamily: "Bree Serif, sans-serif",
                    }}
                  >
                    {leave.role} {leave.employeeId}
                  </p>
                </div>

                <div className="leave-duration">
                  <div>
                    <FaCalendarAlt
                      style={{
                        marginRight: "5px",
                        marginTop: "-4px",
                        color: "#9e9d9d",
                      }}
                    />
                  </div>

                  <p>
                    To:{" "}
                    <span style={{ color: "#00186b", fontWeight: "normal" }}>
                      {leave.endDate}
                    </span>
                  </p>
                </div>
              </div>
            ))}
          </div>
          <div className="leave-history-part">
            <div className="today-leave-title">Leave History</div>
            {historyLeaves.map((leave, index) => (
              <div className="leave-history-part-3">
                <div className="leave-history-part-4">
                  {leave.status === "REJECTED" ? (
                    <FaTimesCircle
                      size="34px"
                      color="red"
                      style={{
                        position: "absolute",
                        animation: "rotate 2s  ",
                      }}
                    />
                  ) : (
                    <Checkmark size="35px" />
                  )}
                  <div>
                    <FaCalendarAlt
                      style={{
                        marginRight: "5px",
                        marginTop: "55px",
                        color: "#000f44",
                        fontSize: "x-large",
                      }}
                    />
                  </div>
                </div>
                <div className="leave-history-part-4">
                  <div className="leave-div-6">{leave.employeeName}</div>
                  <div className="leave-div-7">From</div>
                  <div className="leave-div-8">{leave.startDate}</div>
                </div>
                <div className="leave-history-part-4">
                  <div className="leave-div-10">{leave.leaveType}</div>
                  <div className="leave-div-11">To</div>
                  <div className="leave-div-12">{leave.endDate}</div>
                </div>
                <div className="leave-history-part-4">
                  <div className="leave-div-14">
                    <div
                      className="leave-div-15"
                      style={{ cursor: "pointer" }}
                      onClick={handleLeaveHistory}
                    >
                      View Details »
                    </div>
                  </div>
                  <div className="leave-div-16">
                    <div className="leave-div-17">Status</div>
                    <div
                      className={
                        leave.status === "APPROVED"
                          ? "leave-div-18"
                          : "leave-div-36"
                      }
                    >
                      {leave.status}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default OthersLeave;
