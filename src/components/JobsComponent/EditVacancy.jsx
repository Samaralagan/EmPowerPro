import React, { useState } from "react";
import { IoMdArrowRoundBack } from "react-icons/io";
import { FaPlusCircle, FaEdit } from "react-icons/fa";

function EditVacancy({ setActiveComponent }) {
  const [responsibilities, setResponsibilities] = useState([""]);
  const [requirements, setRequirements] = useState([""]);
  const [editingField, setEditingField] = useState(null);
  const [employmentType, setEmploymentType] = useState("Full Time");
  const [jobTitle, setJobTitle] = useState("Creative & Art");
  const [jobDescription, setJobDescription] = useState(
    "We are seeking a Front-End Development Intern with a focus on React to join our team for a six-month paid internship. This role offers a chance to work on real-world projects and develop your front-end skills."
  );
  const [contactEmail, setContactEmail] = useState("sample@gmail.com");
  const [deadline, setDeadline] = useState("09/05/2024");

  const handleBackArrow = () => {
    setActiveComponent("Job");
  };

  const handleEditClick = (field) => {
    setEditingField(field);
  };

  const handleEmploymentTypeChange = (e) => {
    setEmploymentType(e.target.value);
  };

  const handleDeadlineChange = (e) => {
    setDeadline(e.target.value);
  };

  const handleJobTitleChange = (e) => {
    setJobTitle(e.target.value);
  };

  const handleJobDescriptionChange = (e) => {
    setJobDescription(e.target.value);
  };

  const handleContactEmailChange = (e) => {
    setContactEmail(e.target.value);
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
        <form action="" style={{ width: "100%" }}>
          <label htmlFor="jobTitle">Job Title:</label>
          <br />
          {editingField === "jobTitle" ? (
            <input
              type="text"
              value={jobTitle}
              onChange={handleJobTitleChange}
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
              value={employmentType}
              onChange={handleEmploymentTypeChange}
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
              value={jobDescription}
              onChange={handleJobDescriptionChange}
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
          {requirements.map((requirement, index) => (
            <div key={index} style={{ display: "flex", flexDirection: "row" }}>
              <div style={{ width: "100%" }}>
                <p>
                  Proficiency in HTML, CSS, & JavaScript <FaEdit />
                </p>
              </div>
            </div>
          ))}
          <br />

          <label htmlFor="responsibilities">Responsibilities:</label>
          <br />
          <p>
            Assist in developing and maintaining web applications using React.
            Implement responsive designs using HTML, CSS, and JavaScript.
            Collaborate with designers to create user-friendly interfaces.{" "}
            <FaEdit />
          </p>
          <br />

          <label htmlFor="deadline">Application Deadline:</label>
          <br />
          {editingField === "deadline" ? (
            <input
              type="date"
              value={deadline}
              onChange={handleDeadlineChange}
              onBlur={() => setEditingField(null)}
            />
          ) : (
            <p>
              {deadline} <FaEdit onClick={() => handleEditClick("deadline")} />
            </p>
          )}
          <br />

          <label htmlFor="contactEmail">Contact Email:</label>
          <br />
          {editingField === "contactEmail" ? (
            <input
              type="email"
              value={contactEmail}
              onChange={handleContactEmailChange}
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
            <button className="gradient-blue-btn" style={{ color: "white" }}>
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
