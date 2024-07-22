import React, { useState } from 'react';
import SideBar from '../common/SideBar';
import Header from '../layout/Header';
import './Beneficiary.css';
import { FaArrowLeft } from 'react-icons/fa6';
import { useNavigate } from 'react-router-dom';
import { TiTick } from 'react-icons/ti';
import { Switch, makeStyles } from '@material-ui/core';



function ApplyClaim_1() {


    const navigate = useNavigate();

    const handleClaimClick = () => {
        navigate('/Beneficiary');
    };





    return (
        <div>
            <SideBar />
            <Header />

            <div className="applied-claim-body">

                <div className="applied-claim-body-2">



                    <div className="form-arrow" onClick={handleClaimClick}>
                        <FaArrowLeft className="arrow_icon" />
                    </div>



                    <div className="form-box">

                        <div className="event-form-heading">Request New Event</div>

                        <div className="form-detail">
                            <label htmlFor="amount" className="form-detail-topic">Event Name</label>
                            <br />
                            <input id="event-name" className="form-input" />
                        </div>

                        <div className="form-detail">
                            <label htmlFor="reason" className="form-detail-topic">Reason</label>
                            <br />
                            <textarea id="reason" className="claim-input-textarea" />
                        </div>

                        <div className="form-detail">
                            <label htmlFor="amount" className="form-detail-topic">Location</label>
                            <br />
                            <input id="event-location" className="form-input" />
                        </div>

                        <div className="one-row-detail">
                            <div className="form-detail">
                                <label htmlFor="start-date" className="form-detail-topic">Date</label>
                                <br />
                                <input type="date" id="start-date" className="form-input-date" />
                            </div>

                            <div className="form-detail">
                                <label htmlFor="event-time" className="form-detail-topic">Time</label>
                                <br />
                                <input id="event-time" type="time" className="form-input-time" />
                            </div>
                        </div>


                        <div className="one-row-detail">
                        <div className="form-detail">
                            <label htmlFor="amount" className="form-detail-topic">Estimated Cost</label>
                            <br />
                            <input id="event-cost" className="form-input" />
                        </div>

                        <div className="form-detail">
                            <label htmlFor="amount" className="form-detail-topic">Upload Files</label>
                            <br />
                            <input id="event-cost" className="form-input" />
                        </div>
                        </div>


                      






                       
                            <button className="newevent-button">Request</button>

                     
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ApplyClaim_1;
