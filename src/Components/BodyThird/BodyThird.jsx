import React, { useEffect, useState } from "react";
import Jobs from "../Jobs/Jobs";
import "./BodyThird.css";

const BodyThird = () => {
  const [jobsList, setJobsList] = useState([]);
  useEffect(() => {
    fetch("fakeData.json")
      .then((res) => res.json())
      .then((data) => setJobsList(data));
  }, []);
  return (
    <div className="body2">
      <div className="bodyDetails">
        <h1 className="title text1">Featured Jobs</h1>
        <p className="details">
          Explore thousands of job opportunities with all the information you
          need. Its your future
        </p>
      </div>
      <div className="jobs-list">
        {jobsList.map((jobs) => (
          <Jobs key={jobs.id} jobs={jobs}></Jobs>
        ))}
      </div>
    </div>
  );
};

export default BodyThird;
