import React, { useState } from "react";
import SideBar from "../common/SideBar";
import Header from "../layout/Header";
import "./Beneficiary.css";
import { FaArrowLeft } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
import { TiTick } from "react-icons/ti";
import { FaUpload } from "react-icons/fa6";

function ApplyClaim_2() {
  const navigate = useNavigate();
  const steps = ["Claim Info", "Upload Documents", "Banking Info"];
  const [currentStep, setCurrentStep] = useState(2); // Set to 2 for the second step
  const [complete, setComplete] = useState(false);

  const handleClaimClick = () => {
    navigate("/Beneficiary/Employee");
  };

  const handleNext = () => {
    navigate("/ApplyClaim-3");
  };

  const handleBack = () => {
    navigate("/ApplyClaim-1");
  };

  return (
    <div>
      <SideBar />
      {/* <Header /> */}

      <div className="applied-claim-body">
        <div className="applied-claim-body-2">
          <div className="form-arrow" onClick={handleClaimClick}>
            <FaArrowLeft className="arrow_icon" />
          </div>

          <div className="flex justify-between">
            {steps.map((step, i) => (
              <div
                key={i}
                className={`step-item ${currentStep === i + 1 && "active"} ${
                  (i + 1 < currentStep || complete) && "complete"
                } `}
              >
                <div className="step">
                  {i + 1 < currentStep || complete ? (
                    <TiTick size={24} />
                  ) : (
                    i + 1
                  )}
                </div>
                <p className="text-gray-500">{step}</p>
              </div>
            ))}
          </div>

          <div className="form-box">
            <div className="upload-topic">Upload Documents</div>
            <div className="upload-subtopic">
              Upload necessary documents like medical invoice and receipt for
              reimbursement.English translations are not necessary.You can save
              the form and return to it anytime
            </div>

            <div className="upload-box">
              <FaUpload size={50} className="upload-icon" />
              <p>
                Click to browse of drag and drop documents <br />
                Acceptable file types are PDF, JPG etc.File size less than 10MB
                each
              </p>
            </div>

            <div className="form-button-row">
              <button className="back-button" onClick={handleBack}>
                Back
              </button>
              <button className="next-button" onClick={handleNext}>
                {currentStep === steps.length ? "Finish" : "Next"}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ApplyClaim_2;
