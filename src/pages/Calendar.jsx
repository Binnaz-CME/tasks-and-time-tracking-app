import React, { useEffect, useState, useMemo } from 'react';
import Header from '../components/Header';
import { getTimelogs, deleteTimelog } from '../api';
import { AiOutlineClose } from 'react-icons/ai';

function Calendar() {
  const [timelogs, setTimelogs] = useState([]);
  const [date, setDate] = useState('');

  useEffect(() => {
    getTimelogs().then((res) => {
      setTimelogs(res);
    });
  }, []);

  function handleChange(e) {
    const date = e.target.value;
    setDate(date);
  }

  async function handleDelete(id) {
    await deleteTimelog(id);
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
      <input className='flex m-3 text-xl shadow-md border-2 justify-center' type="date" value={date} onChange={handleChange} />

      {filtered.map((task) => {
        return (
          <div key={task.id} className="bg-slate-100 shadow-md border-2 flex justify-between text-xl m-3 rounded">
            <p className="m-3 font-bold" style={{ color: task.color }} >{task.name.toUpperCase()}</p>
            <p className="m-3 font-light italic text-sm">Time: {task.time}</p>
            <button
              onClick={() => handleDelete(task.id)}
              className="bg-teal-500 px-2 hover:border-teal-500 rounded"
            >
              <AiOutlineClose color="white" size="1em" />
            </button>
          </div>
        );
      })}
    </div>
  );
}

export default Calendar;
