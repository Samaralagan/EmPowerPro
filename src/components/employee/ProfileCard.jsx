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
  const handleProfile = () => {
    if (setActiveComponent) {
      setActiveComponent("Employee");
    }
  };
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
            width: "55%",
            background:
              "linear-gradient(to bottom, rgba(134, 211, 236, 1) 0%, rgba(85, 183, 214, 1) 39%, rgba(30, 152, 190, 1) 100%)",
            display: "flex",
            flexDirection: "row",
            borderRadius: "20px",
          }}
        >
          <div className="div1" style={{ paddingTop: "40px" }}>
            <img src={image} alt="" className="img_prof" />
          </div>
          <div className="div1">
            <div>
              <h2>{name}</h2>
            </div>
            <div>
              {team}
              <FaStar />
              <FaStar />
              <FaStar />
            </div>
            <br />
            <div>{address}</div>
            <div>
              {dob}({age}yrs)
            </div>
          </div>
          <div className="div1" style={{ justifyContent: "center" }}>
            <div className="div2">
              <FaPhone />
              {phone}
            </div>
            <div className="div2">
              <MdEmail />
              {email}
            </div>
            <div className="div2">
              <FaLinkedinIn />
              {linkedin}
            </div>
          </div>
        </div>
        <div
          style={{
            width: "40%",
            background:
              "linear-gradient(to bottom, rgba(134, 211, 236, 1) 0%, rgba(85, 183, 214, 1) 39%, rgba(30, 152, 190, 1) 100%)",
            marginLeft: "5%",
            borderRadius: "20px",
            padding: "10px",
          }}
        >
          Here graph will come
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
              <b style={{ color: "#2FC6E7" }}>Summary</b>
              <br />
              {summary}
            </div>
            <br />
            <div className="tablediv1">
              <FaCube style={{ color: "#2FC6E7" }} />
              <b style={{ color: "#2FC6E7" }}>Skills</b>
              <br />
              <ul style={{}}>
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
            <b style={{ color: "#2FC6E7" }}>Experiences</b>
            <br />
            <h5>
              UI/UX Designer at Creative Solutions Ltd. ( 2020 – Present )
            </h5>
            <br />
            <ul>
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
            <h5>
              Junior UI/UX Designer at Pixel Perfect Designs ( 2018 - 2020 )
            </h5>
            <br />
            <ul>
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
