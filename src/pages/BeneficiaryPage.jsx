import React, { useState } from "react";
import SideBar from "../components/common/SideBar";
import Beneficiary from "../components/BeneficiaryComponent/Beneficiary";
import BeneficiaryMore from "../components/BeneficiaryComponent/BeneficiaryMore";
import ApplyClaim_1 from "../components/BeneficiaryComponent/ApplyClaim_1";
import ApplyClaim_2 from "../components/BeneficiaryComponent/ApplyClaim_2";
import ApplyClaim_3 from "../components/BeneficiaryComponent/ApplyClaim_3";
import { useLocation } from "react-router-dom";
import Executive_Beneficiary from "../components/BeneficiaryComponent/Executive_Beneficiary";
import HR_Beneficiary from "../components/BeneficiaryComponent/HR_Beneficiary";
import RequestedEvent from "../components/BeneficiaryComponent/RequestedEvent";
import PendingEvent from "../components/BeneficiaryComponent/PendingEvent";
import CanceledClaimForm from "../components/BeneficiaryComponent/CanceledClaimForm";
import AppliedClaimForm from "../components/BeneficiaryComponent/AppliedClaimForm";
import ApplyEvent from "../components/BeneficiaryComponent/ApplyEvent";
import RequestedClaim from '../components/BeneficiaryComponent/RequestedClaim'

const BeneficiaryPage = () => {
  const [activeComponent, setActiveComponent] = useState("Beneficiary");
  const location = useLocation();

  var role = "";
  const getActivePageName = () => {
    const pathname = decodeURIComponent(location.pathname); // Decode the URL
    role = pathname.split("/")[2];
    return role;
  };

  const activePageName = getActivePageName();

  return (
    <div className="d-flex">
      <SideBar />
      {activeComponent === "Beneficiary" && role === "Executive" && (
        <Executive_Beneficiary setActiveComponent={setActiveComponent} />
      )}
      {activeComponent === "Beneficiary" && role === "HR" && (
        <HR_Beneficiary setActiveComponent={setActiveComponent} />
      )}
      {activeComponent === "Beneficiary" &&
        role !== "Executive" &&
        role !== "HR" && (
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
      {activeComponent === "RequestedEvent" && (
        <RequestedEvent setActiveComponent={setActiveComponent} />
      )}
      {activeComponent === "PendingEvent" && (
        <PendingEvent setActiveComponent={setActiveComponent} />
      )}
      {activeComponent === "CanceledClaimForm" && (
        <CanceledClaimForm setActiveComponent={setActiveComponent} />
      )}
      {activeComponent === "AppliedClaimForm" && (
        <AppliedClaimForm setActiveComponent={setActiveComponent} />
      )}
      {activeComponent === "ApplyEvent" && (
        <ApplyEvent setActiveComponent={setActiveComponent} />
      )}

      {activeComponent === "RequestedClaim" && (
        <RequestedClaim setActiveComponent={setActiveComponent} />
      )}
    </div>
  );
};

export default BeneficiaryPage;
