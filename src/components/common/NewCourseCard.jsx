import React from "react";
import "./NewCourseCard.css";
import { FaStar } from "react-icons/fa6";
import { IoEye } from "react-icons/io5";

const NewCourseCard = ({ img, title, level, star, entrolled }) => {
  return (
    <div className="newcoursecard-body">
      <img src={img} alt="" className="newcoursecard-img" />
      <p className="newcoursecard-title">{title}</p>
      <p className="newcoursecard-enrolled">Mr.M.Suppuramani</p>
      <div className="newcoursecard-level mt-1 ">   
      <p> 218 Views</p>
        <p>
          {/* <span className="me-1">Rating</span>  */}
          {star}
          <FaStar className="ms-1  mb-1" style={{ color: "#FFE143" }} />
        </p>
        
      </div>

    </div>
  );
};

export default NewCourseCard;
