import React, { useState } from "react";
import IncomeExpense from "../components/IncomeExpenseComponent/IncomeExpense";
import CreateIncomeExpense from "../components/IncomeExpenseComponent/CreateIncomeExpense";
import IncomeExpenseEdit from "../components/IncomeExpenseComponent/IncomeExpenseEdit";

const IncomeExpensePage = () => {
  const [activeComponent, setActiveComponent] = useState("IncomeExpense");

  return (
    <div>
      {activeComponent === "IncomeExpense" && (
        <IncomeExpense setActiveComponent={setActiveComponent} />
      )}
      {activeComponent === "CreateIncomeExpense" && (
        <CreateIncomeExpense setActiveComponent={setActiveComponent} />
      )}
      {activeComponent === "IncomeExpenseEdit" && (
        <IncomeExpenseEdit setActiveComponent={setActiveComponent} />
      )}
      {/* <IncomeExpenseEdit /> */}
    </div>
  );
};

export default IncomeExpensePage;
