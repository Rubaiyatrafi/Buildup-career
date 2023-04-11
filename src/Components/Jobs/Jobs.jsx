import React from "react";
import "./Jobs.css";

const Jobs = ({ jobs }) => {
  const { id, logo } = jobs;
  return (
    <div>
      <img src={logo} alt="" />
    </div>
  );
};

export default Jobs;
