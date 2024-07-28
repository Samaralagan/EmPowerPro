import React from "react";
import "./Beneficiary.css";
import { IoMdArrowRoundBack } from "react-icons/io";

const BeneficiaryCardMore = ({
    status,
    about,
    date,
    reason,
    uploads,
    amount,
    setActiveComponent,
}) => {
    const handlemorecomplaint = () => {
        if (setActiveComponent) {
            setActiveComponent("Beneficiary");
        }
    };

    return (
        <div className="applied-container">

            <div className="form-arrow">
                <IoMdArrowRoundBack onClick={handlemorecomplaint} className="arrow_icon" />
            </div>


            <div className="claimed-box">
                <div className={status === "Pending" ? "status_pending" : "status_approved"}>{status}</div>

                <div className="reason-row">
                    <div className="applied-reason">{about}</div>
                    <div className="claimed-applied-date">Claim raised on  {date} </div>
                </div>

                <div className="applied-subtopics">Reason :</div>
                <div className="applied-content"> {reason}</div>


                <div className="applied-subtopics">Uploaded documents :</div>
                <div className="applied-content"> {uploads} </div>

                <div className="applied-subtopics">Amount :</div>
                <div className="applied-content"> {amount}</div>


            </div>


        </div>
    );
};

export default BeneficiaryCardMore;



