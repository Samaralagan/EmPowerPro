import React from "react";
import { useLocation } from "react-router-dom";
import Header from "../layout/Header";
import "./newcomplaint.css";
import { IoMdArrowRoundBack } from "react-icons/io";
import { Link } from "react-router-dom";
import { FaUpload } from "react-icons/fa6";

function NewComplaint({ setActiveComponent }) {
  const handlebackCreateNewComplaint = () => {
    setActiveComponent("Complaints");
  };
  return (
    <div>
      <div className="contentbodyall">
        {/* <Header />
        <hr /> */}
        {/* <Link to={"/Complaints/"}> */}
        <IoMdArrowRoundBack
          onClick={handlebackCreateNewComplaint}
          className="backarrow"
        />
        {/* </Link> */}
        <div
          className="tablediv"
          style={{ padding: "2% 5% 2% 5%", marginLeft: "3vw" }}
        >
          <form action="" style={{ width: "100%" }}>
            <br />
            <div className="divform">
              <label htmlFor="" className="left-flexbox-newcomplaint">
                TO :
              </label>
              <select
                class="form-select"
                aria-label="Default select example"
                style={{ width: "50%" }}
              >
                <option selected>Select</option>
                <option value="1">Team Lead</option>
                <option value="2">HR</option>
                <option value="3">Executive</option>
                <option value="4">Finance</option>
              </select>
            </div>
            <br />
            <div className="divform">
              <label htmlFor="" className="left-flexbox-newcomplaint">
                Subject :
              </label>
              {/* <input type="text" className="" /> */}
              <textarea name="" id="" className="inputtext"></textarea>
            </div>
            <br />
            <div className="divform">
              <label htmlFor="" className="left-flexbox-newcomplaint">
                Description :
              </label>
              {/* <input type="textarea" className="" /> */}
              <textarea
                name=""
                id=""
                className="inputtext"
                style={{ height: "8rem" }}
              ></textarea>
            </div>
            <br />

            {/* <div className="divform">
              <label htmlFor="" className="left-flexbox-newcomplaint">
                Files to upload :
              </label>
              <input type="file" />
            </div>
             */}
            <div className="upload-box">
              <FaUpload size={50} className="upload-icon" />
              <p>
                Click to browse of drag and drop documents <br />
                Acceptable file types are PDF, JPG etc.File size less than 10MB
                each
              </p>
            </div>

            <div className="contactus-form-button">
              <button
                className="gradient-blue-btn "
                style={{ color: "white", marginRight: "15rem" }}
              >
                submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default NewComplaint;
