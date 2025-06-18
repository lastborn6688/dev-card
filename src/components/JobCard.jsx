import React from "react";

const JobCard = ({job}) => {
  return (
    <div className="bg-white rounded-lg w-full max-w-[17rem] relative px-5 pb-5 pt-8 ">
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
        <h4 className="text-black font-bold text-lg">{job.position}</h4>
        <p>{job.company}</p>
      </div>
      <p className="text-[#5964e0] font-bold mt-5 text-xs">{job.location}</p>
    </div>
  );
};

export default JobCard;