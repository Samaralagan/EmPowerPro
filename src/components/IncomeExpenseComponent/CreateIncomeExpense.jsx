import {React,useState} from "react";
import { IoMdArrowRoundBack } from "react-icons/io";
import { FaPlusCircle } from "react-icons/fa";
import "./createincomeexpense.css";
import { createAccount } from "../../service/IncomeExpenseService";

function CreateIncomeExpense({ setActiveComponent }) {
  const [subject, setSubject] = useState("");
  const [amount, setAmount] = useState("");
  const [dateOfTransaction, setDateOfTransaction] = useState("");
  const [category, setCategory] = useState("");

  const handlebackIncomeExpense = () => {
    setActiveComponent("IncomeExpense");
  };

  function saveAccount(e) {
    e.preventDefault();
    const account = {
      subject,
      amount,
      dateOfTransaction,
      category,
    };
    console.log(account);
    createAccount(account)
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }

  return (
    <div>
      <div className="contentbodyall">
        <IoMdArrowRoundBack
          className="backarrow"
          style={{ marginLeft: "0%" }}
          onClick={handlebackIncomeExpense}
        />

        <div
          className="tablediv"
          style={{
            width: "85%",
            alignSelf: "center",
            padding: "5vh 4vw 4vh 4vw",
          }}
        >
          <form action="" className="inexform">
            <div className="inexdiv1">
              <div className="inexdiv2">
                <label htmlFor="">Date Of Transaction : </label>
              </div>
              <div className="inexdiv3">
                <input
                  type="date"
                   id=""
                  name="dateOfTransaction"
                  value={dateOfTransaction}
                  onChange={(e) => setDateOfTransaction(e.target.value)}
                  className="inputnewvacancy"
                  style={{ width: "100%" }}
                />
              </div>
            </div>
            <div className="inexdiv1">
              <div className="inexdiv2">
                <label htmlFor="">Category : </label>
              </div>
              <div className="inexdiv3">
                <select 
                id="" 
                className="inputnewvacancy"
                name="category"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                >
                  <option value="" disabled>
                    Category
                  </option>
                  <option value="Expense">Expense</option>
                  <option value="Income">Income</option>
                </select>
              </div>
            </div>
            <div className="inexdiv1">
              <div className="inexdiv2">
                <label htmlFor="">Subject : </label>
              </div>
              <div className="inexdiv3">
                <input 
                type="text" 
                className="inputnewvacancy"
                name="subject"
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
                 />
              </div>
            </div>
            <div className="inexdiv1">
              <div className="inexdiv2">
                <label htmlFor="">Amount</label>
              </div>
              <div className="inexdiv3">
                <input
                  type="number"
                  id=""
                  className="inputnewvacancy"
                  name="amount"
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                />
              </div>
            </div>
            <div className="contactus-form-button" style={{ width: "97%" }}>
              <button className="gradient-blue-btn" onClick={saveAccount} style={{ color: "white" }}>
                <FaPlusCircle className="me-2" />
                Create
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default CreateIncomeExpense;
