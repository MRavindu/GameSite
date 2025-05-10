import React from "react";
import Logo from "../assets/logo.svg";
import { HiMiniMagnifyingGlassCircle, HiMoon, HiSun } from "react-icons/hi2";
import { useState } from "react";

function Header() {
  //
  const [darkMode, setDarkMode] = useState(true);

  return (
    <div className="flex items-center p-5">
      <img src={Logo} alt="Logo" width={50} />
      <div className="flex bg-slate-200 p-2 w-full mx-5 rounded-full items-center">
        <HiMiniMagnifyingGlassCircle />
        <input
          type="text"
          placeholder="Search Games"
          className="px-5 bg-transparent dark:bg-cyan-500 outline-none"
        />
      </div>

      <div>
        {darkMode ? (
          <HiMoon
            className="text-[35px] bd-slate-200 text-black p-1 rounded-full cursor-pointer"
            onClick={() => setDarkMode(!darkMode)}
          />
        ) : (
          <HiSun
            className="text-[35px] bd-slate-200 text-black p-1 rounded-full cursor-pointer"
            onClick={() => setDarkMode(!darkMode)}
          />
        )}
      </div>
    </div>
  );
}

export default Header;
