import React, { useEffect, useState } from "react";
import Jobs from "../Jobs/Jobs";
import "./BodyThird.css";
import ReviewJobs from "../ReviewJobs/ReviewJobs";
import { addToDb } from "../../utilities/fakedb";

const BodyThird = () => {
  const [jobsList, setJobsList] = useState([]);

  useEffect(() => {
    fetch("fakeData.json")
      .then((res) => res.json())
      .then((data) => setJobsList(data));
  }, []);
  const handlereview = (id) => {
    console.log(id);
    addToDb(id);
  };
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
          // console.log(jobs)
          <Jobs key={jobs.id} jobs={jobs} handlereview={handlereview}></Jobs>
        ))}
      </div>

      <div className="btn-alljobs">
        <button className="btn">See All Jobs</button>
      </div>
    </div>
  );
};

export default BodyThird;
