import React from 'react'
import SideBar from '../common/SideBar'
import Header from '../layout/Header'
import './Leave.css'

import { FaArrowLeft } from 'react-icons/fa6'
import { useNavigate } from 'react-router-dom'



function ApplyLeaveForm() {

    const navigate = useNavigate();

    const handleLeaveClick = () => {
        navigate('/Leave/Employee');
    }

    return (
        <div>

            <SideBar />

            <Header />

            <div className="apply-leave-body">

                <div className="form-container">
                    <div className="form-arrow"  onClick={handleLeaveClick}>

                        <FaArrowLeft className="arrow-icon" />

                    </div>
                    <div className="form-box">
                        <div className="main-topic-text">Apply a Leave</div>

                        <div className="form-details">
                            <div className="one-detail">
                                <div className="form-detail-topic">Leave Type</div>

                                <select className="leave-dropdown" defaultValue="">
                                    <option value="" disabled></option>
                                    <option value="option1">Casual Leave</option>
                                    <option value="option2">Medical Leave</option>
                                    <option value="option3">Maternity Leave</option>
                                </select>
                            </div>

                            <div className="date-details">
                                <div className="one-detail">

                                    <label htmlFor="start-date" className="form-detail-topic">Start Date</label>
                                    <br />
                                    <input type="date" id="start-date" className="leave-input" />
                                </div>

                                <div className="one-detail">

                                    <label htmlFor="start-date" className="form-detail-topic">End Date</label>
                                    <br />
                                    <input type="date" id="end-date" className="leave-input" />

                                </div>

                            </div>

                            <div className="one-detail">

                                <label htmlFor="reason" className="form-detail-topic">Reason</label>
                                <br />
                                <textarea type="date" id="start-date" className="leave-input-textarea"/>
                              
                            </div>

                            <button className="apply-button">Apply</button>

                        </div>
                    </div>
                </div>



            </div>

        </div>
    )
}

export default ApplyLeaveForm
