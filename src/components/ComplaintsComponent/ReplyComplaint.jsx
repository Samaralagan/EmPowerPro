import { React, useState, useEffect } from "react";
import "./replycomplaint.css";
import { IoMdArrowRoundBack } from "react-icons/io";
import "./replycomplaint.css";
import ReplyComplaintCard from "./ReplyComplaintCard";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function ReplyComplaint({ setActiveComponent }) {
  const { complaintId } = useParams();
  const [complaintDetails, setComplaintDetails] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    // Fetch complaint details from the backend
    axios
      .get(`http://localhost:8080/api/v1/hr/complaint-get-one/${complaintId}`)
      .then((response) => {
        setComplaintDetails(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        console.error("Error fetching complaint details:", error);
      });
  }, [complaintId]);

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
          <ReplyComplaintCard
            filePath={complaintDetails.filesToUpload}
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

export default ReplyComplaint;
