import React, { useState } from "react";

function Tabs({ setSelected }) {
  
  function handleTabClick(string) {
    setSelected(string);
  }

  return (
    <nav className="flex justify-between">
      <button
        onClick={() => handleTabClick("projects")}
        className="w-full border-solid border-2 focus:text-white  focus:bg-teal-500 hover:text-teal-500 justify-center inline-block text-center pt-3 pb-1 text-2xl"
      >
        Projects
      </button>
    
      <button
        onClick={() => handleTabClick("tasks")}
        className="w-full border-solid border-2 focus:text-white  focus:bg-teal-500 hover:text-teal-500 justify-center inline-block text-center pt-3 pb-1 text-2xl"
      >
        All Tasks
      </button>
    </nav>
  );
}

export default Tabs;
