import React, { useState } from 'react';
import SideBar from '../components/common/SideBar';
import SupplierTable from '../components/SupplierComponent/SupplierTable';
import SupplierView from '../components/SupplierComponent/SupplierView';
import CreateSupplier from '../components/SupplierComponent/CreateSupplier';

const SupplierPage = () => {
  const [activeComponent, setActiveComponent] = useState('SupplierView');

  const renderComponent = () => {
    switch (activeComponent) {
      case 'SupplierView':
        return <SupplierView setActiveComponent={setActiveComponent} />;
      case 'CreateSupplier':
        return <CreateSupplier setActiveComponent={setActiveComponent} />;
      default:
        return <SupplierView setActiveComponent={setActiveComponent} />;
    }
  };

  return (
    <div>
      <SideBar />
      {renderComponent()}
    </div>
  );
};

export default SupplierPage;
