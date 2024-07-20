import React from 'react'
import './OnTimeTrainingCard.css'
import { FaCalendar,FaClock,FaLink } from "react-icons/fa";

const OnTimeTrainingCard = ({title,date,time,link}) => {
  return (
    <div className='ontimetrainingcard-body'>
        <h5>{title}</h5>
        <p><FaCalendar/>{date}</p>
        <p><FaClock/>{time}</p>
        <p><FaLink/>{link}</p>
    </div>
  )
}

export default OnTimeTrainingCard