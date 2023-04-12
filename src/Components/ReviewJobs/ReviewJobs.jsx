import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoredDetails } from "../../utilities/fakedb";
import "./ReviewJobs.css";
import SingleJob from "../SingleJob/SingleJob";

const ReviewJobs = () => {
  const { jobArray } = useLoaderData();
  // console.log(singleJob);

  // const [job, setJob] = useState([]);

  // useEffect(() => {
  // const details = getStoredDetails();
  // // console.log(details);
  // let newArray = [];
  // for (const id in details) {
  //   const foundJob = singleJob.find((sJob) => sJob.id === id);
  //   if (foundJob) {
  //     foundJob.quantity = details[id];
  //     // jobD.push(foundJob);
  //     newArray.push(foundJob);
  //   }
  // }
  // setJob(newArray);
  // }, []);
  // console.log(jobArray);
  return (
    <div className="jobs-container">
      <h1 className="blog-title">{jobArray.length}</h1>
      {/* <h1 className="blog-title">
        {jobArray.length ? "Review Job Details" : "Sorry Please add a Job"}
      </h1> */}
      {jobArray.map((singleJob) => {
        <SingleJob key={singleJob.id} singleJob={singleJob}></SingleJob>;
      })}
      {/* {jobArray.map((singleJob) => {
        // console.log(singleJob);
        `<h1>{singleJob.company_name}</h1>`;
      })} */}
    </div>
  );
};

export default ReviewJobs;
