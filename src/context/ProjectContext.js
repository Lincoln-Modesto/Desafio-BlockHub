import React, { createContext } from "react";
import { LoadUser } from '../hooks/useProject'
const Context = createContext();

function ProjectProvider({ children }) {

  const { GetProfile, user, loading, GetProject, projects } = LoadUser();

  return (
    <Context.Provider
      value={{
        user,
        loading,
        GetProfile,
        GetProject,
        projects
      }}>
      {children}
    </Context.Provider>
  )
}

export { Context, ProjectProvider }