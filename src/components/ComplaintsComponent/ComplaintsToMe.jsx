import React, { useState, useEffect } from "react";
import "./complaintstome.css";
import { FaSearch } from "react-icons/fa";
import ComplaintsReply from "./ComplaintsReply";
import axios from "axios";

const ComplaintsToMe = ({ setActiveComponent }) => {
  const [complaints, setComplaints] = useState([]);
  const [filteredComplaints, setFilteredComplaints] = useState([]);
  const [filter, setFilter] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const fetchComplaints = async () => {
      try {
        const response = await axios.get(
          "http://localhost:8080/api/v1/hr/assigned-to-hr"
        );
        setComplaints(response.data);
        setFilteredComplaints(response.data);
      } catch (error) {
        console.error("Error fetching complaint data:", error);
      }
    };

    fetchComplaints();
  }, []);

  useEffect(() => {
    const applyFilters = () => {
      let updatedComplaints = complaints;

      if (filter !== "All") {
        updatedComplaints = updatedComplaints.filter(
          (complaint) => complaint.status === filter.toUpperCase()
        );
      }

      if (searchTerm.trim() !== "") {
        updatedComplaints = updatedComplaints.filter((complaint) =>
          complaint.about.toLowerCase().includes(searchTerm.toLowerCase())
        );
      }

      setFilteredComplaints(updatedComplaints);
    };

    applyFilters();
  }, [filter, searchTerm, complaints]);

  const handleFilterChange = (e) => {
    setFilter(e.target.value);
  };

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <div className="complaintstome-body">
      <div style={{ display: "flex", marginTop: "1.5rem" }}>
        <select
          className="form-select"
          aria-label="Filter Complaints"
          style={{
            width: "345px",
            border: "2px solid black",
            marginLeft: "3vh",
          }}
          value={filter}
          onChange={handleFilterChange}
        >
          <option value="All">All</option>
          <option value="Pending">Pending</option>
          <option value="Replied">Replied</option>
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
            placeholder="Search by about..."
            value={searchTerm}
            onChange={handleSearchChange}
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
            onClick={() => {}}
          >
            Search
          </button>
        </div>
      </div>

      {filteredComplaints.map((complaint, index) => (
        <ComplaintsReply
          key={index}
          complaintId={complaint.id}
          status={complaint.status}
          about={complaint.about}
          image={complaint.image}
          date={`${new Date(complaint.date).toLocaleDateString()} ${new Date(
            complaint.date
          ).toLocaleTimeString()}`}
          setActiveComponent={setActiveComponent}
        />
      ))}
    </div>
  );
};

export default ComplaintsToMe;
