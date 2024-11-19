import React from "react";
import { IoMdArrowRoundBack } from "react-icons/io";
import "./replycomplaint.css";
import { ComplaintsReplyCard } from "../constants/temporary";
import ReplyComplaintCard from "./ReplyComplaintCard";
import RepliedComplaintCard from "./RepliedComplaintCard";
import { useNavigate } from "react-router-dom";

function RepliedComplaint({ setActiveComponent }) {
  const navigate = useNavigate();
  const handlebackreplyComplaint = () => {
    navigate(-1);
  };
  return (
    <div className="contentbodyall">
      <IoMdArrowRoundBack
        className="backarrow"
        onClick={handlebackreplyComplaint}
      />
      <div className="form-box">
        <div className="">
          {ComplaintsReplyCard.map((Card, index) => (
            <RepliedComplaintCard
              key={index}
              name={Card.name}
              image={Card.image}
              about={Card.about}
              date={Card.date}
              description={Card.description}
              replied={Card.replied}
              setActiveComponent={setActiveComponent}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default RepliedComplaint;
