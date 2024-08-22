import React from "react";
import "./modal.css"; // Create this CSS file for styling

const Modal = ({ isVisible, onClose }) => {
  if (!isVisible) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <button className="modal-close" onClick={onClose}>
          X
        </button>
        <h2>Calling For Interview</h2>
        <form>
          <div>
            <label htmlFor="" style={{ color: "white" }}>
              Date :{" "}
            </label>

            <input type="date" style={{ borderRadius: "10px" }} />
          </div>
          <br />
          <div>
            <label htmlFor="" style={{ color: "white" }}>
              Time :{" "}
            </label>

            <input type="time" style={{ borderRadius: "10px" }} />
          </div>
          <br />
          <div style={{ display: "flex", flexDirection: "row" }}>
            <div className="box1">Generate Link</div>
            <input type="text" style={{ borderRadius: "10px" }} />
          </div>
          <br />
          <div className="box1">
            <button type="submit">Submit</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Modal;
