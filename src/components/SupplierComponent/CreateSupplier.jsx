import React from "react";
import { IoMdArrowRoundBack } from "react-icons/io";
import { FaPlusCircle } from "react-icons/fa";
import "./CreateSupplier.css";

function CreateSupplier({ setActiveComponent }) {
  const handlebackSupplierView = () => {
    setActiveComponent("CreateSupplier");
  };

  return (
    <div>
      <div className="contentbodyall">
        <IoMdArrowRoundBack
          className="backarrow"
          style={{ marginLeft: "0%" }}
          onClick={handlebackSupplierView}
        />

        <div
          className="tablediv"
          style={{
            width: "78%",
            marginTop: "5vh",
            alignSelf: "center",
            padding: "5vh 4vw 4vh 4vw",
          }}
        >
          <form action="" className="supplier-inexform">
            <div className="supplier-inexdiv1">
              <div className="supplier-inexdiv2">
                <label htmlFor="">Name : </label>
              </div>
              <div className="supplier-inexdiv3">
                <input type="text" className="inputnewvacancy" />
              </div>
            </div>

            <div className="supplier-inexdiv1">
              <div className="supplier-inexdiv2">
                <label htmlFor="">Email Address : </label>
              </div>
              <div className="supplier-inexdiv3">
                <input type="text" className="inputnewvacancy" />
              </div>
            </div>
            <div className="supplier-inexdiv1">
              <div className="supplier-inexdiv2">
                <label htmlFor="">Contact No : </label>
              </div>
              <div className="supplier-inexdiv3">
                <input type="text" className="inputnewvacancy" />
              </div>
            </div>
            <div className="supplier-inexdiv1">
              <div className="supplier-inexdiv2">
                <label htmlFor="">Description : </label>
              </div>
              <div className="supplier-inexdiv3">
                <input type="text" className="inputnewvacancy" />
              </div>
            </div>

            <div
              className="supplier-submit-form-button"
              style={{ width: "77%" }}
            >
              <button className="gradient-blue-btn" style={{ color: "white" }}>
                <FaPlusCircle className="me-2" />
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default CreateSupplier;
