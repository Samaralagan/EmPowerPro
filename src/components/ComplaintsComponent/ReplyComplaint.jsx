import React from "react";
import Header from "../layout/Header";
import SideBar from "../common/SideBar";
import "./replycomplaint.css";
import { IoMdArrowRoundBack } from "react-icons/io";
import "./replycomplaint.css";
import { ComplaintsReplyCard } from "../constants/temporary";
import ReplyComplaintCard from "./ReplyComplaintCard";

function ReplyComplaint({ setActiveComponent }) {
  const handlebackreplyComplaint = () => {
    setActiveComponent("Complaints");
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
            <ReplyComplaintCard
              key={index}
              name={Card.name}
              image={Card.image}
              about={Card.about}
              date={Card.date}
              description={Card.description}
              setActiveComponent={setActiveComponent}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default ReplyComplaint;
