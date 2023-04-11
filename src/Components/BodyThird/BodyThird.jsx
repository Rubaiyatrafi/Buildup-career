import React, { useEffect, useState } from "react";
import Jobs from "../Jobs/Jobs";

const BodyThird = () => {
  const [jobsList, setJobsList] = useState([]);
  useEffect(() => {
    fetch("fakeData.json")
      .then((res) => res.json())
      .then((data) => setJobsList(data));
  }, []);
  return (
    <div>
      {jobsList.map((jobs) => (
        <Jobs key={jobs.id} jobs={jobs}></Jobs>
      ))}
    </div>
  );
};

export default BodyThird;
