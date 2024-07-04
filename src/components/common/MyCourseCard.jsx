import React from 'react'
import './MyCourseCard.css'
import ProgressBar from './ProgressBar'
import { FaStar } from "react-icons/fa6";

const MyCourseCard = ({img,title,started,level,star,Progress}) => {
  return (
    <div className='mycoursecard-body'>
        <div className='mycoursecard-img'>
            <img src={img} alt=""  />
        </div>
        <div className='mycoursecard-content'>
            <div className='mycoursecard-header'>
                <h5>{title}</h5>
                <p>{started}</p>
            </div>
            <p className='mycoursecard-header'>{level}</p>
            <p className='mycoursecard-header'>{star}<FaStar className='ms-1  mb-1' style={{color:'#FFE143'}}/></p>
            <div>
                <div className='mycoursecard-header'>
                   <ProgressBar
                        bgcolor="#44D2FF"
                        progress={Progress}
                        height={30}
                   />
                </div>
            </div>
        </div>
    </div>
  )
}

export default MyCourseCard