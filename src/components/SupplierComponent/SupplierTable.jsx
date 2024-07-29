import React from 'react';
import './SupplierTable.css';

const suppliers = [
  { id: 'SUP-1005', name: 'Can Samuel', email: 'cansamuel2@gmail.com', contact: '+94 567 865 1234', imgSrc: 'https://via.placeholder.com/50' },
  { id: 'SUP-1006', name: 'Angelo Mathews', email: 'mathews1902@gmail.com', contact: '+94 567 865 1234', imgSrc: 'https://via.placeholder.com/50' },
  { id: 'SUP-1005', name: 'Olivia Rajan', email: 'olivia1990@gmail.com', contact: '+94 567 865 1234', imgSrc: 'https://via.placeholder.com/50' },
  { id: 'SUP-1005', name: 'Belly James', email: 'bellyjames12@gmail.com', contact: '+94 567 865 1234', imgSrc: 'https://via.placeholder.com/50' },
];

const SupplierTable = () => {
  return (
    <div className='supplier-table-form'>
    <div className="supplier-table">
      <table>
        <thead>
          <tr>
            <th>Supplier's Name</th>
            <th>Email Address</th>
            <th>Contact Number</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {suppliers.map((supplier) => (
            <tr key={supplier.id}>
              <td>
                <div className="supplier-info">
                  <img src={supplier.imgSrc} alt={supplier.name} className="supplier-img" />
                  <div>
                    <div className="supplier-name">{supplier.name}</div>
                    <div className="supplier-id">{supplier.id}</div>
                  </div>
                </div>
              </td>
              <td>{supplier.email}</td>
              <td>{supplier.contact}</td>
              <td><button className="view-more-button">View More</button></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    </div>
  );
};

export default SupplierTable;
