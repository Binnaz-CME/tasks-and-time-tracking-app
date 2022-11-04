import React, { useState } from 'react';
import Nav from './Nav';
import { addTask, deleteTask } from '../api';
import { useTasksContext } from '../context/TasksContext';
import Form from './Form';
import List from './List';

function Tasks() {
  const [inputState, setInputState] = useState({
    name: '',
    color: '',
  });


  function handleChange(e) {
    const { name, value } = e.target;
    setInputState({ ...inputState, [name]: value });
    console.log(inputState);
  }

  async function handleSubmit(e) {
    e.preventDefault();
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
  const { tasks, dispatch } = useTasksContext();

  return (
    <section className="m-5">
      <List list={tasks} handleDelete={handleDelete} />
      <Form
        handleSubmit={handleSubmit}
        handleChange={handleChange}
        inputState={inputState}
      />
      <Nav />
    </section>
  );
}

export default Tasks;
