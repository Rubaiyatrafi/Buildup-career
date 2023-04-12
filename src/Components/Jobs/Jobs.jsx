import React from "react";
import "./Jobs.css";
import img1 from "../../../public/images/Frame-4.png";
import img2 from "../../../public/images/Frame.png";
import ReviewJobs from "../ReviewJobs/ReviewJobs";
import { Link } from "react-router-dom";

const Jobs = ({ jobs, handlereview }) => {
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
  } = jobs;

  return (
    <div className="job-container">
      <div>
        <img className="jobs-img" src={logo} alt="" />
        <h4 className="post-name">{post_name}</h4>
        <h6 className="com-name">{company_name}</h6>
        <div className="work-container">
          <p className="work-details">{work_details.schedule1}</p>
          <p className="work-details">{work_details.schedule3}</p>
        </div>
        <div className="work-container">
          <div className="work-container">
            <img className="location-img" src={img1} alt="" />
            <p className="add-details">{address}</p>
          </div>
          <div className="work-container">
            <img className="location-img" src={img2} alt="" />
            <p className="add-details">{salary}</p>
          </div>
        </div>
        <Link
          onClick={() => handlereview(id)}
          className="btn-review"
          to={`/review/${id}`}
        >
          View Details{" "}
        </Link>
      </div>
    </div>
  );
};

export default Jobs;
