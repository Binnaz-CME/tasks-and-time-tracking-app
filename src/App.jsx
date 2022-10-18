import { useState } from "react";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Overview from "./pages/Overview";
import Calendar from "./pages/Calendar";
import Tasks from "./pages/Tasks";
import { getProjects, getTasks, getCalendar } from "./api";

import "./App.css";

function Root() {
  return <Outlet />;
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    // loader: getProjects,
    children: [
      {
        path: "overview",
        element: <Overview />,
        loader: getProjects,
      },
      {
        path: "tasks",
        element: <Tasks />,
        loader: getTasks,
      },
      {
        path: "calendar",
        element: <Calendar />,
        loader: getCalendar,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
