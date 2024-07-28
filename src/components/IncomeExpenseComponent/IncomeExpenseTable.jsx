import React from "react";
import { FaPlusCircle } from "react-icons/fa";
import "./incomeexpensetable.css";

const IncomeExpenseTable = ({ setActiveComponent }) => {
  const handleCreateTransaction = () => {
    setActiveComponent("CreateIncomeExpense");
  };
  const handleeditTransaction = () => {
    setActiveComponent("IncomeExpenseEdit");
  };
  return (
    <div>
      <div className="inex-additional-rectangle-3">
        <div className="inex-records-text">Income & Expense</div>

        <div className="dropdown-row">
          <select className="custom-dropdown" defaultValue="">
            <option value="" disabled>
              Period
            </option>
            <option value="option1">Last 1 Months</option>
            <option value="option2">Last 3 Months</option>
            <option value="option3">Last 6 Months</option>
          </select>
          <select
            className="custom-dropdown"
            defaultValue=""
            style={{ marginLeft: "35vw" }}
          >
            <option value="" disabled>
              Category
            </option>
            <option value="option1">Income</option>
            <option value="option2">Expense</option>
          </select>
        </div>

        <div
          className="inex-custom-table-container"
          style={{ height: "43vh", overflow: "auto", scrollbarWidth: "none" }}
        >
          <table className="inex-custom-table">
            <thead>
              <tr>
                <th>Transaction no.</th>
                <th>Date</th>
                <th>Subject</th>
                <th>Category</th>
                <th>Amount</th>
                <th></th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td>01</td>
                <td>22 June 2024</td>
                <td>Operating Expenses</td>
                <td>Expense</td>
                <td>$ 50.00</td>
                <td onClick={handleeditTransaction}>
                  <div className="button1" style={{ cursor: "pointer" }}>
                    View More
                  </div>
                </td>
              </tr>
              <tr>
                <td>02</td>
                <td>22 June 2024</td>
                <td>Miscellaneous Income</td>
                <td>Income</td>
                <td>$ 978.00</td>
                <td onClick={handleeditTransaction}>
                  <div className="button1" style={{ cursor: "pointer" }}>
                    View More
                  </div>
                </td>
              </tr>
              <tr>
                <td>03</td>
                <td>22 June 2024</td>
                <td>Employee-Related Expenses</td>
                <td>Expense</td>
                <td>$ 120.00</td>
                <td onClick={handleeditTransaction}>
                  <div className="button1" style={{ cursor: "pointer" }}>
                    View More
                  </div>
                </td>
              </tr>
              <tr>
                <td>04</td>
                <td>22 June 2024</td>
                <td>Financial Expenses</td>
                <td>Expense</td>
                <td>$ 78.00</td>
                <td onClick={handleeditTransaction}>
                  <div className="button1" style={{ cursor: "pointer" }}>
                    View More
                  </div>
                </td>
              </tr>
              <tr>
                <td>05</td>
                <td>22 June 2024</td>
                <td>Operating Income</td>
                <td>Expense</td>
                <td>$ 668.00</td>
                <td onClick={handleeditTransaction}>
                  <div className="button1" style={{ cursor: "pointer" }}>
                    View More
                  </div>
                </td>
              </tr>
              <tr>
                <td>06</td>
                <td>22 June 2024</td>
                <td>Operating Income</td>
                <td>Expense</td>
                <td>$ 668.00</td>
                <td onClick={handleeditTransaction}>
                  <div className="button1" style={{ cursor: "pointer" }}>
                    View More
                  </div>
                </td>
              </tr>
              <tr>
                <td>07</td>
                <td>22 June 2024</td>
                <td>Operating Income</td>
                <td>Expense</td>
                <td>$ 668.00</td>
                <td onClick={handleeditTransaction}>
                  <div className="button1" style={{ cursor: "pointer" }}>
                    View More
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="contactus-form-button" style={{ width: "97%" }}>
          <button
            className="gradient-blue-btn"
            style={{ color: "white" }}
            onClick={handleCreateTransaction}
          >
            <FaPlusCircle className="me-2" />
            Create New Transaction
          </button>
        </div>
      </div>
    </div>
  );
};

export default IncomeExpenseTable;
