import {
  createContext,
  useReducer,
  useContext,
  useMemo,
  useEffect,
} from "react";

import { getTasks } from "../api";

import { tasksReducer } from "../reducers/projectReducer";

export const TasksContext = createContext(null);

export function TasksProvider({ children }) {
  useEffect(() => {
    async function data() {
      const initial = await getTasks();
      dispatch({
        type: "initialize",
        payload: initial,
      });
      console.log(initial)
    }
    data();
  }, []);

  const [tasks, dispatch] = useReducer(tasksReducer, []);

  const tasksValue = useMemo(() => ({ tasks, dispatch }), [tasks, dispatch]);

  return (
    <TasksContext.Provider value={tasksValue}>{children}</TasksContext.Provider>
  );
}

export function useTasksContext() {
  const context = useContext(TasksContext);

  if (!context) {
    throw new Error("useTasksContext is outside of ProjectsProvider");
  }

  return context;
}
