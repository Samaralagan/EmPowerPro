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
        <br/>

        <form>
          <div>
            <label htmlFor="" style={{ color: "white", fontSize:'16px', marginRight:'2vw' }}>
              Date :{" "}
            </label>

            <input type="date" style={{ borderRadius: "5px", padding:'10px', width:'77%' }} />
          </div>
          <br />
          <div>
            <label htmlFor="" style={{ color: "white" , fontSize:'16px', marginRight:'2vw'  }}>
              Time :{" "}
            </label>

            <input type="time" style={{ borderRadius: "5px" , padding:'10px', width:'77%' }} />
          </div>
          <br />
          <div style={{ display: "flex", flexDirection: "row" , gap:'10px'}}>
            <div className="box1">Generate Link</div>
            <input type="text" style={{ borderRadius: "10px" }} />
          </div>
          <br />

          <div className="box2">
            <button type="submit" style={{color:'white'}}>Submit</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Modal;
