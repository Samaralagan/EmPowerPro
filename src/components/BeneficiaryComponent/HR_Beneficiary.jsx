import React, { useEffect, useState } from "react";
import "./Beneficiary.css";
import Header from "../layout/Header";
import SideBar from "../common/SideBar";
import axios from "axios";

import event_1 from "../../assets/images/event-1.jpg";
import event_2 from "../../assets/images/event-2.jpg";
import event_3 from "../../assets/images/event-3.jpg";

import { FaPlusCircle } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { FaThumbsUp, FaThumbsDown } from "react-icons/fa";
import { FaLocationPin } from "react-icons/fa6";

function HR_Beneficiary({ setActiveComponent }) {
  const navigate = useNavigate();

  const [events, setEvents] = useState([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState("");
  const role = localStorage.getItem("role");

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const token = localStorage.getItem("token");
        const response = await axios.get(
          "http://localhost:8080/api/v1/hr/all-events",
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        setEvents(response.data); // Set fetched events to state
        console.log(response.data);
      } catch (error) {
        setError("Failed to fetch events.");
        console.error("Error fetching events:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchEvents();
  }, []);

  // const handleAppliedClaim = () => {
  //   navigate("/Applied-claim");
  // };

  // const handleCanceledClaim = () => {
  //   navigate("/Canceled-claim");
  // };

  // const handleApplyClaim = () => {
  //   navigate("/ApplyClaim-1");
  // };

  // const handleApplyEvent = () => {
  //   navigate("/ApplyEvent");
  // };
  const handleAppliedClaim = () => {
    setActiveComponent("AppliedClaimForm");
  };
  const handleCanceledClaim = (id) => {
    // setActiveComponent("CanceledClaimForm");
    navigate(`/Beneficiary/HR/${id}`);
  };
  const handleApplyClaim = () => {
    setActiveComponent("ApplyClaim_1");
  };
  const handleApplyEvent = () => {
    setActiveComponent("ApplyEvent");
  };

  const [eventClaim, setEventClaim] = useState([]);
  const fetchEventClaim = async () => {
    const url = `http://localhost:8080/api/v1/hr/allmedicalClaims`;

    try {
      const response = await fetch(url);

      console.log("Response Status:", response.status);

      if (response.ok) {
        const data = await response.json();
        console.log("Fetched Data:", data);

        // Ensure 'data' is an array
        if (Array.isArray(data)) {
          // setMembers(data);
          setEventClaim(data);
        } else {
          console.error("Expected an array but received:", typeof data);
          // setMembers([]); // Fallback to an empty array
          setEventClaim([]);
        }
      } else {
        console.error(
          `Failed to fetch: HTTP ${response.status}, ${response.statusText}`
        );
      }
    } catch (error) {
      console.error("Fetch failed:", error.message);

      if (error.name === "TypeError") {
        console.error(
          "Possible reasons: Network issue, incorrect URL, or CORS restriction."
        );
      }
    }
  };

  useEffect(() => {
    fetchEventClaim();
  }, []);
  return (
    <div>
      <SideBar />
      {/* <Header /> */}

      <div className="beneficiary-body">
        <div className="company-events-category">
          <div className="claim-head">
            <div className="claim-topic">Company Events</div>

            <div className="apply-claim" onClick={handleApplyEvent}>
              <div className="add-icon-circle">
                <FaPlusCircle className="add-icon" />
              </div>
              <div className="new-button-content">
                <div className="new-content">Create New Request</div>
              </div>
            </div>
          </div>

          <div className="filter-row">
            <select className="filter-dropdown" defaultValue="">
              <option value="" disabled>
                Filter By
              </option>
              <option value="option1">Option 1</option>
              <option value="option2">Option 2</option>
              <option value="option3">Option 3</option>
            </select>

            <div className="search-bar">
              <FaSearch className="search-icon" />
              <input
                type="text"
                placeholder="Search..."
                className="search-input"
              />
              <button className="search-button">Search</button>
            </div>
          </div>

          <div className="event-cards">
            {events.map((event) => (
              <div className="event-card" key={event.id}>
                <div className="img-part">
                  <img alt="event-img" src={event_2} />
                </div>
                <div className="text-part">
                  <div className="text-row">
                    <div className="event-name">{event.name}</div>
                    <div className="event-date">{event.date}</div>
                  </div>

                  <div className="event-time">{event.time}</div>

                  <div className="event-location">
                    <FaLocationPin className="event-icon" />
                    {event.location}
                  </div>

                  {/* {role !== "Executive" && (
                    <div className="voting">
                      <div className="interested">
                        <FaThumbsUp className="like-icon" /> Interested
                      </div>
                      <div className="not-interested">
                        <FaThumbsDown className="dislike-icon" /> Not Interested
                      </div>
                    </div>
                  )}
                  {role === "Executive" && (
                    <div className="eventstatus approved">Approved</div>
                  )} */}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="medical-claims-category">
          <div className="claim-head">
            <div className="claim-topic">Medical Claims</div>

            <div className="apply-claim" onClick={handleApplyClaim}>
              <div className="add-icon-circle">
                <FaPlusCircle className="add-icon" />
              </div>
              <div className="new-button-content">
                <div className="new-content">Create New Claim</div>
              </div>
            </div>
          </div>

          <div className="filter-row">
            <select className="filter-dropdown" defaultValue="">
              <option value="" disabled>
                Filter By
              </option>
              <option value="option1">Option 1</option>
              <option value="option2">Option 2</option>
              <option value="option3">Option 3</option>
            </select>

            <div className="search-bar">
              <FaSearch className="search-icon" />
              <input
                type="text"
                placeholder="Search..."
                className="search-input"
              />
              <button className="search-button">Search</button>
            </div>
          </div>

          <div className="medical-claims">
            {eventClaim.length === 0 ? (
              <center>
                <div>Empty</div>
              </center>
            ) : (
              eventClaim.map((data, index) => (
                <div className="medical-claim">
                  <div className="claim-status-heading">
                    <div className="status pending">{data.status}</div>
                    <div className="claimed-date">{data.date}</div>
                  </div>
                  <div className="reason-topic">Reason</div>

                  <div className="reason-row">
                    <div className="reason">{data.reason}</div>
                    <div
                      className="view-details"
                      onClick={() => handleCanceledClaim(data.id)}
                    >
                      View Details ...
                    </div>
                  </div>
                </div>
              ))
            )}

            {/* <div className="medical-claim">
              <div className="claim-status-heading">
                <div className="status approved">Approved</div>
                <div className="claimed-date">12-04-2024</div>
              </div>

              <div className="reason-topic">Reason </div>
              <div className="reason-row">
                <div className="reason">Medical Consultation</div>
                <div className="view-details" onClick={handleAppliedClaim}>
                  View Details ...
                </div>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default HR_Beneficiary;
