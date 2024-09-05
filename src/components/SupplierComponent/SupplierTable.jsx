import React, { useState, useEffect } from "react";
import SupplierDetail from "./SupplierDetail";
import "./SupplierTable.css";
import { listSuppliers } from "../../service/SupplyService";

const SupplierTable = () => {
  const [selectedSupplier, setSelectedSupplier] = useState(null);

  const [suppliers, setSuppliers] = useState([]);

  useEffect(() => {
    listSuppliers()
      .then((response) => {
        setSuppliers(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const openModal = (supplier) => {
    setSelectedSupplier(supplier);
  };

  const closeModal = () => {
    setSelectedSupplier(null);
  };

  return (
    <div className="supplier-table-form">
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
                  <div className="supplier-info  ps-4">
                    {/* <img src="https://randomuser.me/api/portraits/men/1.jpg" className="supplier-img" /> */}
                    <div>
                      <div className="supplier-name ">
                        {supplier.supplierName}
                      </div>
                    </div>
                  </div>
                </td>
                <td>{supplier.contactEmail}</td>
                <td>{supplier.contactPhoneNo}</td>
                <td>
                  <button
                    className="view-more-button"
                    onClick={(supplier) => openModal(supplier)}
                  >
                    View More
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {selectedSupplier && (
        <SupplierDetail supplier={selectedSupplier} closeModal={closeModal} />
      )}
    </div>
  );
};

export default SupplierTable;
