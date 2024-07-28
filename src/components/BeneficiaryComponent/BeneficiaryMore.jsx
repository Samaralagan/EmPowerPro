import React from "react";
import Header from "../layout/Header";
import "./Beneficiary.css";
import { BeneficiaryDataMore } from "../constants/temporary";
import BeneficiaryCardMore from "./BeneficiaryCardMore";

function BeneficiaryMore({ setActiveComponent }) {
  return (

    <div>
      <Header />
 
    <div className="applied-claim-body">
      
    
      {BeneficiaryDataMore.map((Card, index) => (
        <BeneficiaryCardMore
          key={index}
          status={Card.status}
          about={Card.about}
          date={Card.date}
          reason={Card.reason}
          uploads={Card.uploads}
          amount={Card.amount}
          setActiveComponent={setActiveComponent} // Pass the function here
        />
      ))}
    </div>
    </div>
  );
}

export default BeneficiaryMore;
