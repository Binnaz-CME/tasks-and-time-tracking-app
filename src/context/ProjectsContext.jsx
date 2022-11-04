import React from 'react';
import {
  createContext,
  useReducer,
  useContext,
  useMemo,
  useEffect,
} from 'react';
import { getProjects } from '../api';
import { projectReducer } from '../reducers/projectReducer';

export const ProjectsContext = createContext(null);

export function ProjectsProvider({ children }) {

  useEffect(() => {
    async function data() {
      const initial = await getProjects();
      dispatch({
        type: 'initialize',
        payload: initial,
      });
    }

    data();
  }, []);

  const [projects, dispatch] = useReducer(projectReducer, []);

  const projectValue = useMemo(
    () => ({ projects, dispatch }),
    [projects, dispatch]
  );

  return (
    <ProjectsContext.Provider value={projectValue}>
      {children}
    </ProjectsContext.Provider>
  );
}

export function useProjectsContext() {
  const context = useContext(ProjectsContext);

  if (!context) {
    throw new Error('useProjectsContext is outside of ProjectsProvider');
  }

  return context;
}
