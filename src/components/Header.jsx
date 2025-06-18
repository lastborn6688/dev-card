import React, { useContext } from "react";
import { FaSun } from "react-icons/fa";
import { IoMoon } from "react-icons/io5";
import { FaMagnifyingGlass } from "react-icons/fa6";
import { FaLocationDot } from "react-icons/fa6";
import { IoToggle } from "react-icons/io5";
import { ThemeContext } from "../content/ThemeContext";

const Header = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  return (
    <header
      data-theme={theme}
      className={` ${
        theme === "dark" ? "dark:bg-blue-950" : "bg-[#5964e0]"
      }   w-full flex flex-col items-center text-white px-44 py-10  rounded-bl-[6rem] relative`}
    >
      <div className="flex justify-between w-full mb-10">
        <h3 className="text-2xl font-bold">devjobs</h3>
        <div className="flex gap-5 items-center text-2xl bg-gradient-to-r from-yellow-400 to-black rounded-lg w-fit p-2">
          <FaSun className="text-yellow-300" />
          <input
            type="checkbox"
            onChange={toggleTheme}
            defaultChecked
            className="toggle "
            checked={theme === "dark" ? true : false}
          />
          <IoMoon className="text-gray-300" />
        </div>
      </div>
      <form className={`flex ${
        theme === "dark" ? "bg-gray-700 text-white" : "bg-gray-300 text-black"
      }    gap-0 px-3 *:flex *:items-center *:gap-3 rounded-lg -bottom-10 absolute `}>
        <div className="border-r dark:border-gray-950 border-gray-100 px-3 py-5 w-full max-w-[23rem]">
          <FaMagnifyingGlass className="text-[#5964e0]" />
          <input
            className="w-full"
            placeholder="Filter by title,companies,expertise..."
            type="text"
          />
        </div>
        <div className="border-r dark:border-gray-950 border-gray-100 px-3  py-5 w-full max-w-[23rem]">
          <FaLocationDot className="text-[#5964e0]" />
          <input
            type="text"
            className="w-full"
            placeholder="Filter by location"
          />
        </div>
        <div className="w-2xl px-3 py-5">
          <input type="checkbox" name="fulltime" />
          <label htmlFor="fulltime" className="font-bold text-[17px] w-full">
            Full time only
          </label>
          <button className="bg-[#5964e0] hover:bg-blue-950 dark:bg-blue-800 dark:hover:bg-[#5964e0] ml-5 self-center h-12 w-full  text-white px-5 py-3 flex justify-center items-center rounded-md">
            search
          </button>
        </div>
      </form>
    </header>
  );
};

export default Header;
