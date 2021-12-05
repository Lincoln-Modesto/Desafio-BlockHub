import React, { createContext } from "react";
import useProject from '../hooks/useProject'
const Context = createContext();

function ProjectProvider({ children }) {

  const { 
    GetProfile, 
    user, 
    loading, 
    
    GetProject, 
    projects,
  
    GetHours,
    hours} = useProject();

  return (
    <Context.Provider
      value={{
        GetProfile,
        user,
        loading,
        
        GetProject,
        projects,

        GetHours,
        hours
      }}>
      {children}
    </Context.Provider>
  )
}

export { Context, ProjectProvider }