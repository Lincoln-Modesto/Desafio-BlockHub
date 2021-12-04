import React, { createContext } from "react";
import { LoadUser } from '../hooks/useProject'
const Context = createContext();


function ProjectProvider({ children }) {

  const { GetProfile, user, loading } = LoadUser();

  return (
    <Context.Provider
      value={{
        user,
        loading,
        GetProfile,
      }}>
      {children}
    </Context.Provider>
  )
}

export { Context, ProjectProvider }