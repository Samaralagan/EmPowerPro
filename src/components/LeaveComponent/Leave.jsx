import React from 'react'
import './Leave.css'
import Header from '../layout/Header'
import { FaCalendarCheck } from 'react-icons/fa6'
import { FaCalendarTimes } from 'react-icons/fa'
import { FaClock } from 'react-icons/fa6'
import { FaBookmark } from 'react-icons/fa6'
function Leave() {
    return (
        <div className='leave-body'>
            <Header />
            <hr className='header-hr' />

            <div className="rectangles-container">
                <div className='rectangle rectangle-2'>
                    <div className='small-square'>
                        <FaBookmark className='icon' />
                    </div>

                    <div className='box-content'>
                        <div className='main-box-content'> 25 </div>
                        <div className='sub-box-content-1'> Available Leaves </div>
                    </div>
                </div>

                <div className='rectangle rectangle-3'>
                    <div className='small-square'>
                        <FaCalendarCheck  className='icon' />
                    </div>
                    <div className='box-content'>
                        <div className='main-box-content'>10 </div>
                        <div className='sub-box-content-2'> Approved Leaves </div>
                    </div>
                </div>

                <div className='rectangle rectangle-4'>
                    <div className='small-square'>
                        <FaCalendarTimes className='icon' />
                    </div>
                    <div className='box-content'>
                        <div className='main-box-content'> 5 </div>
                        <div className='sub-box-content'> Rejected Leaves  </div>
                    </div>

                </div>

                <div className='rectangle rectangle-4'>
                    <div className='small-square'>
                        <FaClock className='icon' />
                    </div>
                    <div className='box-content'>
                        <div className='main-box-content'> 02 : 00  </div>
                        <div className='sub-box-content'> Over Time  </div>
                    </div>

                </div>

            </div>
        </div>
    )
}

export default Leave
