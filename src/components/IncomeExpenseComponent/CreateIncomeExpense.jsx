import React from "react";
import { IoMdArrowRoundBack } from "react-icons/io";
import { FaPlusCircle } from "react-icons/fa";
import "./createincomeexpense.css";

function CreateIncomeExpense({ setActiveComponent }) {
  const handlebackIncomeExpense = () => {
    setActiveComponent("IncomeExpense");
  };

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
                  name=""
                  id=""
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
                <select name="" id="" className="inputnewvacancy">
                  <option value="" disabled>
                    Category
                  </option>
                  <option value="">Expense</option>
                  <option value="">Income</option>
                </select>
              </div>
            </div>
            <div className="inexdiv1">
              <div className="inexdiv2">
                <label htmlFor="">Subject : </label>
              </div>
              <div className="inexdiv3">
                <input type="text" className="inputnewvacancy" />
              </div>
            </div>
            <div className="inexdiv1">
              <div className="inexdiv2">
                <label htmlFor="">Amount</label>
              </div>
              <div className="inexdiv3">
                <input
                  type="number"
                  name=""
                  id=""
                  className="inputnewvacancy"
                />
              </div>
            </div>
            <div className="contactus-form-button" style={{ width: "97%" }}>
              <button className="gradient-blue-btn" style={{ color: "white" }}>
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
