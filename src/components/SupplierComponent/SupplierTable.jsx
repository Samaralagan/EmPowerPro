import React, { useState } from 'react';
import SupplierDetail from './SupplierDetail';
import './SupplierTable.css';

const suppliers = [
  { id: 'SUP-1005', name: 'Can Samuel', email: 'cansamuel2@gmail.com', contact: '+94 567 865 1234', description: 'Reliable supplier with a track record of on-time deliveries.' },
  { id: 'SUP-1006', name: 'Angelo Mathews', email: 'mathews1902@gmail.com', contact: '+94 567 865 1234', description: 'Provides high-quality raw materials and excellent customer service.' },
  { id: 'SUP-1007', name: 'Olivia Rajan', email: 'olivia1990@gmail.com', contact: '+94 567 865 1234', description: 'Specializes in eco-friendly products and sustainable sourcing.' },
  { id: 'SUP-1008', name: 'Belly James', email: 'bellyjames12@gmail.com', contact: '+94 567 865 1234', description: 'Known for competitive pricing and a wide range of products.' },
];


const SupplierTable = () => {
  const [selectedSupplier, setSelectedSupplier] = useState(null);

  const openModal = (supplier) => {
    setSelectedSupplier(supplier);
  };

  const closeModal = () => {
    setSelectedSupplier(null);
  };

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
                    <img src="https://randomuser.me/api/portraits/men/1.jpg" className="supplier-img" />
                    <div>
                      <div className="supplier-name">{supplier.name}</div>
                      <div className="supplier-id">{supplier.id}</div>
                    </div>
                  </div>
                </td>
                <td>{supplier.email}</td>
                <td>{supplier.contact}</td>
                <td><button className="view-more-button" onClick={() => openModal(supplier)}>View More</button></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {selectedSupplier && <SupplierDetail supplier={selectedSupplier} closeModal={closeModal} />}
    </div>
  );
};

export default SupplierTable;
