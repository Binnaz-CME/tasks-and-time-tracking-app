import React, { useState } from "react";
import { addProject, deleteProject } from "../api";
import { useProjectsContext } from "../context/ProjectsContext";
import Form from "./Form";
import List from "./List";

function Projects() {
  const [inputState, setInputState] = useState({
    name: "",
    color: "",
  });

  const { projects, dispatch } = useProjectsContext();

  function handleChange(e) {
    const { name, value } = e.target;
    setInputState({ ...inputState, [name]: value });
  }

  async function handleSubmit(e) {
    
    const newProject = await addProject(inputState);
    dispatch({
      type: "add",
      ...newProject,
    });
    setInputState({ ...inputState, name: "" });
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
      <List list={projects} handleDelete={handleDelete} />
      <Form
        handleSubmit={handleSubmit}
        handleChange={handleChange}
        inputState={inputState}
      />
    </section>
  );
}

export default Projects;
