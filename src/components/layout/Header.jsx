import React, { useState } from "react";
import "./Header.css";
import { FaBell } from "react-icons/fa";
import img from "../../assets/images/About_img1.jpg";
import { IoPerson } from "react-icons/io5";
import { IoMdLogOut } from "react-icons/io";
import { useLocation, useNavigate } from "react-router-dom";

const Header = () => {
  const [openDropDown, setOpenDropDown] = useState("header-dropdown1");
  const [notification, setNotification] = useState("header-notification1");
  const navigate = useNavigate();
  const location = useLocation();

  const handleEnterDropDown = () => {
    setOpenDropDown("header-dropdown");
    setNotification("header-notification1");
  };
  const handleLeaveDropDown = () => {
    setOpenDropDown("header-dropdown1");
    setNotification("header-notification1");
  };
  const handleEnterNotification = () => {
    setNotification("header-notification");
    setOpenDropDown("header-dropdown1");
  };

  const handlePage = (PageName) => {
    navigate(`/${PageName}`);
  };
  var role = "";
  const getActivePageName = () => {
    const pathname = decodeURIComponent(location.pathname); // Decode the URL
    role = pathname.split("/")[2];
    return role;
  };
  const activePageName = getActivePageName();

  return (
    <div className="header-body" onMouseLeave={handleLeaveDropDown}>
      <div className="header-content">
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            textAlign: "center",
          }}
        >
          <h2>{role}</h2>
          {/* <span style={{ fontSize: "2.3vh", color: " var(--Light)" }}>
            {" "}
            {" "}
          </span> */}
        </div>
        <div className="header-profile">
          <img
            src={img}
            alt=""
            className="profile-pic"
            onMouseEnter={handleEnterDropDown}
          />
          <FaBell
            className="notify-icon"
            onMouseEnter={handleEnterNotification}
          />
          <div className={openDropDown}>
            <div
              className="header-dropdown-profile"
              onClick={() => handlePage(`Dash Board/${role}/Profile`)}
            >
              <IoPerson className="me-1" />
              Profile
            </div>
            <div
              className="header-dropdown-logout"
              onClick={() => handlePage(`Login`)}
            >
              <IoMdLogOut className="me-1" />
              Logout
            </div>
          </div>
          <div className={notification}>
            <center>
              <h2 className="mt-3">Notification</h2>
            </center>
            <hr />
            <br />
            <br />
            <center>
              <p style={{ color: "#D9D9D9" }}>Empty</p>
            </center>
          </div>
        </div>

        <hr className="header-hr" />
      </div>
    </div>

    // </div>
  );
};

export default Header;
