import React, { useState, useEffect } from "react";
import "./Performance.css";
import { IoMdArrowRoundBack } from "react-icons/io";
import { useLocation, useNavigate } from "react-router-dom";
import { performanceEvaluationCardData } from "../constants/temporary";
import PerformanceShareRemarks from "./PerformanceShareRemarks";
import PerformanceLastReport from "./PerformanceLastReport";
import axios from "axios";

const Performance = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [modalIsOpen1, setModalIsOpen1] = useState(false);
  const [employees, setEmployees] = useState([]);
  const [selectedEmployeeId, setSelectedEmployeeId] = useState(null);

  const fetchEmployees = async () => {
    try {
      const response = await axios.get(
        `http://localhost:8080/api/v1/executive/getAllEmployees`
      );
      setEmployees(response.data);
    } catch (error) {
      console.error("Error fetching remark data:", error);
    }
  };

  useEffect(() => {
    fetchEmployees();
  }, []);

  const openModal = (id) => {
    setSelectedEmployeeId(id);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
    setSelectedEmployeeId(null);
  };
  const openModal1 = () => {
    setModalIsOpen1(true);
  };

  const closeModal1 = () => {
    setModalIsOpen1(false);
  };

  const handlePage = (PageName) => {
    navigate(`/${PageName}`);
  };
  var role = "";
  const getActivePageName = () => {
    const pathname = decodeURIComponent(location.pathname); // Decode the URL
    role = pathname.split("/")[2];
    return role;
  };
  const activePageName = getActivePageName();

  return (
    <div className="performance-body">
      <div className="performance-back">
        <IoMdArrowRoundBack onClick={() => handlePage(`Dash Board/${role}`)} />
      </div>
      <div className="performance-top">
        <div>My Performance Evaluation</div>
        <button onClick={openModal1}>View Last Report</button>
      </div>
      <PerformanceLastReport
        modalIsOpen1={modalIsOpen1}
        closeModal1={closeModal1}
      />

      <div className="performance-content">
        <h3 className="performance-content-title">
          Performance Evaluation on Others
        </h3>
        <div className="performance-content-boxs">
          {employees.map((employee, index) => (
            <div className="performance-content-box" key={index}>
              <img src="" alt="" />
              <p>
                {employee.firstName} {employee.lastName}
              </p>
              <span>{employee.role}</span>
              <button onClick={() => openModal(employee.id)}>
                Share Remarks
              </button>
            </div>
          ))}

          <PerformanceShareRemarks
            modalIsOpen={modalIsOpen}
            closeModal={closeModal}
            id={selectedEmployeeId}
          />
        </div>
      </div>
    </div>
  );
};

export default Performance;
