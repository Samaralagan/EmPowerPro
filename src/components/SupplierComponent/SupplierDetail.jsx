import React from "react";
import "./SupplierDetail.css";

const SupplierDetail = ({ supplier, closeModal }) => {
  if (!supplier) return null;

  return (
    <div className="supplier-popup-overlay" onClick={closeModal}>
      <div className="supplier-popup" onClick={(e) => e.stopPropagation()}>
        <div className="supplier-popup-header">
          <h2>Supplier Details</h2>
          <span className="close-btn" onClick={closeModal}>
            &times;
          </span>
        </div>
        <div className="supplier-popup-content">
          <div className="supplier-details">
            <img
              src="https://randomuser.me/api/portraits/men/1.jpg"
              className="supplier-profile-pic"
              alt="Profile"
            />
            <div className="supplier-detail-info">
              <p className="supplier-name">{supplier.supplierName}</p>
              <p>{supplier.id}</p>
              <p>
                Email Address:{" "}
                <a href={`mailto:${supplier.contactEmail}`}>{supplier.email}</a>
              </p>
              <p>Contact Number: {supplier.contactPhoneNo}</p>
              <p>Description: {supplier.supplierDescription}</p>
            </div>
            <div className="supplier-actions">
              <button className="supplier-edit-btn">Edit</button>
              <button className="supplier-delete-btn">Delete</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SupplierDetail;
