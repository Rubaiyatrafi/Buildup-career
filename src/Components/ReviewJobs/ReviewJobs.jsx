import React from "react";
import { useLoaderData } from "react-router-dom";

const ReviewJobs = () => {
  const singleJob = useLoaderData();
  console.log(singleJob);
  return (
    <div>
      <h1>name: {singleJob.length}</h1>
    </div>
  );
};

export default ReviewJobs;
