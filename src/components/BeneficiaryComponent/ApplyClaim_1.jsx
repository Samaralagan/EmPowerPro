import React, { useState } from "react";
import SideBar from "../common/SideBar";
import Header from "../layout/Header";
import "./Beneficiary.css";
import { FaArrowLeft } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
import { TiTick } from "react-icons/ti";
import { Switch, makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
  switchBase: {
    color: "#B9B5B5", // Default color
    "&$checked": {
      color: "#000F44", // Color when checked
    },
    "&$checked + $track": {
      backgroundColor: "#000F44", // Track color when checked
    },
  },
  checked: {},
  track: {},
});

function ApplyClaim_1({ setActiveComponent }) {
  const classes = useStyles();
  const navigate = useNavigate();
  const steps = ["Claim Info", "Upload Documents", "Banking Info"];
  const [currentStep, setCurrentStep] = useState(1);
  const [complete, setComplete] = useState(false);

  const handleClaimClick = () => {
    navigate("/Beneficiary/Employee");
  };

  const [checked, setChecked] = useState(false);

  const handleChange = (event) => {
    setChecked(event.target.checked);
  };

  const handleNext = () => {
    setActiveComponent("ApplyClaim_2");
  };

  const handleBack = () => {
    setActiveComponent("Beneficiary");
  };
  const handlemorecomplaint = () => {
    if (setActiveComponent) {
      setActiveComponent("Beneficiary");
    }
  };

  return (
    <div>
      <SideBar />

      {/* <Header /> */}

      <div className="applied-claim-body">
        <div className="applied-claim-body-2">
          <div className="form-arrow" onClick={handlemorecomplaint}>
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
            <div className="one-row-detail">
              <div className="form-detail">
                <label htmlFor="start-date" className="form-detail-topic">
                  Start Date
                </label>
                <br />
                <input type="date" id="start-date" className="form-input" />
              </div>

              <div className="form-detail">
                <label htmlFor="form-for" className="form-detail-topic">
                  Whose this form for
                </label>
                <br />
                <select
                  id="form-for"
                  className="claim-form-dropdown"
                  defaultValue=""
                >
                  <option value="" disabled></option>
                  <option value="option1">To Myself</option>
                  <option value="option2">To My husband</option>
                  <option value="option3">To My Parent</option>
                </select>
              </div>
            </div>

            <div className="form-detail">
              <label htmlFor="reason" className="form-detail-topic">
                Reason
              </label>
              <br />
              <textarea id="reason" className="claim-input-textarea" />
            </div>

            <div className="form-detail">
              <label htmlFor="amount" className="form-detail-topic">
                Amount
              </label>
              <br />
              <input id="amount" className="form-input" />
            </div>

            <div className="choose-toggle-row">
              <div className="choose-text">
                Is your claim related to a previous health issue?
              </div>
              <Switch
                checked={checked}
                onChange={handleChange}
                classes={{
                  switchBase: classes.switchBase,
                  checked: classes.checked,
                  track: classes.track,
                }}
              />
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

export default ApplyClaim_1;
