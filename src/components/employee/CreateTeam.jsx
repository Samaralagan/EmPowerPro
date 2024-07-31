import React, { useState } from "react";
import SideBar from "../common/SideBar";
import Header from "../layout/Header";
import "./CreateTeam.css";
import { FaArrowLeft } from "react-icons/fa6";
import { FaPlusCircle } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { FaSearch } from "react-icons/fa";
import SelectEmployees from "./SelectEmployees";
import { EmployeeTableData } from "../constants/temporary";

function CreateTeam({ setActiveComponent }) {
  const [isPopupVisible, setIsPopupVisible] = useState(false);
  const navigate = useNavigate();

  const handleTeams = () => {
    // navigate('/Teams');
    setActiveComponent("Teams");
  };

  const handleAddTeamMember = () => {
    setIsPopupVisible(true);
  };

  const handleClosePopup = () => {
    setIsPopupVisible(false);
  };

  return (
    <div>
      <SideBar />
      <Header />

      <div className="create-team-body">
        <div className="create-team-body-2">
          <div className="form-arrow-topic">
            <div className="create-team-form-arrow" onClick={handleTeams}>
              <FaArrowLeft className="create-team-arrow_icon" />
            </div>
            <div className="create-team-topic">CREATE A NEW TEAM</div>
          </div>

          <div className="create-team-form-box">
            <div className="create-team-form-detail">
              <label
                htmlFor="team-name"
                className="create-team-form-detail-topic"
              >
                Team Name:
              </label>
              <input id="team-name" className="create-team-form-input" />
            </div>

            <div className="create-team-form-detail">
              <label
                htmlFor="project-description"
                className="create-team-form-detail-topic"
              >
                Project Description:
              </label>
              <input
                id="project-description"
                className="create-team-form-input-1"
              />
            </div>

            <div className="create-team-form-detail">
              <label
                htmlFor="contributors"
                className="create-team-form-detail-topic"
              >
                No. of Contributors:
              </label>
              <input id="contributors" className="create-team-form-input" />
            </div>

            <div className="create-team-form-detail">
              <label
                htmlFor="team-members"
                className="create-team-form-detail-topic"
              >
                Team Members:
              </label>
              <div
                className="create-team-apply-claim"
                onClick={handleAddTeamMember}
              >
                <div className="create-team-add-icon-circle">
                  <FaPlusCircle className="create-team-add-icon" />
                </div>
                <div className="create-team-new-button-content">
                  <div className="create-team-new-content">Add Team Member</div>
                </div>
              </div>
            </div>

            <div className="create-team-form-detail">
              <label
                htmlFor="team-leader"
                className="create-team-form-detail-topic"
              >
                Team Leader:
              </label>
              <input id="team-leader" className="create-team-form-input" />
            </div>

            <div className="create-team-form-button-row" onClick={handleTeams}>
              <button className="create-team-next-button">Create Team</button>
            </div>
          </div>
        </div>
      </div>

      {isPopupVisible && (
        <div className="popup-overlay">
          <div className="popup">
            <h2>ADD NEW TEAM MEMBER</h2>

            <div className="add-team-search-bar">
              {/* <FaSearch className="add-team-search-icon" /> */}
              <input
                type="text"
                placeholder="Search by Name or Role"
                className="add-team-search-input"
              />
              <button className="add-team-search-button">Search</button>
            </div>

            <div className="recent">Recently Searched :</div>

            {EmployeeTableData.map((Card, index) => (
              <SelectEmployees
                key={index}
                image={Card.image}
                name={Card.name}
                status={Card.status}
                email={Card.email}
                team={Card.team}
                setActiveComponent={setActiveComponent}
              />
            ))}
            <div className="popup-buttons">
              <button onClick={handleClosePopup}>CANCEL</button>
              <button onClick={handleClosePopup}>ADD</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default CreateTeam;
