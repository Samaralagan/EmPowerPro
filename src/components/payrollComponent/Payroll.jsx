import Header from "../layout/Header";
import "./payroll.css"
import React from 'react'
import PayrollEmployee from "./PayrollEmployee";

function Payroll() {
  return (
    <div className="payroll-body">
        <Header/>
        <hr/>
        <br/>
        <br/>
        <PayrollEmployee/>
     </div>
  )
}

export default Payroll