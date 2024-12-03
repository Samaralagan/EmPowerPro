
import React, { useState,useEffect } from "react";
import Card1 from "../common/Card1";

import { FaPlusCircle, FaSearch } from "react-icons/fa";
import { IoCallSharp } from "react-icons/io5";
import { JobData } from "../constants/temporary";
import JobsTable from "./JobsTable";
import Modal from "./Modal"; // Import the Modal component
import { listVacancies } from "../../service/ApplyJobService";

const Job = ({ setActiveComponent }) => {
  const [isAllChecked, setIsAllChecked] = useState(false);
  const [checkedItems, setCheckedItems] = useState({});
  const [isModalVisible, setIsModalVisible] = useState(false); // Manage modal visibility

  const [vacancies, setVacancies] = useState([]);
    useEffect(()=>{
        listVacancies().then((response)=>{
            setVacancies(response.data);
        }).catch(error=>{
            console.log(error);
        })
    },[])

    const handleVacancyDelete = (id) => {
      setVacancies((prevVacancies) => prevVacancies.filter(vacancy => vacancy.id !== id));
  };
  
  const handleAllCheckboxChange = (e) => {
    const isChecked = e.target.checked;
    setIsAllChecked(isChecked);
    const updatedCheckedItems = JobData.reduce((acc, item, index) => {
      acc[index] = isChecked;
      return acc;
    }, {});
    setCheckedItems(updatedCheckedItems);
  };

  const handleCheckboxChange = (index, e) => {
    setCheckedItems((prevState) => ({
      ...prevState,
      [index]: e.target.checked,
    }));
  };

  const openModal = () => {
    setIsModalVisible(true);
  };

  const closeModal = () => {
    setIsModalVisible(false);
  };
  const handleNewVacancy = () => {
    setActiveComponent("NewVacancy");
  };


  return (
    <div className="contentbodyall1">
      <br />
      <div style={{ display: "flex", flexDirection: "row" }}>
        <div className="jobsTitle">JOB VACANCIES</div>
        <div
          className="contactus-form-button"
          style={{
            width: "33%",
            marginTop: "0%",
            marginBottom: "1rem",
            marginLeft: "34rem",
            marginRight: "0rem",
          }}
        >
          <button
            className="gradient-blue-btn"
            style={{ color: "white" }}
            onClick={handleNewVacancy}
          >
            <FaPlusCircle className="me-2" />
            Add New Vacancy
          </button>
        </div>
      </div>

      {/* <Card1
          title="User Experience Designer - Fully Remote"
          variety="Creative & Art"
          type="Full Time"
          salary="$45 - $55"
          countappilication="500+ applications"
        />
        <Card1
          title="Android App Developer - Hybrid"
          variety="Programming"
          type="Full Time"
          salary="$45 - $55"
          countappilication="500+ applications"
        />
        <Card1
          title="Intern Front-End Developer - Fully Remote"
          variety="Creative & Art"
          type="Full Time"
          salary="$45 - $55"
          countappilication="500+ applications"
        /> */}
      {/* Add more Card1 components as needed */}
      <div className="cardsContainer">
        {vacancies.map((vacancy, index) => (
          <Card1
            key={index}
            id={vacancy.id}
            title={vacancy.jobTitle}
            variety={vacancy.jobDescription} // Assuming variety is a field in your vacancy object
            type={vacancy.employmentType}
            deadLine={new Date(
              vacancy.applicationDeadline
            ).toLocaleDateString()} // Assuming salary is a field in your vacancy object
            countappilication="5000+ Applications" // Assuming countApplication is a field in your vacancy object
            onDelete={handleVacancyDelete}
          />
        ))}
      </div>
      <br />
      <div style={{ display: "flex", flexDirection: "row" }}>
        <div className="jobsTitle">JOB APPLICATIONS</div>
      </div>
      <div style={{ display: "flex", flexDirection: "row" }}>
        <div
          style={{
            display: "flex",
            // marginLeft: "33.5rem",
            alignItems: "center",
            position: "relative",
          }}
        >
          <FaSearch className="search-icon" />
          <input
            className="border-inbox"
            type="text"
            placeholder="Search..."
            style={{
              paddingLeft: "29px",
              paddingRight: "8px",
              paddingBottom: "8px",
              paddingTop: "8px",
              fontSize: "16px",
            }}
          />
          <button
            style={{
              padding: "9.8px",
              fontSize: "16px",
              background: "var(--Main-color)",
              color: "white",
            }}
          >
            Search
          </button>
        </div>
        <select
          className="form-select"
          aria-label="Default select example"
          style={{
            width: "345px",
            height: "5.5vh",
            border: "2px solid black",
            marginLeft: "3vw",
          }}
        >
          <option defaultValue>Filter By</option>
          <option value="1"> Full Time</option>
          <option value="2">Internship</option>
          <option value="3">Part Time</option>
          <option value="4">On Demand</option>
        </select>
        <div
          className="contactus-form-button"
          style={{
            width: "33%",
            marginTop: "0%",
            marginBottom: "1rem",
            // marginLeft: "34rem",
            marginRight: "0rem",
          }}
        >
          <button
            className="gradient-blue-btn"
            style={{ color: "white" }}
            onClick={openModal}
          >
            <IoCallSharp className="me-2" />
            Call For Interview
          </button>
        </div>
      </div>
      <div
        className="tablediv"
        style={{ height: "18rem", overflow: "auto", scrollbarWidth: "none" }}
      >
        <table className="table table-hover">
          <thead>
            <tr className="heading-row">
              <th scope="col">
                <input
                  type="checkbox"
                  checked={isAllChecked}
                  onChange={handleAllCheckboxChange}
                />
                All
              </th>
              <th scope="col">Team Member</th>
              <th scope="col">Email</th>
              <th scope="col">Job role</th>
              <th scope="col">Status</th>
              <th scope="col"></th>
            </tr>
          </thead>

          <tbody>
            {JobData.map((Card, index) => (
              <JobsTable
                key={index}
                name={Card.name}
                job={Card.job}
                email={Card.email}
                type={Card.type}
                setActiveComponent={setActiveComponent}
                isChecked={checkedItems[index] || false}
                onCheckboxChange={(e) => handleCheckboxChange(index, e)}
              />
            ))}
          </tbody>
        </table>
      </div>
      <Modal isVisible={isModalVisible} onClose={closeModal} />
    </div>
  );
};

export default Job;
