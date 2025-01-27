import React, { useState } from "react";
import SideBar from "../common/SideBar";
import Header from "../layout/Header";
import "./Beneficiary.css";
import { FaArrowLeft } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
import { TiTick } from "react-icons/ti";
import { Switch, makeStyles } from "@material-ui/core";
import { FaUpload } from "react-icons/fa6";

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
    setActiveComponent("Beneficiary");
  };

  const handleBack = () => {
    setActiveComponent("Beneficiary");
  };
  const handlemorecomplaint = () => {
    if (setActiveComponent) {
      setActiveComponent("Beneficiary");
    }
  };
  // Default values for each input field
  const [holderName, setHolderName] = useState("K.P.Raguram");
  const [accountNumber, setAccountNumber] = useState("8001-9081-6579");
  const [bankName, setBankName] = useState("option1");
  const [branchName, setBranchName] = useState("option1");
  const [fileName, setFileName] = useState("");

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setFileName(file.name);
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

          <div className="form-box">
            <div className="one-row-detail">
              <div className="form-detail">
                <label htmlFor="start-date" className="form-detail-topic">
                  Date
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

            <div className="form-detail">
              <div className="upload-topic">Upload Documents</div>
              <div className="upload-subtopic">
                Upload necessary documents like medical invoice and receipt for
                reimbursement.English translations are not necessary.You can
                save the form and return to it anytime
              </div>

              <div
                className="upload-box"
                onClick={() => document.getElementById("fileInput").click()}
                style={{
                  border: "2px dashed #007bff",
                  borderRadius: "10px",
                  padding: "20px",
                  textAlign: "center",
                  cursor: "pointer",
                  color: "#007bff",
                  fontFamily: "Arial, sans-serif",
                  fontSize: "14px",
                  position: "relative",
                }}
              >
                <FaUpload size={50} className="upload-icon" />
                <p>
                  Click to browse or drag and drop documents <br />
                  Acceptable file types are PDF, JPG etc.File size less than
                  10MB each
                </p>
                <input
                  id="fileInput"
                  type="file"
                  onChange={handleFileChange}
                  style={{ display: "none" }}
                />
              </div>
              {fileName && (
                <p style={{ marginTop: "10px", color: "#28a745" }}>
                  {fileName}
                </p>
              )}
            </div>

            <div className="form-detail">
              <div className="form-detail">
                <label htmlFor="holder-name" className="form-detail-topic">
                  Account Holder’s Name
                </label>
                <br />
                <input
                  id="holder-name"
                  className="form-3-input"
                  value={holderName}
                  onChange={(e) => setHolderName(e.target.value)}
                />
              </div>

              <div className="form-detail">
                <label htmlFor="account-number" className="form-detail-topic">
                  Account Number
                </label>
                <br />
                <input
                  id="account-number"
                  className="form-3-input"
                  value={accountNumber}
                  onChange={(e) => setAccountNumber(e.target.value)}
                />
              </div>

              <div className="one-row-detail">
                <div className="form-detail">
                  <label htmlFor="bank-name" className="form-detail-topic">
                    Bank Name
                  </label>
                  <br />
                  <select
                    id="bank-name"
                    className="claim-form-dropdown"
                    value={bankName}
                    onChange={(e) => setBankName(e.target.value)}
                  >
                    <option value="" disabled></option>
                    <option value="option1">Commercial Bank</option>
                    <option value="option2">Sampath Bank</option>
                    <option value="option3">Selan Bank</option>
                  </select>
                </div>

                <div className="form-detail">
                  <label htmlFor="branch-name" className="form-detail-topic">
                    Branch Name or Number
                  </label>
                  <br />
                  <input
                    id="branch-name"
                    className="form-3-input"
                    value={branchName}
                    onChange={(e) => setBranchName(e.target.value)}
                  />
                </div>
              </div>
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
