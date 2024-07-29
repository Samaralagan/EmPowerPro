import React from "react";
import SideBar from "../components/common/SideBar";
import SupplierView from "../components/SupplierComponent/SupplierView";
import SupplierTable from "../components/SupplierComponent/SupplierTable";

function SupplierPage () {
  return (
    <div>
      <SideBar />
      <SupplierView/>
     
    </div>
  );
};

export default SupplierPage;
