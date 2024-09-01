import React, { useState,useEffect } from "react";
import { IoMdArrowRoundBack } from "react-icons/io";
import { FaPlusCircle, FaEdit } from "react-icons/fa";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

function EditVacancy({ setActiveComponent }) {
  const [editingField, setEditingField] = useState(null);
  const [job, setJob] = useState({
    jobTitle: "",
    employmentType: "",
    jobDescription: "",
    requirements: "",
    responsibilities:"",
    applicationDeadline:"",
    contactEmail:""
  });

  const {id} = useParams();
  console.log(id);

  const navigate = useNavigate();

  useEffect(() => {
    const loadJob = async () => {
      try {
        const result = await axios.get(`http://localhost:8080/api/hr/vacancy-get-one/${id}`);
        setJob(result.data);
      } catch (error) {
        console.error("Error loading job data:", error);
      }
    };
  
    loadJob();
  }, [id]);



const {jobTitle, employmentType,jobDescription,requirements,responsibilities, applicationDeadline, contactEmail} = job;

const handleInputChange = (e) => {
  setJob({
    ...job,
    [e.target.name]: e.target.name === "applicationDeadline"
      ? new Date(e.target.value).toISOString().split('T')[0]  // Extract date only
      : e.target.value,
  });
};

const handleSubmit = async (e) => {
  e.preventDefault();
  try {
    await axios.put(`http://localhost:8080/api/hr/vacancy-update/${id}`, job);
    navigate("/Jobs/HR");
  } catch (error) {
    console.error("Error updating job data:", error);
  }
};

  const handleBackArrow = () => {
    navigate("/Jobs/HR")
  };

  const handleEditClick = (field) => {
    setEditingField(field);
  };

  return (
    <div className="contentbodyall1">
      <IoMdArrowRoundBack
        onClick={handleBackArrow}
        className="backarrow"
        style={{ marginLeft: "-0.8rem" }}
      />{" "}
      <br />
      <div className="newvacancy-additional-rectangle-1">
        <form onSubmit={handleSubmit} style={{ width: "100%" }}>
          <label htmlFor="jobTitle">Job Title:</label>
          <br />
          {editingField === "jobTitle" ? (
            <input
              type="text"
              name="jobTitle"
              value={jobTitle}
              onChange={(e) => handleInputChange(e)}
              onBlur={() => setEditingField(null)}
            />
          ) : (
            <p>
              {jobTitle} <FaEdit onClick={() => handleEditClick("jobTitle")} />
            </p>
          )}
          <br />

          <label htmlFor="employmentType">Employment Type:</label>
          <br />
          {editingField === "employmentType" ? (
            <select
              name="employmentType"
              value={employmentType}
              onChange={(e) => handleInputChange(e)}
              onBlur={() => setEditingField(null)}
            >
              <option value="Full Time">Full Time</option>
              <option value="Part Time">Part Time</option>
              <option value="Internship">Internship</option>
              <option value="On Demand">On Demand</option>
            </select>
          ) : (
            <p>
              {employmentType}{" "}
              <FaEdit onClick={() => handleEditClick("employmentType")} />
            </p>
          )}
          <br />

          <label htmlFor="jobDescription">Job Description:</label>
          <br />
          {editingField === "jobDescription" ? (
            <textarea
              name="jobDescription"
              value={jobDescription}
              onChange={(e) => handleInputChange(e)}
              onBlur={() => setEditingField(null)}
              rows="4"
            />
          ) : (
            <p>
              {jobDescription}{" "}
              <FaEdit onClick={() => handleEditClick("jobDescription")} />
            </p>
          )}
          <br />

          <label htmlFor="requirements">Requirements:</label>
          <br />
          {editingField === "requirements" ? (
            <textarea
              name="requirments"
              value={requirements}
              onChange={(e) => handleInputChange(e)}
              onBlur={() => setEditingField(null)}
              rows="4"
            />
          ) : (
            <p>
              {requirements}{" "}
              <FaEdit onClick={() => handleEditClick("requirements")} />
            </p>
          )}
          <br />

          <label htmlFor="responsibilities">Responsibilities:</label>
          <br />
          {editingField === "responsibilities" ? (
            <textarea
              name="responsibilities"
              value={responsibilities}
              onChange={(e) => handleInputChange(e)}
              onBlur={() => setEditingField(null)}
              rows="4"
            />
          ) : (
            <p>
              {responsibilities}{" "}
              <FaEdit onClick={() => handleEditClick("responsibilities")} />
            </p>
          )}

          <br />

          <label htmlFor="deadline">Application Deadline:</label>
          <br />
          {editingField === "deadline" ? (
            <input
              name="applicationDeadline"
              type="date"
              value={applicationDeadline.split('T')[0]}
              onChange={(e) => handleInputChange(e)}
              onBlur={() => setEditingField(null)}
            />
          ) : (
            <p>
            {applicationDeadline.split('T')[0]} {" "}<FaEdit onClick={() => handleEditClick("deadline")} />
            </p>
          )}
          <br />

          <label htmlFor="contactEmail">Contact Email:</label>
          <br />
          {editingField === "contactEmail" ? (
            <input
              name="contactEmail"
              type="email"
              value={contactEmail}
              onChange={(e) => handleInputChange(e)}
              onBlur={() => setEditingField(null)}
            />
          ) : (
            <p>
              {contactEmail}{" "}
              <FaEdit onClick={() => handleEditClick("contactEmail")} />
            </p>
          )}
          <br />
          <div
            className="contactus-form-button"
            style={{
              width: "33%",
              marginTop: "0%",
              marginBottom: "1rem",
              marginLeft: "34rem",
              marginRight: "0rem",
            }}
          >
            <button type="submit" className="gradient-blue-btn" style={{ color: "white" }}>
              <FaPlusCircle className="me-2" />
              Publish
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default EditVacancy;
