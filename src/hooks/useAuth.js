import { useState, useEffect } from "react";
import api from "../services/api";
import history from "../pages/history";

export default function useAuth(){
  const [authenticated, setAuthenticated] = useState(false)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const token = localStorage.getItem('token');

    if(token){
      api.defaults.headers.Authorization = `Bearer ${JSON.parse(token)}`;
      setAuthenticated(true)
    }

    setLoading(false)
  },[])

  async function handleLogin(email, password){
    console.log(email)
    console.log(password)
     try{
      const {data} = await api
      .post('/login', {
          email: email,
          password: password
      })

      const token = data?.access_token

      localStorage.setItem('token', JSON.stringify(token));
      api.defaults.headers.Authorization = `Bearer ${token}`;
      setAuthenticated(true);
      history.push('/');
   
     }catch(err){
       console.log(err)
     }
  }

  return {authenticated, loading, handleLogin}
}