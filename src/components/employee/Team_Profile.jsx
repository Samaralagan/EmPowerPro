import React from "react";
import "./Team_Profile.css";
import Header from "../layout/Header";
import ProfileCard from "./ProfileCard";
import { ProfileData } from "../constants/temporary";
import SideBar from "../common/SideBar";
import { useLocation, useNavigate } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa6";
import { GoDotFill } from "react-icons/go";

import profile1 from "../../assets/images/profile1.png";
import profile2 from "../../assets/images/profile2.png";
import profile3 from "../../assets/images/profile3.png";
import profile4 from "../../assets/images/profile4.png";
import profile5 from "../../assets/images/profile5.png";

function Team_Profile({ setActiveComponent }) {
  const navigate = useNavigate();
  const location = useLocation();
  var role = "";
  const getActivePageName = () => {
    const pathname = decodeURIComponent(location.pathname); // Decode the URL
    role = pathname.split("/")[2];
    return role;
  };
  const activePageName = getActivePageName();

  const handleReportBack = () => {
    // setActiveComponent("EX_Employees");
    if (role === "HR") {
      navigate("/Employees/HR/Teams");
    }
    if (role === "Executive") {
      navigate("/Employee/Executive/Teams");
    }
  };

  const teamMembers = [
    { name: "Olivia Rajan", image: profile1, role: "Team Lead" },
    { name: "Can Samuel", image: profile3, role: "" },
    { name: "Belly James", image: profile4, role: "" },
    { name: "Kate Wilsan", image: profile5, role: "" },
  ];

  return (
    <div>
      <SideBar />
      <Header />
      <div className="team-profile-body">
        <div className="form-arrow-team" onClick={handleReportBack}>
          <FaArrowLeft className="arrow_icon-teamdetail" />
        </div>

        <div className="team-details-body">
          <div className="team-name-bar">
            <div className="bar-title">Code Crusaders</div>
            <div className="onprogress">
              <GoDotFill />
              On Progress
            </div>
          </div>

          <div className="project-describe">
            <div className="project-describe-1"> Project Description :</div>
            <div className="project-describe-2">
              Developing a robust network security solution to protect against
              cyber threats.
            </div>
          </div>

          <div className="team-members">
            {teamMembers.map((member, index) => (
              <div className="team-member" key={index}>
                <img
                  src={member.image}
                  alt={member.name}
                  className="team-member-image"
                />
                <div className="team-member-info">
                  <div className="team-member-name">{member.name}</div>

                  <div className="team-member-profile-link">View Profile</div>
                  {member.role && (
                    <div className="team-member-role">{member.role}</div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Team_Profile;
