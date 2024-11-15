import { React, useState, useEffect } from "react";
import "./complaintstome.css";
import { FaSearch } from "react-icons/fa";
import ComplaintsReply from "./ComplaintsReply";
import axios from "axios";

const ComplaintsToMe = ({ setActiveComponent }) => {
  const [complaints, setComplaints] = useState([]);
  useEffect(() => {
    const fetchComplaints = async () => {
      try {
        const response = await axios.get(
          "http://localhost:8080/api/v1/hr/assigned-to-hr"
        );
        setComplaints(response.data);
      } catch (error) {
        console.error("Error fetching complaint data:", error);
      }
    };

    fetchComplaints();
  }, []);
  return (
    <div className="complaintstome-body">
      <div style={{ display: "flex", marginTop: "1.5rem" }}>
        <select
          className="form-select"
          aria-label="Default select example"
          style={{
            width: "345px",
            border: "2px solid black",
            marginLeft: "3vh",
          }}
        >
          <option defaultValue>Filter By</option>
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
              paddingLeft: "29px",
              paddingRight: "8px",
              paddingBottom: "8px",
              paddingTop: "8px",
              fontSize: "16px",
            }}
          />
          <button
            style={{
              padding: "9.8px",
              fontSize: "16px",
              background: "var(--Main-color)",
              color: "white",
            }}
          >
            Search
          </button>
        </div>
      </div>
      {complaints.map((complaint, index) => (
        <ComplaintsReply
          key={index}
          status={complaint.status}
          about={complaint.about}
          image={complaint.image}
          date={new Date(complaint.date).toLocaleDateString()}
          setActiveComponent={setActiveComponent}
        />
      ))}
    </div>
  );
};

export default ComplaintsToMe;
