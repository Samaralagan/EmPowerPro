import React from "react";
import "./Header.css";
import { FaBell } from "react-icons/fa";
import img from "../../assets/images/profile.jpeg";

const Header = () => {
  return (
    
      // <div className='header-body'>
      //   <div className='header-content'>
      //       <h2>Hi , Raguram</h2>
      //       <div className='header-profile'>
      //         <img src={img} alt="" className='profile-pic' />  
      //         <FaBell className='notify-icon'/>
      //       </div>
      //   </div> 
       
    <div className="header">
      <div className="header-body">
        <div className="header-content">
          <h2>Hi , Raguram</h2>
          <div className="header-profile">
            <img src={img} alt="" />
            <FaBell />
          </div>
          <hr />
        </div>
       
      </div>
    
    </div>

    // </div> 
  );
};

export default Header;

