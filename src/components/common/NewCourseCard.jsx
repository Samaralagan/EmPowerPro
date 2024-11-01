import React from "react";
import "./NewCourseCard.css";
import { FaStar } from "react-icons/fa6";
import { IoEye } from "react-icons/io5";
import img from '../../assets/images/newcourse 3.png'
import moment from 'moment';

const NewCourseCard = ({  title , date }) => {
  function timeAgo(dateString) {
    return moment(dateString).fromNow();
  }
  return (
    <div className="newcoursecard-body">
      <img src={img} alt="" className="newcoursecard-img" />
      <div style={{display:'flex',justifyContent:'space-between'}}>  
         <p className="newcoursecard-title">{title}</p>
           {/* {star} */}
           <p className="newcoursecard-title"><FaStar  style={{ color: "#FFE143" }} /></p>
      </div> 
      <p className="newcoursecard-enrolled">Mr.M.Suppuramani</p>
      <div className="newcoursecard-level mt-1 ">   
     
        <p>
          {/* <span className="me-1">Rating</span>  */}
          <p >{timeAgo(date)}</p>
        </p>
        <p> 218 Views</p>
      </div>

    </div>
  );
};

export default NewCourseCard;
