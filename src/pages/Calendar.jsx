import React, { useEffect, useState, useMemo } from "react";
import Header from "../components/Header";
import Nav from "../components/Nav";
import { getTimelogs } from "../api";

function Calendar() {
  const [timelogs, setTimelogs] = useState([]);
  const [date, setDate] = useState("");

  useEffect(() => {
    getTimelogs().then((res) => {
      setTimelogs(res);
    });
  }, []);

  function handleChange(e) {
    const date = e.target.value
    console.log(date)
    setDate(date);
  }

  const filtered = useMemo(() => {
    const filteredTimelogs = timelogs.filter((task) => {
      return task.start.includes(date);
    });
    return filteredTimelogs;
  }, [timelogs, date]);

  return (
    <div>
      <Header title="Calendar" />
      <input type="date" value={date} onChange={handleChange} />

      {filtered.map((task) => {
        return (
          <div key={task.id}>
            <p>{task.name}</p>
            <p>Time: {task.time}</p>
          </div>
        );
      })}

      <Nav />
    </div>
  );
}

export default Calendar;
