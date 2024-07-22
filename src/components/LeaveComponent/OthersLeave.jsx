import React from "react";
import Header from "../layout/Header";
import "./OthersLeave.css";
import { FaCalendarAlt } from "react-icons/fa";
import { Checkmark } from "react-checkmark";
import { FaTimesCircle } from "react-icons/fa";

function OthersLeave() {
  return (
    <div className="others-leave-body">
      <Header />
      <hr />
      <div className="leave-section">
        <div className="leave-tabs">
          <button className="tab my-leaves">My Leaves</button>
          <button className="tab others-leaves active">Others Leaves</button>
        </div>

        <div className="leave-requests-container">
          Leave Requests
          <br />
          <br />
          <div className="leave-request">
            <img
              src="https://randomuser.me/api/portraits/men/3.jpg"
              className="profile-pic"
            />

            <div>
              <p>Anne Watson</p>
            </div>
            <div>
              <p>Medical Leave</p>
            </div>
            <div>
              <p>
                From <span>30/05/2024</span>
              </p>
            </div>
            <div>
              <p>
                To <span>04/06/2024</span>
              </p>
            </div>
            <div>
              <div className="leave-view-details-button">View Details »</div>
            </div>
          </div>
          <div className="leave-request">
            <img
              src="https://randomuser.me/api/portraits/men/4.jpg"
              className="profile-pic"
            />
            <div>
              <p>Anne Watson</p>
            </div>
            <div>
              <p>Medical Leave</p>
            </div>
            <div>
              <p>
                From <span>30/05/2024</span>
              </p>
            </div>
            <div>
              <p>
                To <span>04/06/2024</span>
              </p>
            </div>

            <div className="leave-view-details-button">View Details »</div>
          </div>
        </div>

        {/* lower box  left box */}

        <div className="leave-tracker">
          <div className="today-leave-tracker">
            <div className="div-2-today-leave">Today Leave</div>
            <div className="leave-card">
              <img
                src="https://randomuser.me/api/portraits/men/5.jpg"
                alt="Diana Lovace"
                className="profile-pic"
              />
              <div className="leave-details">
                <p>Diana Lovace</p>

                <p
                  style={{
                    color: "#9e9d9d",
                    alignSelf: "center",
                    fontSize: "13px",
                    fontFamily: "Bree Serif, sans-serif",
                  }}
                >
                  SUP-1005
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
                    31/05/2024
                  </span>
                </p>
              </div>
            </div>
            <div className="leave-card">
              <img
                src="https://randomuser.me/api/portraits/men/7.jpg"
                alt="Angelow Mathews"
                className="profile-pic"
              />
              <div className="leave-details">
                <p> Mathews</p>
                <p
                  style={{
                    color: "#9e9d9d",
                    alignSelf: "center",
                    fontSize: "13px",
                    fontFamily: "Bree Serif, sans-serif",
                  }}
                >
                  SUP-1010
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
                    31/05/2024
                  </span>
                </p>
              </div>
            </div>
            <div className="leave-card">
              <img
                src="https://randomuser.me/api/portraits/men/9.jpg"
                alt="Angelow Mathews"
                className="profile-pic"
              />

              <div className="leave-details">
                <p>Olivia Rajan</p>
                <p
                  style={{
                    color: "#9e9d9d",
                    alignSelf: "center",
                    fontSize: "13px",
                    fontFamily: "Bree Serif, sans-serif",
                  }}
                >
                  SUP-1002
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
                    31/05/2024
                  </span>
                </p>
              </div>
            </div>
          </div>
          <div className="div">
            <div className="div-2">Leave History</div>
            <div className="div-3">
              <div className="div-4">
                <Checkmark size="35px" />
                <div>
                  <FaCalendarAlt
                    style={{
                      marginRight: "5px",
                      marginTop: "20px",
                      color: "#000f44",
                      fontSize: "x-large",
                    }}
                  />
                </div>
              </div>
              <div className="div-4">
                <div className="div-6">Ben Peter</div>
                <div className="div-7">From</div>
                <div className="div-8">28/05/2024</div>
              </div>
              <div className="div-4">
                <div className="div-10">Casual Leave</div>
                <div className="div-11">To</div>
                <div className="div-12">31/05/2024</div>
              </div>
              <div className="div-4">
                <div className="div-14">
                  <div className="div-15" style={{ cursor: "pointer" }}>
                    View Details »
                  </div>
                </div>
                <div className="div-16">
                  <div className="div-17">Status</div>
                  <div className="div-18">Approved</div>
                </div>
              </div>
            </div>

            <div className="div-3">
              <div className="div-4">
                <FaTimesCircle
                  size="34px"
                  color="red"
                  style={{
                    position: "absolute",
                    animation: "rotate 2s  ",
                  }}
                />
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
              <div className="div-4">
                <div className="div-6">Cate Micheal</div>
                <div className="div-7">From</div>
                <div className="div-8">28/05/2024</div>
              </div>
              <div className="div-4">
                <div className="div-10">Medical Leave</div>
                <div className="div-11">To</div>
                <div className="div-12">31/05/2024</div>
              </div>
              <div className="div-4">
                <div className="div-14">
                  <div className="div-15" style={{ cursor: "pointer" }}>
                    View Details »
                  </div>
                </div>
                <div className="div-16">
                  <div className="div-17">Status</div>
                  <div className="div-36">Rejected</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OthersLeave;
