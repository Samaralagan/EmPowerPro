import React from "react";
import HeaderCard from "../common/HeaderCard";
import { GiPayMoney, GiReceiveMoney, GiMoneyStack } from "react-icons/gi";
import IncomeExpenseTable from "./IncomeExpenseTable";

function IncomeExpense({ setActiveComponent }) {
  return (
    <div className="contentbodyall">
      <br />
      <br />
      <div className="leave-rectangles-container">
        <div className="d-flex " style={{ gap: "3vw" }}>
          <div className="rectangle-u me-2 rectangle-2">
            <HeaderCard
              icon={<GiMoneyStack className="payroll-icon" />}
              value="50,000"
              title="Current Balance"
            />
          </div>
          <div className="rectangle-u me-2 rectangle-3">
            <HeaderCard
              icon={<GiPayMoney className="payroll-icon" />}
              value="80,000"
              title="Total Expense"
            />
          </div>
          <div className="rectangle-u me-2 rectangle-4">
            <HeaderCard
              icon={<GiReceiveMoney className="payroll-icon" />}
              value="30,000"
              title="Total Income"
            />
          </div>
        </div>
      </div>
      <IncomeExpenseTable setActiveComponent={setActiveComponent} />
    </div>
  );
}

export default IncomeExpense;
