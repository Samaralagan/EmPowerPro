import React, { useState } from "react";
import "./newvacancy.css";
import { IoMdArrowRoundBack } from "react-icons/io";
import { FaPlusCircle } from "react-icons/fa";

function NewVacancy({ setActiveComponent }) {
  const [responsibilities, setResponsibilities] = useState([""]);
  const [requirements, setRequirements] = useState([""]);

  const handleBackArrow = () => {
    setActiveComponent("Job");
  };

  const handleAddResponsibility = () => {
    setResponsibilities([...responsibilities, ""]);
  };

  const handleResponsibilityChange = (index, value) => {
    const newResponsibilities = [...responsibilities];
    newResponsibilities[index] = value;
    setResponsibilities(newResponsibilities);
  };

  const handleAddRequirement = () => {
    setRequirements([...requirements, ""]);
  };

  const handleRequirementChange = (index, value) => {
    const newRequirements = [...requirements];
    newRequirements[index] = value;
    setRequirements(newRequirements);
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
          <label htmlFor="">Job Title:</label>
          <br />
          <input type="text" className="inputnewvacancy" />
          <br />
          <br />
          <label htmlFor="">Employeement Type:</label>
          <br />
          <div style={{ display: "flex", flexDirection: "row", gap: "1rem" }}>
            <div className="newvacancy-additional-rectangle-3">
              <div className="newvacancy-additional-rectangle-2">
                <input type="checkbox" name="" id="" /> Full Time
              </div>
              <div className="newvacancy-additional-rectangle-2">
                <input type="checkbox" name="" id="" /> Part Time
              </div>
            </div>
            <div className="newvacancy-additional-rectangle-3">
              <div className="newvacancy-additional-rectangle-2">
                <input type="checkbox" name="" id="" /> Internship
              </div>
              <div className="newvacancy-additional-rectangle-2">
                <input type="checkbox" name="" id="" /> On Demand
              </div>
            </div>
          </div>
          <br />
          <label htmlFor="">Job Description</label>
          <br />
          <textarea
            name=""
            id=""
            className="inputtext"
            style={{ height: "5rem", width: "50%" }}
          ></textarea>
          <br />
          <label htmlFor="">Requirements:</label>
          {requirements.map((requirement, index) => (
            <div key={index} style={{ display: "flex", flexDirection: "row" }}>
              <div style={{ width: "100%" }}>
                <input
                  type="text"
                  className="inputnewvacancy"
                  value={requirement}
                  onChange={(e) =>
                    handleRequirementChange(index, e.target.value)
                  }
                />
              </div>
            </div>
          ))}
          <div
            style={{ alignItems: "center", display: "flex", cursor: "pointer" }}
            onClick={handleAddRequirement}
          >
            <FaPlusCircle className="me-2" /> Add another
          </div>
          <br />
          <label htmlFor="">Responsibilities:</label>
          {responsibilities.map((responsibility, index) => (
            <div key={index} style={{ display: "flex", flexDirection: "row" }}>
              <div style={{ width: "100%" }}>
                <input
                  type="text"
                  className="inputnewvacancy"
                  value={responsibility}
                  onChange={(e) =>
                    handleResponsibilityChange(index, e.target.value)
                  }
                />
              </div>
            </div>
          ))}
          <div
            style={{ alignItems: "center", display: "flex", cursor: "pointer" }}
            onClick={handleAddResponsibility}
          >
            <FaPlusCircle className="me-2" /> Add another
          </div>
          <br />
          <label htmlFor="">Application Deadline:</label>
          <br />
          <input type="date" className="inputnewvacancy" />
          <br />
          <br />
          <label htmlFor="">Contact Email:</label>
          <br />
          <input type="text" className="inputnewvacancy" />
          <br />
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

export default NewVacancy;
