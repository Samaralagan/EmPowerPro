import "./payroll.css";
import React, { useState } from "react";
import PayrollFixedRates from "./PayrollFixedRates";
import { IoMdArrowRoundBack } from "react-icons/io";
import { useNavigate } from "react-router-dom";
function PayrollFSForm() {
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const navication = useNavigate()
    const openModal = () => {
        setModalIsOpen(true);
      };
    
      const closeModal = () => {
        setModalIsOpen(false);
      };
      const handleback = ()=>{
        navication('/Pay Roll/FinanceAndSupport')
      }
  return (
    <div className="payroll-body mt-4"> 
      <br />
      <br />

      <div className="" >
        <div className="mb-2 fs-3" onClick={handleback} > <IoMdArrowRoundBack /></div>
        
         <div className="payroll-middle">
            <select className="payrole-custom-dropdown" defaultValue="">
              <option value="" disabled>
                March
              </option>
              <option value="option1">Option 1</option>
              <option value="option2">Option 2</option>
              <option value="option3">Option 3</option>
            </select>
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
                   <div className="payroll-content-col3"><input type='text'/></div>
                </div>
                <div className="payroll-content-col">
                   <div className="payroll-content-col1">Employee Name</div>
                   <div className="payroll-content-col2">:</div>
                   <div className="payroll-content-col3"><input type='text'/></div>
                </div>
             </div>
             <div className="payroll-content-row">
                <div  className="payroll-content-col">
                   <div className="payroll-content-col1">EPF Number</div>
                   <div className="payroll-content-col2">:</div>
                   <div className="payroll-content-col3"> <input type='text'/></div>
                </div>
                <div className="payroll-content-col">
                   <div className="payroll-content-col1">Designation</div>
                   <div className="payroll-content-col2">:</div>
                   <div className="payroll-content-col3"><input type='text'/></div>
                </div>
             </div>
             <div className="payroll-content-row">
                <div  className="payroll-content-col">
                   <div className="payroll-content-col1">Joined Date</div>
                   <div className="payroll-content-col2">:</div>
                   <div className="payroll-content-col3"><input type='text'/></div>
                </div>
                <div className="payroll-content-col">
                   <div className="payroll-content-col1">NIC</div>
                   <div className="payroll-content-col2">:</div>
                   <div className="payroll-content-col3"><input type='text'/></div>
                </div>
             </div>
             <div className="payroll-content-row">
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
             </div>
           </div>

           <table className="salary-table ">
              <tr className="salary-table-th">
                <th>Description</th>
                <th className="salary-table-th1">Earnings</th>
                <th>Deductions</th>
              </tr>
              <tr className="salary-table-td">
                 <td>Basic Salary </td>
                 <td></td>
                 <td></td>
              </tr>
              <tr className="salary-table-td">
                <td>Additional Income</td>
                <td></td>
                <td></td>
              </tr>
              <tr className="salary-table-td">
                <td>Medical Allowance</td>
                <td></td>
                <td></td>
              </tr>
              <tr className="salary-table-td">
                <td>Other Allowances</td>
                <td></td>
                <td></td>
              </tr>
              <tr className="salary-table-td">
                <td>Advanced Personal Income Tax</td>
                <td></td>
                <td></td>
              </tr>
              <tr className="salary-table-td">
                <td>EPF Employee Contribution</td>
                <td></td>
                <td></td>
              </tr>
              <tr className="salary-table-td">
                <td className="salary-table-total">Total</td>
                <td className="salary-table-total">Rs.</td>
                <td className="salary-table-total">Rs.</td>
              </tr>
              <tr>
                <td rowspan="2" className="salary-table-details">
                   Payment Date : March 28,2024 <br />
                   Bank Name : Commercial Bank <br />
                   Account Number : 8000-7996-4564-1111
                </td>
                <td colspan="2" className="salary-table-ns"> NET SALARY</td>
              </tr>
              <tr>
                <td colspan="2" className="salary-table-salary">
                    <br />
                   <span></span>
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
