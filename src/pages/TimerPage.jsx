import React, { useState, useEffect, useRef } from "react";
import { useParams } from "react-router-dom";
import Header from "../components/Header";
import Nav from "../components/Nav";
import { useTasksContext } from "../context/TasksContext";
import { DateTime, Duration } from "luxon";
import { addTimelog } from "../api";

function TimerPage() {
  const { id } = useParams();
  const { tasks } = useTasksContext();
  const intervalRef = useRef();
  const [startTime, setStartTime] = useState(null);
  const [renderTime, setRenderTime] = useState("");
  const [loading, setLoading] = useState(false);
  const [time, setTime] = useState({});

  const foundTask = tasks.find((task) => task.id === Number(id));

  function startTimer() {
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
      taskId: id,
      time: `${time.start} - ${stop}`,
    };

    setLoading(true);
    addTimelog(log).then(() => {
      setLoading(false);
      setStartTime(null);
    });
  }

  function resetTime() {
    setTime({});
    setRenderTime("");
  }

  useEffect(() => {
    if (startTime === null) return;

    intervalRef.current = setInterval(() => {
      const elapsedTime = DateTime.now() - startTime;
      const formattedTime =
        Duration.fromMillis(elapsedTime).toFormat("hh:mm:ss");
      setRenderTime(formattedTime);
    }, 100);

    return () => {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    };
  }, [startTime]);

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
            {renderTime}
          </p>
          <p
            style={{ backgroundColor: foundTask.color }}
            className="px-3 rounded"
          >
            Start time: {time.start}
          </p>

          <p
            style={{ backgroundColor: foundTask.color }}
            className="px-3 selection:rounded"
          >
            Stop time: {time.stop}
          </p>

          <button
            onClick={startTimer}
            className="bg-teal-500 px-2 hover:border-teal-500 rounded"
            disabled={loading}
          >
            Start
          </button>
          <button
            onClick={stopTimer}
            className="bg-teal-500 px-2 hover:border-teal-500 rounded"
            disabled={loading}
          >
            Stop
          </button>
          <button
            onClick={resetTime}
            className="bg-teal-500 px-2 hover:border-teal-500 rounded"
            disabled={loading}
          >
            Reset
          </button>
        </div>
      </div>

      <Nav />
    </div>
  );
}

export default TimerPage;
