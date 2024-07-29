import React, { useEffect, useState } from "react";
import Job from "../components/JobsComponent/Job";
import NewVacancy from "../components/JobsComponent/NewVacancy";



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
    </div>
  );
};

export default JobPage;
