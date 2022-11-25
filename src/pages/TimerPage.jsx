import React, { useState, useEffect, useRef } from 'react';
import { useParams } from 'react-router-dom';
import Header from '../components/Header';
import Nav from '../components/Nav';
import { useTasksContext } from '../context/TasksContext';
import { DateTime, Duration } from 'luxon';
import { addTimelog } from '../api';

function TimerPage() {
  const { id } = useParams();
  const { tasks } = useTasksContext();
  const intervalRef = useRef();
  const [startTime, setStartTime] = useState(null);
  const [renderTime, setRenderTime] = useState('');
  const [loading, setLoading] = useState(false);
  const [time, setTime] = useState({});
  const [elapsedTime, setElapsedTime]= useState(null);

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

    const stopTime = DateTime.now().toISO();
    const stop = DateTime.now(stopTime).toLocaleString(
      DateTime.DATETIME_MED_WITH_SECONDS
    );

    setTime({ ...time, stop });

    const log = {
      start: startTime,
      stop: stopTime,
      elapsedTime: elapsedTime,
      name: foundTask.name,
      taskId: id,
      time: `${time.start} - ${stop}`,
      color: foundTask.color,
    };

    console.log(log);

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

    intervalRef.current = setInterval(() => {
      const elapsedTime = DateTime.now() - startTime;
      setElapsedTime(elapsedTime);
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
      <Header title={foundTask.name} />
      <div
        key={foundTask.id}
        style={{ backgroundColor: foundTask.color }}
        className=" bg-slate-100 shadow-md border-2 m-3 rounded p-3"
      >
        <div className="flex flex-col items-center">
          <p className="p-8  m-2 rounded text-4xl font-bold text-white justify-center">
            {renderTime}
          </p>
          <h5 className="px-5 m-2 rounded text-xl">Start time: <p className="italic px-5 m-2 rounded">{time.start}</p></h5>

          <h5 className="px-5 m-2 rounded text-xl">Stop time: <p className="italic px-5 m-2 rounded">{time.stop}</p></h5>
          
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

      <Nav />
    </div>
  );
}

export default TimerPage;
