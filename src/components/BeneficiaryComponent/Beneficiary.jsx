import React, { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import "./Beneficiary.css";
import Header from "../layout/Header";

import event_1 from "../../assets/images/event-1.jpg";
import event_2 from "../../assets/images/event-2.jpg";
import event_3 from "../../assets/images/event-3.jpg";

import { FaPlusCircle } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";
import { useLocation, useNavigate } from "react-router-dom";
import { FaThumbsUp, FaThumbsDown } from "react-icons/fa";
import { FaLocationPin } from "react-icons/fa6";

import { BeneficiaryData } from "../constants/temporary";
import BeneficiaryCard from "../common/BeneficiaryCard";

function Beneficiary({ setActiveComponent }) {
  const [events, setEvents] = useState([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState("");

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
      } catch (error) {
        setError("Failed to fetch events.");
        console.error("Error fetching events:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchEvents();
  }, []);
  const handleApplyClaim = () => {
    setActiveComponent("ApplyClaim_1");
  };

  const location = useLocation();

  var role = "";
  const getActivePageName = () => {
    const pathname = decodeURIComponent(location.pathname); // Decode the URL
    role = pathname.split("/")[2];
    return role;
  };

  const activePageName = getActivePageName();

  return (
    <div>
      {/* <Header /> */}

      <div className="beneficiary-body">
        <div className="company-events-category">
          {/* <div className="event-topic">Company Events</div> */}

          <div className="claim-head">
            <div className="claim-topic">Company Events</div>
          </div>

          {role === "Executive" && (
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
          )}

          <div className="event-cards">
            <div className="event-cards">
              {events.map((event, index) => (
                <div className="event-card" key={index}>
                  <div className="img-part">
                    <img
                      alt="event-img"
                      src={event.imageUrl || "default-image.jpg"}
                    />
                  </div>
                  <div className="text-part">
                    <div className="text-row">
                      <div className="event-name">{event.eventName}</div>
                      <div className="event-date">{event.eventDate}</div>
                    </div>

                    <div className="event-time">{event.eventTime}</div>

                    <div className="event-location">
                      <FaLocationPin className="event-icon" />
                      {event.eventLocation}
                    </div>

                    {role !== "Executive" && (
                      <div className="voting">
                        <div className="interested">
                          <FaThumbsUp className="like-icon" /> Interested
                        </div>
                        <div className="not-interested">
                          <FaThumbsDown className="dislike-icon" /> Not
                          Interested
                        </div>
                      </div>
                    )}
                    {role === "Executive" && (
                      <div className="eventstatus approved">Approved</div>
                    )}
                  </div>
                </div>
              ))}
            </div>
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

          <div className="medical-claims">
            {BeneficiaryData.map((Card, index) => (
              <BeneficiaryCard
                key={index}
                status={Card.status}
                about={Card.about}
                date={Card.date}
                setActiveComponent={setActiveComponent}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Beneficiary;
