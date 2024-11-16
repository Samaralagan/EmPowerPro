import React from "react";
import "./NewCourseCard.css";
import { FaStar } from "react-icons/fa6";
import img from '../../assets/images/newcourse 3.png'
import moment from 'moment';
import { FaUserEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";


const NewCourseCard = ({  title , date ,type }) => {
  function timeAgo(dateString) {
    return moment(dateString).fromNow();
  }
  const handleDeleteBlog =()=>{

  }
  return (
    <div className="newcoursecard-body">
      <img src={img} alt="" className="newcoursecard-img" />
      {type==="My-Blog" && (<div className="newcoursecard-button"> 
        <button style={{borderColor:"green",color:"green"}} ><FaUserEdit /></button>
        <button style={{borderColor:"red", color:"red"}} onClick={{handleDeleteBlog}}><MdDelete /></button>
      </div>)}
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
