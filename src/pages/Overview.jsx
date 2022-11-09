import React, { useState } from 'react';
import Header from '../components/Header';
import Projects from '../components/Projects';
import Tabs from '../components/Tabs';
import Tasks from '../components/Tasks';

function Overview() {
  const [selected, setSelected] = useState('projects');

  return (
    <div>
      <Header title="Overview" />
      <Tabs setSelected={setSelected} />
      {selected === 'projects' ? <Projects /> : <Tasks />}
    </div>
  );
}

export default Overview;
