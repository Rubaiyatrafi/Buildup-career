import { getStoredDetails } from "../utilities/fakedb";

// console.log(details);

const jobData = async () => {
  const jobsData = await fetch("fakeData.json");
  const singleJ = await jobsData.json();
  const details = getStoredDetails();
  let jobArray = [];
  for (const id in details) {
    const foundJob = singleJ.find((sJob) => sJob.id === id);
    if (foundJob) {
      foundJob.quantity = details[id];
      // jobD.push(foundJob);
      jobArray.push(foundJob);
    }
  }
  return { jobArray, singleJ };
};

export default jobData;
