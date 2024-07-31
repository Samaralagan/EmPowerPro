import React from "react";
import "./profilecard.css";
import { FaStar } from "react-icons/fa6";
import { FaPhone } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { FaLinkedinIn } from "react-icons/fa6";
import { FaPencilAlt } from "react-icons/fa";
import { FaCube } from "react-icons/fa6";
import { FaBookOpen } from "react-icons/fa";
import { IoMdArrowRoundBack } from "react-icons/io";

import LineChart from "./LineChart";
import {  useLocation, useNavigate } from "react-router-dom";

const ProfileCard = ({
  image,
  name,
  email,
  team,
  dob,
  age,
  linkedin,
  summary,
  skill1,
  skill2,
  address,
  phone,
  setActiveComponent,
}) => {

  const navigate = useNavigate();
  const location = useLocation(); 

  // const handleProfile = () => {
  //   if (sidebar=== 'Team members') {
  //     if (setActiveComponent) {
  //       setActiveComponent("Employee");
  //     }
  //   }else{
  //     handlePage(`Dash Board/${role}`)
  //   }
   
  // };

  const handleProfile  = () => {
    // setActiveComponent("EX_Employees");
    if(role === 'HR'){
      navigate('/Employees/HR');
    }
    if(role === 'Executive'){
      navigate('/Team members/Executive');
    }
    
  };

  const handlePage = (PageName) => {
    navigate(`/${PageName}`);
  };


  var sidebar=''
  var role=''
  const getActivePageName = () => {
    const pathname = decodeURIComponent(location.pathname); // Decode the URL
     sidebar = pathname.split('/')[1];
     role = pathname.split('/')[2];
    return sidebar;
  };const activePageName = getActivePageName();

  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <IoMdArrowRoundBack
        className="backarrow"
        onClick={handleProfile}
        style={{ marginLeft: "0%", marginBottom: "1%" }}
      />
      <div style={{ display: "flex", flexDirection: "row" }}>
        <div
          style={{
            width: "60%",
            background:
              "linear-gradient(to bottom, rgba(134, 211, 236, 1) 0%, rgba(85, 183, 214, 1) 39%, rgba(30, 152, 190, 1) 100%)",
            display: "flex",
            flexDirection: "row",
            borderRadius: "10px",
          }}
        >
          <div className="div1" style={{ paddingTop: "40px" }}>
            <img src={image} alt="" className="img_prof" />
          </div>

          <div className="div1">
            <div>
              <h2 className="employee-name">{name}</h2>
            </div>
            <div className="employee-teamname">
              {team}
              <FaStar />
              <FaStar />
              <FaStar />
            </div>
            <br />
            <div className="employee-details">{address}</div>

            <div className="employee-details">
              <MdEmail />
              {email}
            </div>
            <div className="employee-details">
              <FaLinkedinIn />
              {linkedin}
            </div>
          </div>

          <div className="div-part">
            <div className="employee-details">
              <FaPhone />
              {phone}
            </div>

            <div className="employee-details">
              {dob}({age}yrs)
            </div>
          </div>
        </div>
        <div
          style={{
            width: "40%",
            background:
              "linear-gradient(to bottom, rgba(134, 211, 236, 1) 0%, rgba(85, 183, 214, 1) 39%, rgba(30, 152, 190, 1) 100%)",
            marginLeft: "5%",
            borderRadius: "10px",
            padding: "10px",
          }}
        >
          <LineChart />
        </div>
      </div>
      <div>
        <br />
        <div style={{ display: "flex", flexDirection: "row", width: "100%" }}>
          <div
            style={{ width: "49%", display: "flex", flexDirection: "column" }}
          >
            {" "}
            <div className="tablediv1">
              <FaPencilAlt style={{ color: "#2FC6E7" }} />
              <b style={{ color: "#2FC6E7" }} className="ability">
                Summary
              </b>
              <br />
              <div className="description">{summary}</div>
            </div>
            <br />
            <div className="tablediv1">
              <FaCube style={{ color: "#2FC6E7" }} />
              <b style={{ color: "#2FC6E7" }} className="ability">
                Skills
              </b>
              <br />
              <ul className="description">
                <li>{skill1}</li>
                <li>{skill2}</li>
              </ul>
            </div>
          </div>
          <div
            className="tablediv1"
            style={{ width: "49% ", marginLeft: "2%" }}
          >
            <FaBookOpen style={{ color: "#2FC6E7" }} />
            <b style={{ color: "#2FC6E7" }} className="ability">
              Experiences
            </b>
            <br />
            <h5 className="experience-title">
              UI/UX Designer at Creative Solutions Ltd. ( 2020 – Present )
            </h5>
            <br />
            <ul className="description">
              <li>
                Redesign Project Lead: Led the comprehensive redesign of the
                company's flagship product, resulting in a 25% increase in user
                engagement and a 30% decrease in user drop-off rates.
              </li>
              <li>
                Mobile App Design: Designed an intuitive mobile application for
                [specific project], enhancing user experience and receiving
                positive feedback from users.
              </li>
            </ul>
            <br />
            <h5 className="experience-title">
              Junior UI/UX Designer at Pixel Perfect Designs ( 2018 - 2020 )
            </h5>
            <br />
            <ul className="description">
              <li>
                Website Redesign: Assisted in the redesign of the company’s
                corporate website, focusing on improving navigation and user
                experience.
              </li>
              <li>
                User Research and Personas: Conducted user research to develop
                detailed user personas and scenarios that guided design
                decisions.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
