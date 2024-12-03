import "./payroll.css";
import axios from 'axios'
import React, { useState } from "react";
import PayrollFixedRates from "./PayrollFixedRates";
import { IoMdArrowRoundBack } from "react-icons/io";
import { useNavigate } from "react-router-dom";
function PayrollFSForm() {
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [username, setUsername] = useState('');
    const navication = useNavigate()
    const [data, setData] = useState({})
    const openModal = () => {
        setModalIsOpen(true);
      };
    
      const closeModal = () => {
        setModalIsOpen(false);
      };
      const handleback = ()=>{
        navication('/Pay Roll/FinanceAndSupport')
      }
      
      const handleSubmit = async (e) => {
        e.preventDefault();
        const data = {
          username: username,
        };
        
        try {
          console.log(data)
          const response = await axios.post("http://localhost:8080/api/v1/finance/slip", data);
          console.log(response.data);
          setData(response.data)
          alert("Payroll Created Successfully");
        } catch (error) {
          console.error("Error submitting payroll:", error.response?.data || error.message);
          alert("There was an error submitting payroll.");
        }
        
      };
      
  
    

  return (
    <div className="payroll-body mt-4"> 
      <br />
      <br />

      <div className="" >
        <div className="mb-2 fs-3" onClick={handleback} > <IoMdArrowRoundBack /></div>
        
         <div className="payroll-middle">
            {/* <select className="payrole-custom-dropdown" defaultValue="">
              <option value="" disabled>
                March
              </option>
              <option value="option1">Option 1</option>
              <option value="option2">Option 2</option>
              <option value="option3">Option 3</option>
            </select> */}
            <form onSubmit={handleSubmit}>
            <div style={{ display: "flex", alignItems: "end", gap: "10px" }}>

            <input
              type="text"
              placeholder="Employee username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              style={{
                padding: "15px",
                borderRadius: "11px",
                height: "2.5rem",
                
              }}
            />
            <button className="gradient-blue-btn me-3" type="Submit" >Enter</button>
          </div>
          </form>
            <button className="gradient-blue-btn me-3" onClick={openModal}>Fixed Rates</button>
            

         </div>
         <PayrollFixedRates modalIsOpen={modalIsOpen} closeModal={closeModal} />
        
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
             <div className="payroll-content-col">
                
                </div>
                
             </div>
             {/* <div className="payroll-content-row">
                <div  className="payroll-content-col">
                   <div className="payroll-content-col1">Employment Type</div>
                   <div className="payroll-content-col2">:</div>
                   <div className="payroll-content-col3"><input type='text'/></div>
                </div>
                <div className="payroll-content-col">
                   <div className="payroll-content-col1">Address</div>
                   <div className="payroll-content-col2">:</div>
                   <div className="payroll-content-col3"><input type='text'/></div>
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
                <td></td>
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
                <td className="salary-table-total">Rs.{data.medicalAllowance+ data.otherAllowance + data.salary }</td>
                <td className="salary-table-total">Rs.{(data.incomeAfterTax + data.incomeAfterEpf).toFixed(2)}</td>
              </tr>
              <tr>
                <td rowspan="2" className="salary-table-details">
                   {/* Payment Date : March 28,2024 <br /> */}
                   Bank Name : {data.bankName} <br />
                   Account Number : {data.branch}
                </td>
                <td colspan="2" className="salary-table-ns"> NET SALARY</td>
              </tr>
              <tr>
                <td colspan="2" className="salary-table-salary">
                    <br />
                   <span style={{ fontSize: "32px", fontWeight: "bold" }}>{data.totalAmount}</span>
                </td>
              </tr>
           </table>
           <br />
        </div>
      </div>
    </div>
  );
}

export default PayrollFSForm;