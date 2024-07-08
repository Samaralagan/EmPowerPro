import React from "react";
import Header from "../layout/Header";
import "./complaintsmore.css";

import { ComplaintsDataMore } from "../constants/temporary";
import ComplaintMoreCard from "./ComplaintMoreCard";

function Complaintsmore({ setActiveComponent }) {
  const handleBackClick = () => {
    setActiveComponent("Complaints");
  };
  return (
    <div className="complaintsmore-body">
      <Header />
      <hr />
      {ComplaintsDataMore.map((Card, index) => (
        <ComplaintMoreCard
          key={index}
          status={Card.status}
          about={Card.about}
          date={Card.date}
          to={Card.to}
          description={Card.description}
          reply={Card.reply}
        />
      ))}
    </div>
  );
}

export default Complaintsmore;
