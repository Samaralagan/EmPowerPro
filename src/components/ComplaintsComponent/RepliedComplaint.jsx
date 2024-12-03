import React, { useEffect, useState } from "react";
import { IoMdArrowRoundBack } from "react-icons/io";
import "./replycomplaint.css";
import { ComplaintsReplyCard } from "../constants/temporary";
import RepliedComplaintCard from "./RepliedComplaintCard";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

function RepliedComplaint({ setActiveComponent }) {
  const { complaintId } = useParams();
  const [complaintDetails, setComplaintDetails] = useState([]);

  const navigate = useNavigate();
  const handlebackreplyComplaint = () => {
    navigate(-1);
  };

  useEffect(() => {
    axios
      .get(`http://localhost:8080/api/v1/hr/complaint-get-one/${complaintId}`)
      .then((response) => {
        setComplaintDetails(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        console.log("error fetching complaint details", error);
      });
  }, [complaintId]);

  return (
    <div className="contentbodyall">
      <IoMdArrowRoundBack
        className="backarrow"
        onClick={handlebackreplyComplaint}
      />
      <div className="form-box">
        <div className="">
          <RepliedComplaintCard
            id={complaintDetails.id}
            filePath={complaintDetails.filesToUpload}
            reply={complaintDetails.reply}
            about={complaintDetails.about}
            date={new Date(complaintDetails.date).toLocaleDateString()}
            description={complaintDetails.description}
            setActiveComponent={setActiveComponent}
          />
        </div>
      </div>
    </div>
  );
}

export default RepliedComplaint;
