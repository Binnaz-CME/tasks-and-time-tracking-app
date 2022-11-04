import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Overview from './pages/Overview';
import Calendar from './pages/Calendar';
import Root from './pages/Root';
import TimerPage from './pages/TimerPage';
import ProjectTasks from './pages/ProjectTasks';
import Timer from './components/Timer';

const router = createBrowserRouter([
  {
    element: <Root />,
    children: [
      {
        path: '/',
        element: <Overview />,
      },
      {
        path: 'project/:id/timer/:id',
        element: <TimerPage />,
      },
      {
        path: 'calendar',
        element: <Calendar />,
      },
      {
        path: 'project/:id',
        element: <ProjectTasks />,
      },
      {
        path: 'timer',
        element: <Timer />,
      }
    ],
  },
]);

function App() {

  return <RouterProvider router={router} />;
}

export default App;
