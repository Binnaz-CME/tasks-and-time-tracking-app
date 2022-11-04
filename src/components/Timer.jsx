import React, { useState, useRef, useEffect } from 'react';
import { useTasksContext } from '../context/TasksContext';
import { useProjectsContext } from '../context/ProjectsContext';
import { DateTime, Duration } from 'luxon';
import { addTimelog } from '../api';
import Header from './Header';
import Nav from './Nav';

function Timer() {
  const { tasks } = useTasksContext();
  const { projects } = useProjectsContext();
  const [filteredTasks, setFilteredTasks] = useState([]);
  const [foundTask, setFoundTask] = useState({});
  const intervalRef = useRef();
  const [startTime, setStartTime] = useState(null);
  const [renderTime, setRenderTime] = useState('');
  const [loading, setLoading] = useState(false);
  const [time, setTime] = useState({});

  function handleProjectsChange(e) {
    const projectId = Number(e.target.value);

    const filtered = tasks.filter((task) => task.projectId == projectId);
    setFilteredTasks(filtered);
  }

  function handleTasksChange(e) {
    const taskId = Number(e.target.value);
    const foundTask = tasks.find((task) => task.id === taskId);
    setFoundTask(foundTask);
  }

  function startTimer() {
    if (!foundTask.name) return;

    setStartTime(DateTime.now());
    const startTimestamp = DateTime.now().toISO();
    const start = DateTime.now(startTimestamp).toLocaleString(
      DateTime.DATETIME_MED_WITH_SECONDS
    );

    setTime({ start });
  }

  async function stopTimer() {
    if (startTime === null) return;

    const stopTimestamp = DateTime.now().toISO();
    const stop = DateTime.now(stopTimestamp).toLocaleString(
      DateTime.DATETIME_MED_WITH_SECONDS
    );

    setTime({ ...time, stop });

    const log = {
      start: startTime,
      stop: stopTimestamp,
      name: foundTask.name,
      taskId: foundTask.id,
      time: `${time.start} - ${stop}`,
      color: foundTask.color,
    };

    setLoading(true);
    addTimelog(log).then(() => {
      setLoading(false);
      setStartTime(null);
    });
  }

  function resetTime() {
    setTime({});
    setRenderTime('');
  }

  useEffect(() => {
    if (startTime === null) return;
    if (!foundTask.name) return;

    intervalRef.current = setInterval(() => {
      const elapsedTime = DateTime.now() - startTime;
      const formattedTime =
        Duration.fromMillis(elapsedTime).toFormat('hh:mm:ss');
      setRenderTime(formattedTime);
    }, 100);

    return () => {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    };
  }, [startTime]);

  return (
    <div>
      <Header title="Timer" />
      <div className="flex justify-center p-3">
        <label className="text-xl">Choose a project:</label>
        <select name="projects" onChange={(e) => handleProjectsChange(e)}>
          <option>--Options--</option>
          {projects.map((project) => (
            <option key={project.id} value={project.id}>
              {project.name.toUpperCase()}
            </option>
          ))}
        </select>
      </div>

      <div className="flex justify-center p-3">
        <label className="text-xl">Choose a task:</label>
        <select className="" name="tasks" onChange={handleTasksChange}>
          <option>--Options--</option>
          {filteredTasks.map((task) => (
            <option key={task.id} value={task.id}>
              {task.name.toUpperCase()}
            </option>
          ))}
        </select>
      </div>

      {foundTask ? (
        <div
          key={foundTask.id}
          style={{ backgroundColor: foundTask.color }}
          className=" bg-slate-100 shadow-md border-2 m-3 rounded p-3"
        >
          <div className="flex flex-col items-center">
            <p className="p-8  m-2 rounded text-4xl font-bold text-white justify-center">
              {renderTime}
            </p>
            <h5 className="px-5 m-2 rounded text-xl">
              Start time:{' '}
              <p className="italic px-5 m-2 rounded">{time.start}</p>
            </h5>

            <h5 className="px-5 m-2 rounded text-xl">
              Stop time: <p className="italic px-5 m-2 rounded">{time.stop}</p>
            </h5>

            <div className="flex m-2 p-3">
              <button
                onClick={startTimer}
                className="bg-teal-500 p-3 m-1 hover:border-teal-500 text-white rounded"
                disabled={loading}
              >
                Start
              </button>
              <button
                onClick={stopTimer}
                className="bg-teal-500 p-3 m-1 hover:border-teal-500 text-white rounded"
                disabled={loading}
              >
                Stop
              </button>
              <button
                onClick={resetTime}
                className="bg-teal-500 p-3 m-1 hover:border-teal-500 text-white rounded"
                disabled={loading}
              >
                Reset
              </button>
            </div>
          </div>
        </div>
      ) : null}

      <Nav />
    </div>
  );
}

export default Timer;
