import React from "react";
import "./JobCatagory.css";

const JobCatagory = ({ job }) => {
  const { id, logo, job_title, job_available } = job;
  return (
    <div className="catagory">
      <img className="icon" src={logo} alt="" />
      <h4 className="job-title">{job_title}</h4>
      <h5 className="job-available">{job_available}</h5>
    </div>
  );
};

export default JobCatagory;
