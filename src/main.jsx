import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { ProjectsProvider } from "./context/ProjectsContext";
import { TasksProvider } from "./context/TasksContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
      <ProjectsProvider>
        <TasksProvider>
          <App />
        </TasksProvider>
      </ProjectsProvider>
  </React.StrictMode>
);
