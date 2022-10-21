import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Overview from "./pages/Overview";
import Calendar from "./pages/Calendar";
import Root from "./pages/Root";
import Timer from "./pages/Timer";

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
        path: "timer",
        element: <Timer />,
      },
      {
        path: "calendar",
        element: <Calendar />,
      }
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
