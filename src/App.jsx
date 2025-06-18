import React, { useContext } from "react";
import Header from "./components/header";
import JobCard from "./components/JobCard";
import data from "./assets/data.json";
import { ThemeContext } from "./content/ThemeContext";

const App = () => {
    const { theme, } = useContext(ThemeContext);
  
  return (
    <div className={`flex flex-col items-center  min-h-screen  ${
        theme === "dark" ? "dark:bg-gray-200" : "bg-blue-950"
      } `}>
      <Header />
      <main className="mt-28 md:grid-cols-2 grid lg:grid-cols-3 place-items-center gap-y-16 w-screen px-10">
        {data.map((job) => (
          <JobCard key={job.id} job={job} />
        ))}
      </main>
    </div>
  );
};

export default App;
