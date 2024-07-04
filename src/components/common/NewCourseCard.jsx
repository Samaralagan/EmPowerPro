import React from 'react'
import './NewCourseCard.css'
import { FaStar } from "react-icons/fa6";

const NewCourseCard = ({img,title,level,star,entrolled}) => {
  return (
    <div className='newcoursecard-body'>
         <img src={img} alt="" className='newcoursecard-img'/>
         <p className='newcoursecard-title'>{title}</p>
         <div className='newcoursecard-level'>
            <p>{level}</p>
            <p>{star}<FaStar className='ms-1  mb-1' style={{color:'#FFE143'}}/></p>
         </div>
         <p className='newcoursecard-enrolled'>{entrolled}</p>
    </div>
  )
}

export default NewCourseCard