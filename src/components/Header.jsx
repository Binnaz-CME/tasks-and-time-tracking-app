import React, { useState } from "react";
import Projects from "../components/Projects";
import Tasks from "../components/Tasks";

function Header({ projects, tasks, title }) {

  const [onProjects, setOnProjects] = useState(true);
  const [onTasks, setOnTasks] = useState(false);

  function handleTabClick(button) {

    if (button === projects) {
      setOnProjects(true)
      setOnTasks(false)
    } else {
      setOnTasks(true)
      setOnProjects(false)
    }
  }

  return (
    <header>
      <div className="header sticky top-0 bg-white shadow-md flex justify-center px-8 py-3 text-3xl">
        <h1>{title}</h1>
      </div>
      {projects || tasks ? (
        <nav id="tabs" className="flex justify-between">
          <button
            onClick={() => handleTabClick(projects)}
            className="w-full border-solid border-2 focus:text-white focus:bg-teal-500 hover:text-teal-500 justify-center inline-block text-center pt-3 pb-1 text-2xl"
          >
            {projects}
          </button>
          <button
            onClick={() => handleTabClick(tasks)}
            className="w-full border-solid border-2 focus:text-white focus:bg-teal-500 hover:text-teal-500 justify-center inline-block text-center pt-3 pb-1 text-2xl"
          >
            {tasks}
          </button>
        </nav>
      ) : null}
      {
        onProjects === true && onTasks === false ? <Projects /> : <Tasks />
      }
    </header>
  );
}

export default Header;
