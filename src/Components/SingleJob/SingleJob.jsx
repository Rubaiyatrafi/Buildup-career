import React from "react";
import "./SingleJob.css";

const SingleJob = ({ singleJob }) => {
  const {
    id,
    logo,
    company_name,
    post_name,
    email,
    address,
    job_responsibilities,
    job_description,
    educational_requirements,
    experience,
    work_details,
    salary,
  } = singleJob;
  //   console.log(singleJob);
  return (
    <div>
      {/* <h1>{singleJob.length}</h1> */}
      <h1>{job_description}</h1>
      <h2>educational_requirements {educational_requirements}</h2>
    </div>
  );
};

export default SingleJob;
