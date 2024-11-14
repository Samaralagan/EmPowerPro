import React, { useState } from "react";
import axios from "axios";
import { IoMdArrowRoundBack } from "react-icons/io";
import { FaUpload } from "react-icons/fa6";
import "./newcomplaint.css";

function NewComplaint({ setActiveComponent }) {
  const [to, setTo] = useState("");
  const [subject, setSubject] = useState("");
  const [description, setDescription] = useState("");
  const [file, setFile] = useState(null); // File state

  const handlebackCreateNewComplaint = () => {
    setActiveComponent("Complaints");
  };

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("assignedTo", to);
    formData.append("about", subject);
    formData.append("description", description);
    if (file) {
      formData.append("file", file); // Add file to the request if available
    }

    try {
      await axios.post(
        "http://localhost:8080/api/v1/hr/complaint-creation",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      alert("Complaint submitted successfully!");
      setTimeout(() => {
        setActiveComponent("Complaints");
      }, 500);
    } catch (error) {
      console.error("Error submitting complaint:", error);
      alert("There was an error submitting your complaint.");
    }
  };

  return (
    <div>
      <div className="contentbodyall">
        <IoMdArrowRoundBack
          onClick={handlebackCreateNewComplaint}
          className="backarrow"
        />
        <div
          className="tablediv"
          style={{ padding: "2% 5% 2% 5%", marginLeft: "3vw" }}
        >
          <form onSubmit={handleSubmit} style={{ width: "100%" }}>
            <br />
            <div className="divform">
              <label htmlFor="to" className="left-flexbox-newcomplaint">
                TO :
              </label>
              <select
                className="form-select"
                style={{ width: "50%" }}
                value={to}
                onChange={(e) => setTo(e.target.value)}
                required
              >
                <option value="" disabled>
                  Select
                </option>
                <option value="Team Lead">Team Lead</option>
                <option value="HR">HR</option>
                <option value="Executive">Executive</option>
                <option value="Finance">Finance</option>
              </select>
            </div>
            <br />
            <div className="divform">
              <label htmlFor="subject" className="left-flexbox-newcomplaint">
                Subject :
              </label>
              <textarea
                id="subject"
                className="inputtext"
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
                required
              ></textarea>
            </div>
            <br />
            <div className="divform">
              <label
                htmlFor="description"
                className="left-flexbox-newcomplaint"
              >
                Description :
              </label>
              <textarea
                id="description"
                className="inputtext"
                style={{ height: "8rem" }}
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                required
              ></textarea>
            </div>
            <br />
            <div className="upload-box">
              <FaUpload size={50} className="upload-icon" />
              <input
                type="file"
                onChange={handleFileChange}
                accept=".pdf, .jpg, .jpeg, .png"
              />
              <p>
                Click to browse or drag and drop documents
                <br />
                Acceptable file types are PDF, JPG, etc. File size less than
                10MB each
              </p>
            </div>
            <div className="contactus-form-button">
              <button
                type="submit"
                className="gradient-blue-btn"
                style={{ color: "white", marginRight: "15rem" }}
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default NewComplaint;
