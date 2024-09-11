import React, { useState, useEffect, useRef } from "react";
import { MultiSelect } from 'primereact/multiselect';
import "./AddBlogPopup.css";
import Modal from "react-modal";
import TextEditor from "../common/TextEditor";
import Quill from "quill";
const Delta = Quill.import("delta");

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%) ",
    width: "70%",
    height: "80%",
    backgroundColor: "white", // Modal content background
    padding: "20px",
    borderRadius: "10px",
    boxShadow: "0 5px 15px rgba(0, 0, 0, 0.3)",
    zIndex: 1200,
    overflowY: "scroll",
  },
  overlay: {
    backgroundColor: "rgba(0, 0, 0, 0.15)", // Dark background
    backdropFilter: "blur(5px)", // Blur effect
    zIndex: 1200,
  },
};

const AddBlogPopup = ({ modalIsOpen, closeModal }) => {
  const [range, setRange] = useState();
  const [lastChange, setLastChange] = useState();
  const [readOnly, setReadOnly] = useState(false);
  const quillRef = useRef();

    const [selectedCities, setSelectedCities] = useState([]);
  const [cities, setCities] = useState([
    { name: 'New York', code: 'NY' },
    { name: 'Rome', code: 'RM' },
    { name: 'London', code: 'LDN' },
    { name: 'Paris', code: 'PRS' }
  ]);
  


  
  return (
    <div className="addblog-popup-body">
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <button className="close-button" onClick={closeModal}>
          ×
        </button>
        <h2>New Blog</h2>
        <div className="mb-3 mt-4">
          <label htmlFor="exampleFormControlInput1" className="form-label">
            Title
          </label>
          <input
            type="text"
            className="form-control"
            id="exampleFormControlInput1"
            placeholder="Enter the Title"
          />
        </div>
        <div>
          <label htmlFor="exampleFormControlInput1" className="form-label">
            Search Name
          </label>
          {/* <input
            type="text"
            className="form-control"
            id="exampleFormControlInput1"
            placeholder="name@example.com"
          /> */}
         <MultiSelect value={selectedCities} onChange={(e) => setSelectedCities(e.value)} options={cities} optionLabel="name" 
           placeholder="Select Cities" maxSelectedLabels={3} className="w-full md:w-20rem" />
        </div>
        <div className="mb-3 mt-4">
          <label htmlFor="quillEditor" className="form-label">
            Blog Content
          </label>
         
          <TextEditor
            ref={quillRef}
            readOnly={readOnly}
            defaultValue={new Delta()
              .insert("Create ")
              .insert("Blog", { bold: true })
              .insert(" ")
              .insert("content", { underline: true })
              .insert("\n")}
            onSelectionChange={setRange}
            onTextChange={setLastChange}
          />
        </div>
        <div>
          <center>
            <button className="gradient-blue-btn">Submit</button>
          </center>
        </div>
      </Modal>
    </div>
  );
};

export default AddBlogPopup;
