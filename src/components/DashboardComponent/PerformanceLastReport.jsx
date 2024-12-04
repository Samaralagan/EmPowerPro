import React, { useEffect, useState } from "react";
import "./PerformanceLastReport.css";
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

const PerformanceLastReport = ({ modalIsOpen1, closeModal1 }) => {
  const [remarks, setRemarks] = useState([]);

  const fetchRemarks = async () => {
    try {
      const id = localStorage.getItem("userId");
      const response = await axios.get(
        `http://localhost:8080/api/v1/review/remarks/${id}`
      );
      console.log(id);
      console.log(response.data);
      setRemarks(response.data);
    } catch (error) {
      console.error("Error fetching remark data:", error);
    }
  };

  useEffect(() => {
    if (modalIsOpen1) {
      fetchRemarks();
    }
  }, [modalIsOpen1]);

  return (
    <div className="addblog-popup-body">
      <Modal
        isOpen={modalIsOpen1}
        onRequestClose={closeModal1}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <button className="close-button" onClick={closeModal1}>
          ×
        </button>
        <div>
          <div className="blogcomment-top">
            <center>
              <h5>LATEST REMARKS ON ME </h5>
            </center>
            <hr />
          </div>
          <div className="PerformanceLastReport-btn">
            <button>Exceptionally Succeed</button>
          </div>

          <div className="PerformanceLastReport-content">
            {remarks.map((remark, index) => (
              <div className="Performance-comment">
                <span>{remark.date}</span>
                <p className="ps-3">{remark.content}</p>
              </div>
            ))}
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default PerformanceLastReport;
