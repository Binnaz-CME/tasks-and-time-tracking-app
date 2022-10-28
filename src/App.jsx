import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Overview from "./pages/Overview";
import Calendar from "./pages/Calendar";
import Root from "./pages/Root";
import TimerPage from "./pages/TimerPage";
import ProjectTasks from './pages/ProjectTasks'
import "./App.css";

const router = createBrowserRouter([
  {
    element: <Root />,
    //errorElement: <Error />
    children: [
      {
        path: "/",
        element: <Overview />,
      },
      {
        path: "project/:id/timer",
        element: <TimerPage />,
      },
      {
        path: "calendar",
        element: <Calendar />,
      },
      {
        path: "project/:id",
        element: <ProjectTasks />,
      }
    ],
  },
]);

function App() {

  return <RouterProvider router={router} />;
}

export default App;
