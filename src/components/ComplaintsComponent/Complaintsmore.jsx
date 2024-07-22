import React from "react";
import Header from "../layout/Header";
import "./complaintsmore.css";
import { ComplaintsDataMore } from "../constants/temporary";
import ComplaintMoreCard from "./ComplaintMoreCard";

function Complaintsmore({ setActiveComponent }) {
  return (

    <div>
      <Header />
 
    <div className="complaintsmore-body">
      
    
      {ComplaintsDataMore.map((Card, index) => (
        <ComplaintMoreCard
          key={index}
          status={Card.status}
          about={Card.about}
          date={Card.date}
          to={Card.to}
          description={Card.description}
          reply={Card.reply}
          setActiveComponent={setActiveComponent} // Pass the function here
        />
      ))}
    </div>
    </div>
  );
}

export default Complaintsmore;
