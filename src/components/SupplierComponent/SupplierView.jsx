import React from 'react';
import Header from '../layout/Header';
import './SupplierView.css';
import SupplierTable from './SupplierTable';

const SupplierView = ({setActiveComponent}) => {
  const handleCreateSupplier = () => {
    setActiveComponent("CreateSupplier");
  };
  return (
    <div className="supplier-body">
     <br/>
      <hr/>
      <div className="supplier-view">
        <div className="top-section">
          <div className="supplier-search-container">
            <input type="text" placeholder="Search by Name" className="supplier-search-input" />
            <button className="supplier-search-button">Search</button>
          </div>
          <button className="supplier-create-button " onClick={handleCreateSupplier}>+ Create Suppliers</button>
        </div>
        <SupplierTable />
      </div>
    </div>
  );
};

export default SupplierView;
