import React, { useState } from "react";
import { FaPlusCircle, FaEdit, FaMinusCircle } from "react-icons/fa";
import { IoMdArrowRoundBack } from "react-icons/io";

function IncomeExpenseEdit({ setActiveComponent }) {
  const handlebackIncomeExpense = () => {
    setActiveComponent("IncomeExpense");
  };
  const [isEditing, setIsEditing] = useState({
    date: false,
    category: false,
    subject: false,
    amount: false,
  });

  const [formData, setFormData] = useState({
    date: "06/05/2024",
    category: "Expense",
    subject: "Operating Expense",
    amount: "$50.00",
  });

  const handleEditClick = (field) => {
    setIsEditing((prev) => ({ ...prev, [field]: true }));
  };

  const handleInputChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSaveClick = (field) => {
    setIsEditing((prev) => ({ ...prev, [field]: false }));
  };

  return (
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
        {/* Date of Transaction */}
        <div className="inexdiv1">
          <div className="inexdiv2">
            <label htmlFor="">Date Of Transaction : </label>
          </div>
          <div className="inexdiv3">
            {isEditing.date ? (
              <input
                type="text"
                value={formData.date}
                onChange={(e) => handleInputChange("date", e.target.value)}
                onBlur={() => handleSaveClick("date")}
              />
            ) : (
              <>
                {formData.date}{" "}
                <FaEdit onClick={() => handleEditClick("date")} />
              </>
            )}
          </div>
        </div>

        {/* Other fields */}
        {/* Category */}
        <div className="inexdiv1">
          <div className="inexdiv2">
            <label htmlFor="">Category : </label>
          </div>
          <div className="inexdiv3">
            {isEditing.category ? (
              <input
                type="text"
                value={formData.category}
                onChange={(e) => handleInputChange("category", e.target.value)}
                onBlur={() => handleSaveClick("category")}
              />
            ) : (
              <>
                {formData.category}{" "}
                <FaEdit onClick={() => handleEditClick("category")} />
              </>
            )}
          </div>
        </div>

        {/* Subject */}
        <div className="inexdiv1">
          <div className="inexdiv2">
            <label htmlFor="">Subject : </label>
          </div>
          <div className="inexdiv3">
            {isEditing.subject ? (
              <input
                type="text"
                value={formData.subject}
                onChange={(e) => handleInputChange("subject", e.target.value)}
                onBlur={() => handleSaveClick("subject")}
              />
            ) : (
              <>
                {formData.subject}{" "}
                <FaEdit onClick={() => handleEditClick("subject")} />
              </>
            )}
          </div>
        </div>

        {/* Amount */}
        <div className="inexdiv1">
          <div className="inexdiv2">
            <label htmlFor="">Amount : </label>
          </div>
          <div className="inexdiv3">
            {isEditing.amount ? (
              <input
                type="text"
                value={formData.amount}
                onChange={(e) => handleInputChange("amount", e.target.value)}
                onBlur={() => handleSaveClick("amount")}
              />
            ) : (
              <>
                {formData.amount}{" "}
                <FaEdit onClick={() => handleEditClick("amount")} />
              </>
            )}
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "row" }}>
          <div
            className="contactus-form-button"
            style={{ width: "37%", marginRight: "0%", marginLeft: "19vw" }}
          >
            <button className="gradient-blue-btn" style={{ color: "white" }}>
              <FaMinusCircle className="me-2" />
              Delete
            </button>
          </div>
          <div className="contactus-form-button" style={{ width: "25%" }}>
            <button className="gradient-blue-btn" style={{ color: "white" }}>
              <FaPlusCircle className="me-2" />
              Update
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default IncomeExpenseEdit;
