import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useTasksContext } from '../context/TasksContext';
import { useProjectsContext } from '../context/ProjectsContext';
import { deleteTask, addTask } from '../api';
import Header from '../components/Header';
import Nav from '../components/Nav';
import Form from '../components/Form';
import List from '../components/List';

function ProjectTasks() {
  const { id } = useParams();
  const { tasks, dispatch } = useTasksContext();
  const { projects } = useProjectsContext();

  const foundProject = projects.find((project) => project.id === Number(id));
  const filteredTasks = tasks.filter((task) => task.projectId === Number(id));

  const [inputState, setInputState] = useState({
    name: '',
    color: '#968d8d',
    projectId: Number(id),
  });

  function handleChange(e) {
    const { name, value } = e.target;
    setInputState({ ...inputState, [name]: value });
  }

  async function handleSubmit() {

    const newTask = await addTask(inputState);
    dispatch({
      type: 'add',
      ...newTask,
    });

    setInputState({ ...inputState, name: '' });
  }

  function handleDelete(id) {
    deleteTask(id);
    dispatch({
      type: 'delete',
      id: id,
    });
  }

  return (
    <div>
      <Header title={`Tasks in ${foundProject.name}`} />
      <List list={filteredTasks} handleDelete={handleDelete} />
      <Form
        handleSubmit={handleSubmit}
        handleChange={handleChange}
        inputState={inputState}
      />
      <Nav />
    </div>
  );
}

export default ProjectTasks;
