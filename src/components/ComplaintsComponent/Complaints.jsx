import React,{useState,useEffect} from "react";
import "./Complaints.css";
import Header from "../layout/Header";
import { FaPlusCircle } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";
import { ComplaintsData } from "../constants/temporary";
import { Card } from "react-bootstrap";
import ComplaintsCard from "../common/ComplaintsCard";
import { useLocation } from "react-router-dom";
import ComplaintsToMe from "./ComplaintsToMe";
import ComplaintsPage from "../../pages/ComplaintsPage";
import axios from "axios";

const Complaints = ({ setActiveComponent }) => {
  const [complaints, setComplaints] = useState([]);
  const location = useLocation();
  const getRoleName = () => {
    const pathname = decodeURIComponent(location.pathname); // Decode the URL
    const role = pathname.split("/")[2];
    return role;
  };
  const role = getRoleName();

  // useEffect(() => {
  //   const fetchComplaints = async () => {
  //     try {
  //       const response = await axios.get("http://localhost:8080/complaints");
  //       setComplaints(response.data);
  //     } catch (error) {
  //       console.error("Error fetching complaints data:", error);
  //     }
  //   };

  //   fetchComplaints();
  // }, []);


  const handleCreateNewComplaint = () => {
    setActiveComponent("NewComplaint");
  };
  return (
    <div className="complaints-body">
      <Header />
      <hr />
      {role === "TeamLeader" && (
        <div>
          <nav>
            <div class="nav nav-tabs" id="nav-tab" role="tablist">
              <button
                class="nav-link active"
                id="nav-home-tab"
                data-bs-toggle="tab"
                data-bs-target="#nav-home"
                type="button"
                role="tab"
                aria-controls="nav-home"
                aria-selected="true"
              >
                My Complaints
              </button>
              <button
                class="nav-link"
                id="nav-profile-tab"
                data-bs-toggle="tab"
                data-bs-target="#nav-profile"
                type="button"
                role="tab"
                aria-controls="nav-profile"
                aria-selected="false"
              >
                Complaints to me
              </button>
            </div>
          </nav>
          <div class="tab-content" id="nav-tabContent">
            <div
              class="tab-pane fade show active"
              id="nav-home"
              role="tabpanel"
              aria-labelledby="nav-home-tab"
              tabindex="0"
            >
              {/* <Complaints /> */}
              {/* <ComplaintsPage /> */}
            </div>
            <div
              class="tab-pane fade"
              id="nav-profile"
              role="tabpanel"
              aria-labelledby="nav-profile-tab"
              tabindex="0"
            >
              <ComplaintsToMe />
            </div>
          </div>
        </div>
      )}
      <div className="contactus-form-button" style={{ width: "97%" }}>
        <button
          className="gradient-blue-btn "
          style={{ color: "white" }}
          onClick={handleCreateNewComplaint}
        >
          <FaPlusCircle className="me-2" />
          Create New Complaint
        </button>
      </div>
      <br />
      <div style={{ display: "flex" }}>
        <select
          className="form-select"
          aria-label="Default select example"
          style={{
            width: "345px",
            border: "2px solid black",
            marginLeft: "3vh",
          }}
        >
          <option selected>Filter By</option>
          <option value="1">Pending</option>
          <option value="2">Approved</option>
        </select>
        <div
          style={{
            display: "flex",
            marginLeft: "28.5rem",
            alignItems: "center",
            position: "relative",
          }}
        >
          <FaSearch className="search-icon" />
          <input
            className="border-inbox"
            type="text"
            placeholder="Search..."
            style={{
              // padding: "8px,8px,8px,29px",
              paddingLeft: "29px",
              paddingRight: "8px",
              paddingBottom: "8px",
              paddingTop: "8px",
              fontSize: "16px",
            }}
          />
          <button
            style={{
              padding: "8px",
              fontSize: "16px",
              background: "var(--Main-color)",
              color: "white",
            }}
          >
            Search
          </button>
        </div>
      </div>
      <div>
        {ComplaintsData.map((Card, index) => (
          <ComplaintsCard
            key={index}
            status={Card.status}
            about={Card.about}
            date={Card.date}
            setActiveComponent={setActiveComponent}
          />
        ))}
      </div>
    </div>
  );
};

export default Complaints;
