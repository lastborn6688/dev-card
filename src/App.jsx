import React, { useContext, useState } from "react";
import Header from "./components/Header";
import JobCard from "./components/JobCard";
import data from "./assets/data.json";
import { ThemeContext } from "./content/ThemeContext";

const App = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const [jobs, setJobs] = useState(data || []);

  const filterJobs = (searchTerm) => {
    let filteredJobs = data;

    // Filter by title/position
    if (searchTerm.title && searchTerm.title.trim() !== "") {
      filteredJobs = filteredJobs.filter((job) =>
        job.position.toLowerCase().includes(searchTerm.title.toLowerCase())
      );
    }

    // Filter by location
    if (searchTerm.location && searchTerm.location.trim() !== "") {
      filteredJobs = filteredJobs.filter((job) =>
        job.location.toLowerCase().includes(searchTerm.location.toLowerCase())
      );
    }

    // Filter by fulltime (contract type)
    if (searchTerm.fulltime === true) {
      filteredJobs = filteredJobs.filter(
        (job) => job.contract.toLowerCase() === "full time"
      );
    }

    setJobs(filteredJobs);
    console.log(filteredJobs);
  };
  return (
    <div
      className={`flex flex-col items-center  min-h-screen w-fit flex-wrap  ${
        theme === "dark" ? "bg-gray-950" : "bg-blue-200"
      } `}
    >
      <Header filterJobs={filterJobs} />
      <main
        className={`mt-28 md:grid-cols-2  grid lg:grid-cols-3 place-items-center gap-y-16 w-screen px-10`}
      >
        {jobs.map((job) => (
          <JobCard key={job.id} job={job} />
        ))}
      </main>
    </div>
  );
};

export default App;
