import React, { useState, useEffect, useRef } from "react";
import "./AddBlogPopup.css";
import Modal from "react-modal";
import Quill from "quill";
import "quill/dist/quill.snow.css";

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
  },
  overlay: {
    backgroundColor: "rgba(0, 0, 0, 0.15)", // Dark background
    backdropFilter: "blur(5px)", // Blur effect
    zIndex: 1200,
  },
};

const AddBlogPopup = ({ modalIsOpen, closeModal }) => {
  const quillRef = useRef(null);

  useEffect(() => {
    if (modalIsOpen && quillRef.current) {
      // Check if Quill is already initialized to prevent re-initialization
      if (!quillRef.current.__quill) {
        new Quill(quillRef.current, {
          theme: "snow",
        });
      }
    }
  }, [modalIsOpen]);

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
            placeholder="name@example.com"
          />
        </div>
        <div>
          <label htmlFor="exampleFormControlInput1" className="form-label">
            Search Name
          </label>
          <input
            type="text"
            className="form-control"
            id="exampleFormControlInput1"
            placeholder="name@example.com"
          />
        </div>
        <div className="mb-3 mt-4">
          <label htmlFor="quillEditor" className="form-label">
            Blog Content
          </label>
          <div
            ref={quillRef}
            id="quillEditor"
            style={{ height: "200px", backgroundColor: "white" }}
          ></div>
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
