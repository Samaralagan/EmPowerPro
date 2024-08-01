import React from "react";
import { IoMdArrowRoundBack } from "react-icons/io";
import { FaPlusCircle } from "react-icons/fa";
import "./CreateSupplier.css";
import { createSupplier } from "../../service/SupplyService";
import { useState } from "react";

function CreateSupplier({ setActiveComponent }) {
  const [supplierName, setSupplierName] = useState("");
  const [contactEmail, setContactEmail] = useState("");
  const [contactPhoneNo, setContactPhoneNo] = useState("");
  const [supplierDescription, setSupplierDescription] = useState("");

  const handlebackSupplierView = () => {
    setActiveComponent("SupplierView");
  };

  function saveSupplier(e) {
    e.preventDefault();
    const validateForm = true

    if (validateForm) {
      const supplier = {
        supplierName,
        contactEmail,
        contactPhoneNo,
        supplierDescription
      };
      console.log(supplier);
      createSupplier(supplier)
        .then((response) => {
          console.log(response.data);
          // setActiveComponent("Job");
        
        })
        .catch((error) => {
          console.error(error);
        });
    }
  }

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
                <input type="text" 
                name="supplierName"
                value={supplierName}
                onChange={(e) => setSupplierName(e.target.value)}
                className="inputnewvacancy" />
              </div>
            </div>

            <div className="supplier-inexdiv1">
              <div className="supplier-inexdiv2">
                <label htmlFor="">Email Address : </label>
              </div>
              <div className="supplier-inexdiv3">
                <input 
                type="text" 
                className="inputnewvacancy" 
                name="jobTitle"
                value={contactEmail}
                onChange={(e) => setContactEmail(e.target.value)}  
                />
              </div>
            </div>
            <div className="supplier-inexdiv1">
              <div className="supplier-inexdiv2">
                <label htmlFor="">Contact No : </label>
              </div>
              <div className="supplier-inexdiv3">
                <input 
                type="text" 
                className="inputnewvacancy" 
                name="contactPhoneNo"
                value={contactPhoneNo}
                onChange={(e) => setContactPhoneNo(e.target.value)}
                />
              </div>
            </div>
            <div className="supplier-inexdiv1">
              <div className="supplier-inexdiv2">
                <label htmlFor="">Description : </label>
              </div>
              <div className="supplier-inexdiv3">
                <input 
                type="text" 
                className="inputnewvacancy"
                name="supplierDescription"
                value={supplierDescription}
                onChange={(e) => setSupplierDescription(e.target.value)}
                 />
              </div>
            </div>

            <div
              className="supplier-submit-form-button"
              style={{ width: "77%" }}
            >
              <button className="gradient-blue-btn" 
              style={{ color: "white" }}
              onClick={saveSupplier}>
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
