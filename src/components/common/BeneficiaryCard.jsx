
import React from "react";
import "./BeneficiaryCard.css";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { useNavigate } from 'react-router-dom'

const BeneficiaryCard = ({ status, about, date, setActiveComponent }) => {

    const location = useLocation();

    const getRoleName = () => {
        const pathname = decodeURIComponent(location.pathname);
        const role = pathname.split("/")[2];
        return role;
    };
    const role = getRoleName();


    const handlemorebeneficiary = () => {
        setActiveComponent("BeneficiaryMore");
    };

    return (

        <div className="medical-claim">

            <div className="claim-status-heading">
                <div className={status === "Pending" ? "status_pending" : "status_approved"}>{status}</div>
                <div className="claimed-date">{date}</div>

            </div>
            <div className="reason-topic">Reason</div>

            <div className="reason-row">
                <div className="reason">{about}</div>
                <div className="view-details" onClick={handlemorebeneficiary}>View Details ...</div>

            </div>

        </div>

    );
};

export default BeneficiaryCard;

