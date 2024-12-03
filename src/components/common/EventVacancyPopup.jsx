import {React, useState,useEffect} from "react";
import "./EventVacancyPopup.css";
import Modal from "react-modal";
import { GoDotFill } from "react-icons/go";
import { FaHtml5, FaLaptopCode, FaReact,FaClipboardCheck,FaDollarSign,FaCalendarAlt } from "react-icons/fa";
import { useLocation, useNavigate } from "react-router-dom";
import { useScatterChartProps } from "@mui/x-charts/internals";
import axios from "axios";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%) ",
    width: "70%",
    height: "90%",
    backgroundColor: "white", // Modal content background
    padding: "20px",
    borderRadius: "10px",
    boxShadow: "0 5px 15px rgba(0, 0, 0, 0.3)",
    zIndex: 1200,
  },
  overlay: {
    backgroundColor: "rgba(0, 0, 0, 0.15)", // Dark background
    backdropFilter: "blur(5px)", // Blur effect
    zIndex: 1200,
  },
};



const EventVacancyPopup = ({ modalIsOpen, closeModal,id }) => {
  
  const [vacancyDetails, setVacancyDetails] = useState(null);

  const location = useLocation();
  var mainPath = "";
  const navigation = useNavigate();
  const handleApply = () => {
    navigation("/VacancyApplyForm");
  };


  useEffect(() => {
    if (modalIsOpen && id) {
      const getVacancyDetails = async () => {
        try {
          const response = await axios.get(
            `http://localhost:8080/api/hr/vacancy-get-one/${id}`
          );
          setVacancyDetails(response.data); // Set the vacancy details in state
        } catch (error) {
          console.log(error);
        }
      };

      getVacancyDetails();
    }
  }, [modalIsOpen, id]);
  

  const getActivePageName = () => {
    const pathname = decodeURIComponent(location.pathname); // Decode the URL
    const mainPath = pathname.split("/")[1]; // Get the first part of the path
    return mainPath;
  };

  const activePageName = getActivePageName();

  
  return (
    <div className="vacancy-popup-body">
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <button className="close-button" onClick={closeModal}>
          ×
        </button>
        {vacancyDetails ? (
          <>
            <h4 className="vacancy-popup-header">We are hiring a</h4>
            <h2 className="vacancy-popup-title">
              {vacancyDetails.jobTitle} - {vacancyDetails.employmentType}
            </h2>

            
            <div className="vacancy-popup-updatedtime">
              <FaCalendarAlt className="fs-4" /> Application Deadline:
              <h6 className="ms-2 mt-2">{new Date(vacancyDetails.applicationDeadline).toLocaleString()}</h6>
            </div>
            <div className="d-flex mt-3">
              <div className="col-md-8">
                <div className="vacancy-popup-rightpart">
                  <h4 className="vacancy-popup-subtitle">About the job:</h4>
                  <p>{vacancyDetails.jobDescription}</p>
                  <h4 className="vacancy-popup-subtitle">Responsibilities:</h4>
                  <ul>
                    {vacancyDetails.responsibilities}
                  </ul>
                </div>
              </div>
              <div className="col-md-4">
                <div className="vacancy-popup-leftpart">

                <FaDollarSign className="fs-4" />Avg Salary

                <div className="vacancy-popup-left-icons mt-3">
                    <p> ${vacancyDetails.minSalary} - ${vacancyDetails.maxSalary}</p>
                  </div>

                  <FaClipboardCheck className="fs-4" /> Requirements:

                  <div className="vacancy-popup-left-icons mt-3">
                    <p>{vacancyDetails.requirements}</p>
                  </div>
                  {activePageName !== "Jobs" && (
                    <div className="vacancy-popup-applybtn mt-3">
                      <button onClick={handleApply}>Apply Now</button>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </>
        ) : (
          <p>Loading vacancy details...</p> // Display a loading message while data is being fetched
        )}
      </Modal>
    </div>
  );
};

export default EventVacancyPopup;
