import "./payroll.css";
import React, { useState } from "react";
import { IoMdArrowRoundBack } from "react-icons/io";
import { useNavigate } from "react-router-dom";
function PayrollApproveSalary() {
  const navication = useNavigate();
  const handleback = () => {
    navication("/Pay Roll/Executive");
  };
  return (
    <div className="payroll-body mt-4">
      <br />
      <br />

      <div className="">
        <div className="mb-2 fs-3" onClick={handleback}>
          {" "}
          <IoMdArrowRoundBack />
        </div>

        <div className="payroll-content">
          <div className="payroll-content-title">
            Salary Calculation of montd of March 2024
          </div>
          <div className="payroll-content-details">
            <div className="payroll-content-row">
              <div className="payroll-content-col">
                <div className="payroll-content-col1">Employee Code</div>
                <div className="payroll-content-col2">:</div>
                <div className="payroll-content-col3">
                  <input type="text" className="payroll-as" />
                </div>
              </div>
              <div className="payroll-content-col">
                <div className="payroll-content-col1">Employee Name</div>
                <div className="payroll-content-col2">:</div>
                <div className="payroll-content-col3">
                  <input type="text" />
                </div>
              </div>
            </div>
            <div className="payroll-content-row">
              <div className="payroll-content-col">
                <div className="payroll-content-col1">EPF Number</div>
                <div className="payroll-content-col2">:</div>
                <div className="payroll-content-col3">
                  {" "}
                  <input type="text" />
                </div>
              </div>
              <div className="payroll-content-col">
                <div className="payroll-content-col1">Designation</div>
                <div className="payroll-content-col2">:</div>
                <div className="payroll-content-col3">
                  <input type="text" />
                </div>
              </div>
            </div>
            <div className="payroll-content-row">
              <div className="payroll-content-col">
                <div className="payroll-content-col1">Joined Date</div>
                <div className="payroll-content-col2">:</div>
                <div className="payroll-content-col3">
                  <input type="text" />
                </div>
              </div>
              <div className="payroll-content-col">
                <div className="payroll-content-col1">NIC</div>
                <div className="payroll-content-col2">:</div>
                <div className="payroll-content-col3">
                  <input type="text" />
                </div>
              </div>
            </div>
            <div className="payroll-content-row">
              <div className="payroll-content-col">
                <div className="payroll-content-col1">Employment Type</div>
                <div className="payroll-content-col2">:</div>
                <div className="payroll-content-col3">
                  <input type="text" />
                </div>
              </div>
              <div className="payroll-content-col">
                <div className="payroll-content-col1">Address</div>
                <div className="payroll-content-col2">:</div>
                <div className="payroll-content-col3">
                  <input type="text" />
                </div>
              </div>
            </div>
          </div>

          <div className="Approve-salary-tables">
            <div className="Approve-salary-table">
              <div className="Approve-salary-title">
                <div>Effactive Amount Details</div>
              </div>
              <div className="Approve-salary-tr">
                <div className="Approve-salary-td">Absent’s</div>
                <div className="Approve-salary-td1">0 /=</div>
              </div>
              <div className="Approve-salary-tr">
                <div className="Approve-salary-td">Unpaid Leaves</div>
                <div className="Approve-salary-td1">0 /=</div>
              </div>
              <div className="Approve-salary-tr">
                <div className="Approve-salary-td">Paid Leaves</div>
                <div className="Approve-salary-td1">0 /=</div>
              </div>
              <div className="Approve-salary-tr">
                <div className="Approve-salary-td">Late Check In (Hours)</div>
                <div className="Approve-salary-td1">5750 /=</div>
              </div>
              <div className="Approve-salary-tr">
                <div className="Approve-salary-td">Short Hours</div>
                <div className="Approve-salary-td1">4000 /=</div>
              </div>
              <div className="Approve-salary-tr">
                <div className="Approve-salary-td">Over Time (Hours)</div>
                <div className="Approve-salary-td1">0 /=</div>
              </div>
            </div>
            <div className="Approve-salary-table">
              <div className="Approve-salary-title">
                <div>Actual Details</div>
              </div>
              <div className="Approve-salary-tr">
                <div className="Approve-salary-td">Absent’s</div>
                <div className="Approve-salary-td1">
                  <input type="text" />
                </div>
              </div>
              <div className="Approve-salary-tr">
                <div className="Approve-salary-td">Unpaid Leaves</div>
                <div className="Approve-salary-td1">
                  <input type="text" />
                </div>
              </div>
              <div className="Approve-salary-tr">
                <div className="Approve-salary-td">Paid Leaves</div>
                <div className="Approve-salary-td1">
                  <input type="text" />
                </div>
              </div>
              <div className="Approve-salary-tr">
                <div className="Approve-salary-td">Late Check In (Hours)</div>
                <div className="Approve-salary-td1">
                  <input type="text" />
                </div>
              </div>
              <div className="Approve-salary-tr">
                <div className="Approve-salary-td">Short Hours</div>
                <div className="Approve-salary-td1">
                  <input type="text" />
                </div>
              </div>
              <div className="Approve-salary-tr">
                <div className="Approve-salary-td">Over Time (Hours)</div>
                <div className="Approve-salary-td1">
                  <input type="text" />
                </div>
              </div>
            </div>
          </div>

          <center>
            <div className="Approve-salary-bottom">
              <div>Rs.250,000</div>
              <div>Tax : Rs.50,000</div>
              <div>Total Salary : Rs.200,000</div>
            </div>
          </center>
          <br />
          <center>
            {" "}
            <button className="gradient-blue-btn me-3">Approve Salary</button>
          </center>
          <br />
          <br />
        </div>
      </div>
    </div>
  );
}

export default PayrollApproveSalary;
