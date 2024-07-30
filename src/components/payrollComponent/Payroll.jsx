import Header from "../layout/Header";
import "./payroll.css";
import React from "react";
import HeaderCard from "../common/HeaderCard";
import { SlCalender } from "react-icons/sl";
import { GiCash } from "react-icons/gi";
import { GiExpense } from "react-icons/gi";
import { Margin } from "@mui/icons-material";
function Payroll() {
  return (
    <div className="contentbodyall">
      {/* <Header/>
        <hr/> */}
      <br />
      <br />

      <div className="leave-rectangles-container">
        <div className="d-flex ">
          <div className="rectangle-u me-2 rectangle-2">
            <HeaderCard
              icon={<SlCalender className="payroll-icon" />}
              value="MARCH"
              title="Month"
            />
          </div>
          <div className="rectangle-u me-2 rectangle-3">
            <HeaderCard
              icon={<GiCash className="payroll-icon" />}
              value="80,000"
              title="Total Salary"
            />
          </div>
          <div className="rectangle-u me-2 rectangle-4">
            <HeaderCard
              icon={<GiExpense className="payroll-icon" />}
              value="15,000"
              title="Deduction"
            />
          </div>
          <div
            className="rectangle-u me-2 rectangle-4"
            style={{ marginLeft: "19rem" }}
          >
            <HeaderCard
              style={{ marginLeft: "10rem" }}
              icon={<GiExpense className="leave-icon" />}
              value="45,000"
              title="MonthlySalary"
            />
          </div>

          {/*
          </div>
          {/* {/* <button
            className="gradient-blue-btn "
            style={{
              color: "white",
              width: "167px",
              height: "45px",
              padding: "10px",
            }}
          >
            <FaPlusCircle className="me-2" />
            Apply Leave 
          </button> */}
        </div>
      </div>
    </div>
  );
}

export default Payroll;
