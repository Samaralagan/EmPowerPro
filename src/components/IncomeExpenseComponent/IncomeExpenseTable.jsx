import {React,useState,useEffect} from "react";
import { FaPlusCircle } from "react-icons/fa";
import "./incomeexpensetable.css";
import { listAccounts } from "../../service/IncomeExpenseService";

const IncomeExpenseTable = ({ setActiveComponent }) => {
  const handleCreateTransaction = () => {
    setActiveComponent("CreateIncomeExpense");
  };
  const handleeditTransaction = () => {
    setActiveComponent("IncomeExpenseEdit");
  };

  const [accounts, setAccounts] = useState([]);

    useEffect(()=>{
        listAccounts().then((response)=>{
            setAccounts(response.data);
        }).catch(error=>{
            console.log(error);
        })
    },[])

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
            {accounts.map((account, index) => (
              <tr>
                <td>{account.id}</td>
                <td>{account.dateOfTransaction}</td>
                <td>{account.subject}</td>
                <td>{account.category}</td>
                <td>${account.amount}</td>
                <td onClick={handleeditTransaction}>
                  <div className="button1" style={{ cursor: "pointer" }}>
                    View More
                  </div>
                </td>
              </tr>
            ))}
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
