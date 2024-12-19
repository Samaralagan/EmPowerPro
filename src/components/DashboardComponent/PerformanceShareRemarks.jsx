import React, { useState, useEffect } from "react";
import "./PerformanceShareRemarks.css";
import Modal from "react-modal";
import axios from "axios";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%) ",
    width: "50%",
    height: "80%",
    backgroundColor: "white", // Modal content background
    padding: "20px",
    borderRadius: "10px",
    boxShadow: "0 5px 15px rgba(0, 0, 0, 0.3)",
    zIndex: 1200,
    overflow: "hidden",
  },
  overlay: {
    backgroundColor: "rgba(0, 0, 0, 0.15)", // Dark background
    backdropFilter: "blur(5px)", // Blur effect
    zIndex: 1200,
  },
};

const PerformanceShareRemarks = ({ modalIsOpen, closeModal, id }) => {
  const [remarks, setRemarks] = useState([]);
  const [newRemark, setNewRemark] = useState("");

  const fetchRemarks = async () => {
    try {
      const response = await axios.get(
        `http://localhost:8080/api/v1/review/remarks/${id}`
      );
      setRemarks(response.data);
    } catch (error) {
      console.error("Error fetching remark data:", error);
    }
  };

  const handleAddRemark = async () => {
    const reviewerActorId = id;
    const reviewedActorId = localStorage.getItem("userId");
    const content = newRemark;

    if (!content.trim()) {
      alert("Remark content cannot be empty.");
      return;
    }

    const payload = {
      reviewerActorId,
      reviewedActorId,
      content,
    };

    try {
      const response = await axios.post(
        "http://localhost:8080/api/v1/review/add-remark",
        payload
      );
      console.log("Remark added successfully:", response.data);

      // Refresh remarks after adding
      fetchRemarks();
      setNewRemark(""); // Clear textarea
      closeModal(); // Close modal
    } catch (error) {
      console.error("Error adding remark:", error);
      alert("Failed to add remark. Please try again.");
    }
  };

  useEffect(() => {
    if (modalIsOpen) {
      fetchRemarks();
    }
  }, [modalIsOpen]);

  return (
    <div className="addblog-popup-body" style={{ height: "auto" }}>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <div>
          <div className="blogcomment-top">
            <center>
              <h5>SHARE REMARKS</h5>
            </center>
            <hr />
          </div>
          <div className="blogcomment-content">
            {remarks.map((remark, index) => (
              <div className="Performance-comment">
                <span>{remark.date}</span>
                <p className="ps-3"> {remark.content}</p>
              </div>
            ))}
          </div>
          <div className="blogcomment-textarea">
            <textarea
              placeholder="Add your remark"
              value={newRemark}
              onChange={(e) => setNewRemark(e.target.value)}
            ></textarea>
          </div>

          <div className="blogcomment-bottom mt-3">
            <button className="blogcomment-cancel" onClick={closeModal}>
              Cancel
            </button>
            <button className="blogcomment-sent" onClick={handleAddRemark}>
              Send
            </button>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default PerformanceShareRemarks;
