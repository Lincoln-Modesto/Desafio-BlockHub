import React, { createContext } from "react";
import useAuth from "../hooks/useAuth";
const Context = createContext();

function AuthProvider({children}){

  const { authenticated, handleLogin, loading } = useAuth();

  return(
    <Context.Provider value={{authenticated, handleLogin, loading}}>
      {children}
    </Context.Provider>
  )
}

export {Context, AuthProvider}