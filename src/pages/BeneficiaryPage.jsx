import React, { useState } from "react";
import SideBar from "../components/common/SideBar";

import Beneficiary from '../components/BeneficiaryComponent/Beneficiary'
import BeneficiaryMore from '../components/BeneficiaryComponent/BeneficiaryMore'

// import NewComplaint from "../components/ComplaintsComponent/NewComplaint";

const BeneficiaryPage = () => {

  const [activeComponent, setActiveComponent] = useState("Beneficiary");
  return (
    <div className="d-flex">
      <SideBar />
      {activeComponent === "Beneficiary" && (
        <Beneficiary setActiveComponent={setActiveComponent} />
      )}
      {activeComponent === "BeneficiaryMore " && (
        <BeneficiaryMore  setActiveComponent={setActiveComponent} />
      )}
      {/* {activeComponent === "NewComplaint" && (
        <NewComplaint setActiveComponent={setActiveComponent} />
      )} */}
    </div>
  );
};

export default BeneficiaryPage;
