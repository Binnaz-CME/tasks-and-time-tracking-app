import React, { useState } from 'react';
import Header from '../components/Header';
import Nav from '../components/Nav';
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
      <Nav />
    </div>
  );
}

export default Overview;
