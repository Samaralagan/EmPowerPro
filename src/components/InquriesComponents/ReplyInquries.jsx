import React from "react";
import Header from "../layout/Header";
import "./replyinquries.css";
import { InquriesReplyData } from "../constants/temporary";
import InquriesReplyCard from "./InquriesReplyCard";

function ReplyInquries({ setActiveComponent }) {
  // Accept setActiveComponent as a prop
  return (
    <div>   
      <Header /> 
     
    <div className="replyinquries-body">
    
     
      {InquriesReplyData.map((Card, index) => (
        <InquriesReplyCard
          key={index}
          number={Card.number}
          subject={Card.subject}
          email={Card.email}
          description={Card.description}
          setActiveComponent={setActiveComponent} // Pass the function as a prop
        />
      ))}
    </div>
    </div>
  );
}

export default ReplyInquries;
