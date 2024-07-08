import React from "react";
import Header from "../layout/Header";
import "./newcomplaint.css";
import { IoMdArrowRoundBack } from "react-icons/io";
function NewComplaint({ setActiveComponent }) {
  const handleBackClick = () => {
    setActiveComponent("Complaints");
  };
  return (
    <div>
      <div className="newcomplaint-body">
        <Header />
        <hr />
        <IoMdArrowRoundBack className="backarrow" onClick={handleBackClick} />
        <div className="form-body">
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

            <div className="divform">
              <label htmlFor="" className="left-flexbox-newcomplaint">
                Files to upload :
              </label>
              <input type="file" />
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
