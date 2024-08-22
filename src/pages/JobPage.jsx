import React, { useEffect, useState } from "react";
import Job from "../components/JobsComponent/Job";
import NewVacancy from "../components/JobsComponent/NewVacancy";
import EditVacancy from "../components/JobsComponent/EditVacancy";



const JobPage = () => {
  const [activeComponent, setActiveComponent] = useState("Job");
  return (
    <div>
      {activeComponent === "Job" && (
        <Job setActiveComponent={setActiveComponent} />
      )}
      {activeComponent === "NewVacancy" && (
        <NewVacancy setActiveComponent={setActiveComponent} />
      )}
      {activeComponent === "EditVacancy" && (
        <EditVacancy setActiveComponent={setActiveComponent} />
      )}
    </div>
  );
};

export default JobPage;
