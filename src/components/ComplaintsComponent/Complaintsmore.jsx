import { React, useEffect, useState } from "react";
import Header from "../layout/Header";
import "./complaintsmore.css";
import { ComplaintsDataMore } from "../constants/temporary";
import ComplaintMoreCard from "./ComplaintMoreCard";
import { useParams } from "react-router-dom";
import axios from "axios";

function Complaintsmore({ setActiveComponent }) {
  const { complaintId } = useParams();
  const [complaintDetails, setComplaintDetails] = useState([]);

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

  return (
    <div className="contentbodyall1">
      {/* <Header />
      <hr /> */}

      <ComplaintMoreCard
        status={complaintDetails.status}
        about={complaintDetails.about}
        date={new Date(complaintDetails.date).toLocaleDateString()}
        to={complaintDetails.assignedTo}
        description={complaintDetails.description}
        reply={complaintDetails.reply}
        setActiveComponent={setActiveComponent}
      />
    </div>
  );
}

export default Complaintsmore;
