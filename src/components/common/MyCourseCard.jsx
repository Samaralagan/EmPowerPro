import React from "react";
import "./MyCourseCard.css";
// import ProgressBar from "./ProgressBar";
// import React from "react";
// import "./MyCourseCard.css";
// import ProgressBar from "./ProgressBar";
// import { FaStar } from "react-icons/fa6";
// import { FaArrowRight } from "react-icons/fa";

const MyCourseCard = ({ img, title, started, level, star, Progress }) => {
  return (
    <div></div>
    // <div className="mycoursecard-body">
    //   <div className="mycoursecard-img">
    //     <img src={img} alt="" />
    //   </div>
    //   <div className="mycoursecard-content">
    //     <div className="mycoursecard-header">
    //       <h5>{title}</h5>
    //       <p>{started}</p>
    //     </div>
    //     <p className="mycoursecard-header">{level}</p>
    //     <p className="mycoursecard-header">
    //       {star}
    //       <FaStar className="ms-1  mb-1" style={{ color: "#FFE143" }} />
    //     </p>
    //     <div>
    //       <div className="mycoursecard-header">
    //         <ProgressBar bgcolor="#44D2FF" progress={Progress} height={30} />
    //       </div>
    //     </div>
    //   </div>
    //   </div>
    /* <div className="mycoursecard-body">
      <div className="mycoursecard-img">
        <img src={img} alt="" />
      </div>
      <div className="mycoursecard-content">
        <div className="mycoursecard-header">
          <h5>{title}</h5>
          <p>{started}</p>
        </div>
        <div className='mycoursecard-content'>
            <div className='mycoursecard-header'>
                <h5>{title}</h5>
                <p>{started}</p>
            </div>
            <p className='mycoursecard-level'>{level}</p>
            <p className='mycoursecard-star'>{star}<FaStar className='ms-1  mb-1' style={{color:'#FFE143'}}/></p>
            <div className='mycoursecard-process'>
                <div className='mycoursecard-progress'>
                   <ProgressBar
                        color="#44D2FF"
                        progress={Progress} 
                        height={16}
                        bgcolor='#000F44'
                   />
                </div>
                <div className='mycoursecard-btn'>
                      <span>Go To Course <FaArrowRight className='ms-1'/></span>
                </div> 
            </div>
        </div>
      </div>
    </div> */
  );
};



export default MyCourseCard;
