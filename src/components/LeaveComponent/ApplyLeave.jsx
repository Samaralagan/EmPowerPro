import React from "react";
import Header from "../layout/Header";
import "./ApplyLeave.css";
import { FaHourglassStart } from "react-icons/fa6";
import { FaHourglassHalf } from "react-icons/fa6";
import { FaClock } from "react-icons/fa6";
import { BiLeftArrow } from "react-icons/bi";
import { IoMdArrowRoundBack } from "react-icons/io";

function ApplyLeave({ setActiveComponent }) {
  const handleBackClick = () => {
    setActiveComponent("Leave");
  };
  return (
    <div className="apply-leave-body">
      <Header />
      <hr />
      <br />
      <br />
      <IoMdArrowRoundBack className="backarrow" onClick={handleBackClick} />

      <div className="form-body">
        <form action="" style={{ width: "100%" }}>
          <br />
          <div className="divform">
            <select
              class="form-select"
              aria-label="Default select example"
              style={{ width: "50%" }}
            >
              <option selected></option>
              <option value="1">Casual</option>
              <option value="2">Annual</option>
              <option value="3">Monthly</option>
              <option value="4">Medical</option>
            </select>
          </div>
          <br />
          <div className="divform">
            <textarea name="" id="" className="inputtext"></textarea>
          </div>
          <br />
          <div className="divform">
            <textarea
              name=""
              id=""
              className="inputtext"
              style={{ height: "8rem" }}
            ></textarea>
          </div>
          <br />

          <div className="divform">
            <input type="file" />
          </div>

          <div className="contactus-form-button">
            <button
              className="gradient-blue-btn "
              style={{ color: "white", marginRight: "15rem" }}
            >
              APPLY
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default ApplyLeave;
