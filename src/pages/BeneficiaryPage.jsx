import React, { useState } from "react";
import SideBar from "../components/common/SideBar";
import Beneficiary from "../components/BeneficiaryComponent/Beneficiary";
import BeneficiaryMore from "../components/BeneficiaryComponent/BeneficiaryMore";
import ApplyClaim_1 from "../components/BeneficiaryComponent/ApplyClaim_1";
import ApplyClaim_2 from "../components/BeneficiaryComponent/ApplyClaim_2";
import ApplyClaim_3 from "../components/BeneficiaryComponent/ApplyClaim_3";

const BeneficiaryPage = () => {
  const [activeComponent, setActiveComponent] = useState("Beneficiary");

  return (
    <div className="d-flex">
      <SideBar />
      {activeComponent === "Beneficiary" && (
        <Beneficiary setActiveComponent={setActiveComponent} />
      )}
      {activeComponent === "BeneficiaryMore" && (
        <BeneficiaryMore setActiveComponent={setActiveComponent} />
      )}
      {activeComponent === "ApplyClaim_1" && (
        <ApplyClaim_1 setActiveComponent={setActiveComponent} />
      )}
      {activeComponent === "ApplyClaim_2" && (
        <ApplyClaim_2 setActiveComponent={setActiveComponent} />
      )}
      {activeComponent === "ApplyClaim_3" && (
        <ApplyClaim_3 setActiveComponent={setActiveComponent} />
      )}
    </div>
  );
};

export default BeneficiaryPage;
