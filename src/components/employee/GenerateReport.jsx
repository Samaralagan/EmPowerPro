import React from "react";
import "./generatereport.css";
import Header from "../layout/Header";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { Line, Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  PointElement,
  LineElement,
} from "chart.js";


import { FaArrowLeft } from "react-icons/fa6";
import { FaSearch } from "react-icons/fa";
import DashboardBarChart from "./DashboardBarChart";

import { useLocation,useNavigate } from "react-router-dom";


// Register the required components
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  PointElement,
  LineElement
);



function GenerateReport() {
  
  const navigate = useNavigate();
  const location = useLocation(); 
  var role = ''
  const getActivePageName = () => {
    const pathname = decodeURIComponent(location.pathname); // Decode the URL
     role = pathname.split('/')[2];
    return role;
  };
  const activePageName = getActivePageName();

  const handleReportBack = () => {
    // setActiveComponent("EX_Employees");
    if(role === 'HR'){
      navigate('/Employees/HR');
    }
    if(role === 'Executive'){
      navigate('/Team members/Executive');
    }
    if(role === 'TeamLeader'){
      navigate('/Team members/TeamLeader');
    }
    
  };
 

  const lineData = {
    labels: ["January", "February", "March", "April", "May", "June"],
    datasets: [
      {
        label: "Created Errors",
        data: [12, 19, 3, 5, 2, 3],
        fill: false,
        backgroundColor: "rgba(255, 99, 132, 0.2)",
        borderColor: "rgba(255, 99, 132, 1)",
      },
      {
        label: "Resolved Errors",
        data: [2, 3, 20, 5, 1, 4],
        fill: false,
        backgroundColor: "rgba(54, 162, 235, 0.2)",
        borderColor: "rgba(54, 162, 235, 1)",
      },
    ],
  };

  const lineOptions = {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };

  const barData = {
    labels: ["January", "February", "March", "April", "May", "June"],
    datasets: [
      {
        label: "Target",
        data: [50, 60, 70, 80, 90, 100],
        backgroundColor: "rgba(255, 206, 86, 0.2)",
        borderColor: "rgba(255, 206, 86, 1)",
        borderWidth: 1,
      },
      {
        label: "Actual",
        data: [45, 55, 65, 75, 85, 95],
        backgroundColor: "rgba(75, 192, 192, 0.2)",
        borderColor: "rgba(75, 192, 192, 1)",
        borderWidth: 1,
      },
    ],
  };

  const barOptions = {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };

  const barData_2 = {
    labels: ["January", "February", "March", "April", "May", "June"],
    datasets: [
      {
        label: "Average",
        data: [50, 60, 70, 80, 90, 100],
        backgroundColor: "rgba(65, 158, 90, 0.8)",
        borderColor: "rgba(65, 158, 90, 1)",
        borderWidth: 1,
      },
      {
        label: "Actual",
        data: [45, 55, 65, 75, 85, 95],
        backgroundColor: "rgba(105, 27, 98, 0.7)",
        borderColor: "rgba(105, 27, 98, 1)",
        borderWidth: 1,
      },
    ],
  };

  const barOptions_2 = {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };

  return (
    <div>
      {/* <Header /> */}
      <div className="generate-report-body">
        <div className="form-arrow-team" onClick={handleReportBack}>
          <FaArrowLeft className="arrow_icon-team" />
        </div>

        <div className="filter-row-report">
          <select className="filter-dropdown-report" defaultValue="">
            <option value="" disabled>
              Last 6 months
            </option>
            <option value="option1">Option 1</option>
            <option value="option2">Option 2</option>
            <option value="option3">Option 3</option>
          </select>
          <button className="download-button">Download</button>
        </div>

        <div className="charts-row">
          <div className="chart-1">
            Project Progress
            <div className="progress-bar-report">
              <CircularProgressbar
                value={50}
                text={`${50}%`}
                styles={buildStyles({
                  pathColor: `rgba(0, 170, 139, ${50 / 100})`,
                  textColor: "#004437",
                  trailColor: "#004437",
                  backgroundColor: "#004437",
                })}
              />
            </div>
          </div>

          <div className="chart-2">
            Issues
            <Line data={lineData} options={lineOptions} />
          </div>

          <div className="chart-3">
            Target vs Actual
            <Bar data={barData} options={barOptions} />
          </div>
        </div>

        <div className="individual-contribution">
          <div className="individual-title-row">
            <div className="contribution-title">Individual Report</div>

            <div className="search-bar-individual">
              <FaSearch className="search-icon-individual" />
              <input
                type="text"
                placeholder="Search..."
                className="search-input-individual"
              />
              <button className="search-button-individual">Search</button>
            </div>
          </div>

          <div className="individual-report-box">
            <Bar data={barData_2} options={barOptions_2} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default GenerateReport;
