import React from "react";
import Header from "../layout/Header";
import SideBar from "../common/SideBar";
import "./replycomplaint.css";
import { IoMdArrowRoundBack } from "react-icons/io";
import "./replycomplaint.css";
import { ComplaintsReplyCard } from "../constants/temporary";
import ReplyComplaintCard from "./ReplyComplaintCard";

function ReplyComplaint() {
  return (
    <div className="reply-complaints-body">
      <Header />
      <hr />
      <IoMdArrowRoundBack className="backarrow" />
      <div className="reply-form-body">
        <div className="reply-complaintcard-body">
          {ComplaintsReplyCard.map((Card, index) => (
            <ReplyComplaintCard
              key={index}
              name={Card.name}
              about={Card.about}
              date={Card.date}
              description={Card.description}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default ReplyComplaint;
