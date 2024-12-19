import Header from "../layout/Header";
import "./payroll.css";
import React, { useState,useEffect } from "react";
import HeaderCard from "../common/HeaderCard";
import { SlCalender } from "react-icons/sl";
import { GiCash } from "react-icons/gi";
import { GiExpense } from "react-icons/gi";
import { Margin } from "@mui/icons-material";
import moment from "moment/moment";
import axios from "axios";
function Payroll() {
  const [data, setData] = useState([])
  const fetchEmployeeSlip = async()=> {
    
    try{
      const userId = localStorage.getItem("userId");
      const token = localStorage.getItem("token");
      
      const response = await axios.get(`http://localhost:8080/api/v1/employees/get-slip/${userId}`, {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        }
      });
      
      console.log(response.data)
      setData(response.data);
      
    }catch(error){
      console.error("Error in fetching data", error);
    }
  };

  useEffect(() => {
    fetchEmployeeSlip()
  },[]);

  return (
    <div className="payroll-body"> 
      {/* <Header/>
        <hr/> */}
      <br />
      <br />

      <div className="" >
        <div className="d-flex mt-5  mb-2">
          <div className="rectangle-u me-4 ms-3 rectangle-2" style={{width: "max-content",padding:"0px 17px 0px 47px"}}>
            <HeaderCard
              style={{width: "maxContent"}}
              icon={<SlCalender className="payroll-icon" />}
              value={moment().format('MMMM ')}
              title="Month"
            />
          </div>
          <div className="rectangle-u me-4 rectangle-3">
            <HeaderCard
              icon={<GiCash className="payroll-icon" />}
              value={data.salary + data.medicalAllowance + data.otherAllowance}
              title="Total Salary"
            />
          </div>
          <div className="rectangle-u me-4 rectangle-4">
            <HeaderCard
              icon={<GiExpense className="payroll-icon" />}
              value={data.incomeAfterTax + data.incomeAfterEpf}
              title="Deduction"
            />
          </div>
          <div
            className="rectangle-u me-4 rectangle-4"
            style={{ marginLeft: "19rem",backgroundColor:'#993434' }}
          >
            <HeaderCard
              style={{ marginLeft: "10rem" }}
              icon={<GiExpense className="leave-icon" />}
              value={data.totalAmount}
              title="MonthlySalary"
            />
          </div>
        </div>
         <div className="payroll-middle">
            <select className="payrole-custom-dropdown" defaultValue="">
              <option value="" disabled>
                March
              </option>
              <option value="option1">Option 1</option>
              <option value="option2">Option 2</option>
              <option value="option3">Option 3</option>
            </select>
            <button className="gradient-blue-btn me-3">Download Pay Slip</button>
         </div>
        
        <div className="payroll-content">
           <div className="payroll-content-title">Salary Calculation of month of March 2024</div>
           <div className="payroll-content-details" >
             <div className="payroll-content-row">
                <div  className="payroll-content-col">
                   <div className="payroll-content-col1">Employee Code</div>
                   <div className="payroll-content-col2">:</div>
                   <div className="payroll-content-col3">{data.employeeId}</div>
                </div>
                <div className="payroll-content-col">
                   <div className="payroll-content-col1">Employee Name</div>
                   <div className="payroll-content-col2">:</div>
                   <div className="payroll-content-col3">{data.firstName}</div>
                </div>
             </div>
             <div className="payroll-content-row">
             {/* <div  className="payroll-content-col">
                   <div className="payroll-content-col1">Joined Date</div>
                   <div className="payroll-content-col2">:</div>
                   <div className="payroll-content-col3">2020-08-20</div>
                </div> */}
                <div className="payroll-content-col">
                   <div className="payroll-content-col1">Designation</div>
                   <div className="payroll-content-col2">:</div>
                   <div className="payroll-content-col3">{data.jobTitle}</div>
                </div>
                <div className="payroll-content-col">
                   <div className="payroll-content-col1">Address</div>
                   <div className="payroll-content-col2">:</div>
                   <div className="payroll-content-col3">{data.address}</div>
                </div>
             </div>
             <div className="payroll-content-row">
                
                
             </div>
             {/* <div className="payroll-content-row">
                <div  className="payroll-content-col">
                   <div className="payroll-content-col1">Employment Type</div>
                   <div className="payroll-content-col2">:</div>
                   <div className="payroll-content-col3">Permanent</div>
                </div>
                <div className="payroll-content-col">
                   <div className="payroll-content-col1">Address</div>
                   <div className="payroll-content-col2">:</div>
                   <div className="payroll-content-col3">No.54/A,Colombo 06</div>
                </div>
             </div> */}
           </div>

           <table className="salary-table ">
              <tr className="salary-table-th">
                <th>Description</th>
                <th className="salary-table-th1">Earnings</th>
                <th>Deductions</th>
              </tr>
              <tr className="salary-table-td">
                 <td>Basic Salary </td>
                 <td>{data.salary}</td>
                 <td></td>
              </tr>
              {/* <tr className="salary-table-td">
                <td>Additional Income</td>
                <td>50,000.00</td>
                <td></td>
              </tr> */}
              <tr className="salary-table-td">
                <td>Medical Allowance</td>
                <td>{data.medicalAllowance}</td>
                <td></td>
              </tr>
              <tr className="salary-table-td">
                <td>Other Allowances</td>
                <td>{data.otherAllowance}</td>
                <td></td>
              </tr>
              <tr className="salary-table-td">
                <td>Advanced Personal Income Tax</td>
                <td></td>
                <td>{data.incomeAfterTax}</td>
              </tr>
              <tr className="salary-table-td">
                <td>EPF Employee Contribution</td>
                <td></td>
                <td>{data.incomeAfterEpf}</td>
              </tr>
              <tr className="salary-table-td">
                <td className="salary-table-total">Total</td>
                <td className="salary-table-total">Rs. {data.salary + data.medicalAllowance + data.otherAllowance}</td>
                <td className="salary-table-total">Rs. {data.incomeAfterTax + data.incomeAfterEpf}</td>
              </tr>
              <tr>
                <td rowspan="2" className="salary-table-details">
                   Bank Name : {data.bankName} <br />
                   Account Number : {data.acc_no}
                </td>
                <td colspan="2" className="salary-table-ns"> NET SALARY</td>
              </tr>
              <tr>
                <td colspan="2" className="salary-table-salary">
                   {data.totalAmount} <br />
                   
                </td>
              </tr>
           </table>
           <br />
        </div>
      </div>
    </div>
  );
}

export default Payroll