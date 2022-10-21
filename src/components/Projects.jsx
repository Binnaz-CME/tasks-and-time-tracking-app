import React, { useState } from "react";
import { addProject, deleteProject } from "../api";
import { useProjectsContext } from "../context/ProjectsContext";
import { AiOutlineClose } from "react-icons/ai";

function Projects() {
  const [state, setState] = useState({
    name: "",
    color: "",
  });

  const { projects, dispatch } = useProjectsContext();
  // console.log("projects:", projects);

  function handleChange(e) {
    const { name, value } = e.target;
    setState({ ...state, [name]: value });
  }

  async function handleSubmit(e) {
    e.preventDefault();
    const newProject = await addProject(state);
    dispatch({
      type: "add",
      ...newProject,
    });
    setState({ ...state, name: "" });
  }

  function handleDelete(id) {
    deleteProject(id);
    dispatch({
      type: "delete",
      id: id,
    });
  }

  return (
    <section className="m-5">
      <div>
        {projects.map((project) => {
          return (
            <div
              key={project.id}
              className="bg-slate-100 shadow-md border-2 flex justify-between text-xl m-3 rounded"
            >
              <div className="flex">
                <span
                  style={{ backgroundColor: project.color }}
                  className="px-3 w-2 rounded"
                ></span>
                <p className="m-3">{project.name}</p>
              </div>
              <button
                onClick={() => handleDelete(project.id)}
                className="bg-teal-500 px-2 hover:border-teal-500 rounded"
              >
                <AiOutlineClose color="white" size="1em" />
              </button>
            </div>
          );
        })}
      </div>

      <form onSubmit={handleSubmit}>
        <div className="flex m-3">
          <input
            placeholder="Input project name"
            className="grow h-12 border-2"
            type="text"
            name="name"
            value={state.name}
            onChange={handleChange}
          />

          <input
            className="grow h-12"
            type="color"
            name="color"
            value={state.color}
            // defaultValue="#000000"
            onChange={handleChange}
          />
        </div>
        <div className="flex flex-col">
          <input
            className="bg-teal-500 hover:bg-teal-400 text-white font-bold py-2 px-4 border-b-4 border-teal-700 hover:border-teal-500 rounded m-3 grow"
            type="submit"
            value="Add new project"
          />
        </div>
      </form>
    </section>
  );
}

export default Projects;
