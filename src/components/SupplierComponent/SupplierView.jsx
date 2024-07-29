import React from 'react';
import Header from '../layout/Header';
import './SupplierView.css';
import SupplierTable from './SupplierTable';

const SupplierView = () => {
  return (
    <div className="supplier-body">
      <Header />
      <hr/>
      <div className="supplier-view">
        <div className="top-section">
          <div className="search-container">
            <input type="text" placeholder="Search by Name" className="search-input" />
            <button className="search-button">Search</button>
          </div>
          <button className="create-button">+ Create Suppliers</button>
        </div>
        <SupplierTable />
      </div>
    </div>
  );
};

export default SupplierView;
