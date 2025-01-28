import React, { useEffect, useState } from "react";
import SideBar from "../common/SideBar";
import Header from "../layout/Header";
import "./Beneficiary.css";

import { FaArrowLeft } from "react-icons/fa6";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

function CanceledClaimForm({ setActiveComponent }) {
  const navigate = useNavigate();

  // const handleClaimClick = () => {
  //   navigate("/Beneficiary/Employee");
  // };
  const handleClaimClick = () => {
    setActiveComponent("Beneficiary");
  };

  const { id } = useParams();
  const [beneficiary, setBeneficiary] = useState({});

  useEffect(() => {
    axios
      .get(`http://localhost:8080/api/v1/hr/medicalclaim/${id}`)
      .then((response) => {
        setBeneficiary(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        console.error("Error fetching complaint details:", error);
      });
  }, [id]);
  return (
    <div>
      <SideBar />

      {/* <Header /> */}

      <div className="applied-claim-body">
        <div className="applied-container">
          <div className="form-arrow" onClick={handleClaimClick}>
            <FaArrowLeft className="arrow_icon" />
          </div>

          <div className="claimed-box">
            <div className="status pending">{beneficiary.status}</div>

            <div className="reason-row">
              <div className="applied-reason">{beneficiary.date}</div>
              <div className="claimed-applied-date">
                Claim raised on 23 May 2024{" "}
              </div>
            </div>

            <div className="applied-subtopics">Reason :</div>
            <div className="applied-content">
              In June 2024, I was hospitalized due to pneumonia. I was admitted
              to City General Hospital on June 1, 2024, and received
              comprehensive treatment including antibiotics, IV fluids, and
              oxygen therapy. After a 10-day stay, I was discharged on June 10,
              2024.
            </div>

            <div className="applied-subtopics">Uploaded documents :</div>
            <div className="applied-content">Medical bills_receipts.PDF </div>

            <div className="applied-subtopics">Amount :</div>
            <div className="applied-content">Rs.55,000.00 </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CanceledClaimForm;
