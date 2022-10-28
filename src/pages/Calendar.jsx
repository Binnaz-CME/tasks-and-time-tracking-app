import React, { useEffect, useState, useMemo } from "react";
import Header from "../components/Header";
import Nav from "../components/Nav";
import { getTimelogs } from "../api";

function Calendar() {
  const [timelogs, setTimelogs] = useState([]);
  const [date, setDate] = useState("");
  const [modified, setModified] = useState(false);

  function handleChange(e) {
    const date = e.target.value;
    setDate(date);
    if (modified) return;
    modifyTimelogs();
  }

  function modifyTimelogs() {
    const newTimelog = timelogs.map((task) => {
      const startDate = task.start.substring(0, 10);
      const stopDate = task.stop.substring(0, 10);
      const startTime = task.start.substring(11, 19);
      const stopTime = task.start.substring(11, 19);
      setModified(true);
      return {
        ...task,
        start: `${startDate}, ${startTime}`,
        stop: `${stopDate}, ${stopTime}`,
      };
    });

    setTimelogs(newTimelog);
  }

  const filtered = useMemo(() => {
    const filteredTimelogs = timelogs.filter((task) => {
      return task.start.includes(date);
    });
    return filteredTimelogs;
  }, [timelogs, date]);

  useEffect(() => {
    getTimelogs().then((res) => {
      setTimelogs(res);
    });
  }, []);

  return (
    <div>
      <Header title="Calendar" />
      <input type="date" value={date} onChange={handleChange} />

      {filtered.map((task) => {
        console.log(task);
        return (
          <div key={task.id}>
            <p>{task.name}</p>
            <p>Start: {task.start}</p>
            <p>Stop: {task.stop}</p>
          </div>
        );
      })}

      <Nav />
    </div>
  );
}

export default Calendar;
