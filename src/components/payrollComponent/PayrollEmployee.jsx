import React from 'react'
import HeaderCard from "../common/HeaderCard";
import "./payrollEmployee.css"
import { FaPlusCircle } from "react-icons/fa";
import { SlCalender } from "react-icons/sl";
import { GiCash } from "react-icons/gi";
import { GiExpense } from "react-icons/gi";
import { PayrollButton } from './PayrollButton';
const PayrollEmployee = () => {
  return (
    <div className="leave-rectangles-container">
    <div className="d-flex ">
    <div className= "rectangle-u me-2 rectangle-2" >
    <HeaderCard icon = {<SlCalender className="payroll-icon"/>}  value = "MARCH" title = "Month"/>
    </div>
    <div className= "rectangle-u me-2 rectangle-3" >
    <HeaderCard icon = {<GiCash className="payroll-icon"/>}  value = "80,000" title = "Total Salary" />
    </div>
    <div className= "rectangle-u me-2 rectangle-4" >
    <HeaderCard icon = {<GiExpense className="payroll-icon"/>}  value = "15,000" title = "Deduction" />
    </div>
    <div className= "rectangle-u me-2 rectangle-4" style={{marginLeft : "33rem"}}>
    <HeaderCard style = {{marginLeft : "10rem"}} icon = {<GiExpense className="leave-icon"  />}  value = "45,000" title = "MonthlySalary"/> 
    </div>
  </div>
  <div className='d-flex' style={{alignItems:"end"}}>
  <select
              className="form-select"
              aria-label="Default select example"
              style={{
                width: "345px",
                border: "2px solid black",
                marginLeft: "3vh",
              }}
            >
              <option selected>Filter By</option>
              <option value="1">Pending</option>
              <option value="2">Approved</option>
            </select>
  <PayrollButton  icon={ <FaPlusCircle className="me-2" />}/>
  </div>
</div>
  )
}

export default PayrollEmployee