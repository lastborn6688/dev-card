import React, { useContext } from "react";
import { ThemeContext } from "../content/ThemeContext";

const JobCard = ({ job }) => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <div
      className={`rounded-lg w-full max-w-[17rem] relative px-5 pb-5 pt-8 ${
        theme === "dark" ? "bg-gray-800" : "bg-white"
      }`}
    >
      <img
        src={job.logo}
        className=" rounded-xl h-20 w-20 object-contain p-3 absolute -top-10 left-4"
        alt="Job"
        // style={{backgroundColor: job.logoBackground}}
      />
      <div className="flex flex-col gap-1 text-[#97a1ac]">
        <span className=" flex gap-3">
          <p>{job.postedAt}</p> • <p>{job.contract}</p>
        </span>
        <h4
          className={`font-bold text-lg ${
            theme === "dark" ? "text-gray-200" : "text-black"
          }`}
        >
          {job.position}
        </h4>
        <p>{job.company}</p>
      </div>
      <p className="text-[#5964e0] font-bold mt-5 text-xs">{job.location}</p>
    </div>
  );
};

export default JobCard;
