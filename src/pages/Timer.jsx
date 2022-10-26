import React from "react";
import { useParams } from "react-router-dom";
import Header from "../components/Header";
import Nav from "../components/Nav";
import { useTasksContext } from "../context/TasksContext";

function Timer() {
  const { id } = useParams();
  const { tasks } = useTasksContext();

  const foundTask = tasks.find((task) => task.id === Number(id));
  console.log(foundTask);

  return (
    <div>
      <Header title={foundTask.name} />
      <div
        key={foundTask.id}
        className="bg-slate-100 shadow-md border-2  text-xl m-3 rounded"
      >
        <div className="flex flex-col">
          <p
            style={{ backgroundColor: foundTask.color }}
            className="px-3 rounded"
          >
            Start time:
          </p>
          <p
            style={{ backgroundColor: foundTask.color }}
            className="px-3 selection:rounded"
          >
            Stop time:
          </p>
          <button
            // onClick={startTimer}
            className="bg-teal-500 px-2 hover:border-teal-500 rounded"
          >
            Start
          </button>

          <button
            // onClick={stopTimer}
            className="bg-teal-500 px-2 hover:border-teal-500 rounded"
          >
            Stop{" "}
          </button>
        </div>
      </div>

      <Nav />
    </div>
  );
}

export default Timer;
