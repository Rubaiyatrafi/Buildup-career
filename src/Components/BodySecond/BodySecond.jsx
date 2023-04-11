import React from "react";
import { useLoaderData } from "react-router-dom";
import "./BodySecond.css";
import JobCatagory from "../JobCatagory/JobCatagory";

const BodySecond = () => {
  const jobs = useLoaderData();
  // console.log(jobs);
  return (
    <div className="body2">
      {/* <h1>job details :{jobs.length}</h1> */}
      <div className="bodyDetails">
        <h1 className="title text1">Job Catagory List</h1>
        <p className="details">
          Explore thousands of job opportunities with all the information you
          need. Its your future
        </p>
      </div>
      <div className="catagory-list">
        {jobs.map((job) => (
          // console.log(job)
          <JobCatagory key={job.id} job={job}></JobCatagory>
        ))}
      </div>
    </div>
  );
};

export default BodySecond;
