import React, { useContext, useState } from "react";
import { FaSun } from "react-icons/fa";
import { IoMoon } from "react-icons/io5";
import { FaMagnifyingGlass } from "react-icons/fa6";
import { FaLocationDot } from "react-icons/fa6";
import { IoToggle } from "react-icons/io5";
import { ThemeContext } from "../content/ThemeContext";

const Header = ({ filterJobs }) => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const [formData, setFormdata] = useState({
    title: "",
    location: "",
    fulltime: false,
  });

  const handleInputChange = (event) => {
    console.log(event.target.name, event.target.value, event.target.checked);
    const value =
      event.target.type === "checkbox"
        ? event.target.checked
        : event.target.value;
    setFormdata((prevFormdata) => ({
      ...prevFormdata,
      [event.target.name]: value,
    }));
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    filterJobs(formData);
    console.log(formData);
  };
  return (
    <header
      data-theme={theme}
      className={`w-full flex flex-col items-center text-white ${
        theme === "dark" ? "bg-blue-950" : "bg-[#1a70d2]"
      } px-6 md:px-44 py-10 rounded-bl-[6rem] relative`}
    >
      {/* Top navbar */}
      <div className="flex flex-wrap justify-between items-center w-full gap-4 mb-10">
        <h3 className="text-2xl font-bold">devjobs</h3>
        <div className="flex gap-2 items-center text-xl">
          <FaSun className="text-yellow-300" />
          <input
            type="checkbox"
            onChange={toggleTheme}
            checked={theme === "dark"}
            className="toggle"
          />
          <IoMoon className="text-gray-300" />
        </div>
      </div>

      {/* Form Search Bar */}
      <form
        onSubmit={handleSubmit}
        className={`flex flex-col md:flex-row items-stretch md:items-center ${
          theme === "dark" ? "bg-gray-200 text-white" : "bg-gray-300 text-black"
        } gap-4 px-3 py-4 *:flex *:items-center *:gap-3 rounded-lg absolute -bottom-24 md:-bottom-10 w-full max-w-7xl`}
      >
        {/* Title input */}
        <div className="border-b md:border-b-0 md:border-r border-gray-100 px-3 py-5 w-full max-w-[23rem]">
          <FaMagnifyingGlass className="text-[#5964e0]" />
          <input
            onChange={handleInputChange}
            className="w-full bg-transparent outline-none"
            name="title"
            placeholder="Filter by title, companies, expertise..."
            type="text"
          />
        </div>

        {/* Location input */}
        <div className="border-b md:border-b-0 md:border-r dark:border-gray-950 border-gray-100 px-3 py-5 w-full max-w-[23rem]">
          <FaLocationDot className="text-[#5964e0]" />
          <input
            type="text"
            name="location"
            onChange={handleInputChange}
            className="w-full bg-transparent outline-none"
            placeholder="Filter by location"
          />
        </div>

        {/* Fulltime + button */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 px-3 py-5 w-full max-w-[23rem]">
          <div className="flex items-center gap-2">
            <input
              type="checkbox"
              name="fulltime"
              onChange={handleInputChange}
            />
            <label htmlFor="fulltime" className="font-bold text-[17px]">
              Full time only
            </label>
          </div>
          <button
            type="submit"
            className="bg-[#5964e0] hover:bg-blue-950 h-12 w-full md:w-auto text-white px-5 py-3 flex justify-center items-center rounded-md"
          >
            search
          </button>
        </div>
      </form>
    </header>
  );
};

export default Header;
