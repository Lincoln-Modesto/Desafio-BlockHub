import { useState, useCallback } from "react";
import api from "../services/api";

export function LoadUser() {

  const [user, setUser] = useState({});
  const [loading, setLoading] = useState(false);
  const [projects, setProjects] = useState([]);

  const GetProfile = useCallback(async () => {

    try {
      setLoading(true)
      const token = localStorage.getItem('token');

      const { data } = await api.get('/profile', {}, {
        headers: {
          'Authorization': `Bearer ${JSON.parse(token)}`
        }
      })
      setUser(data)
    } catch (err) {
      console.log(err)
    } finally {
      setLoading(false)
    }
  }, [])

  const GetProject = useCallback(async () => {
    try{
      setLoading(true)
      const token = localStorage.getItem('token');
  
      const {data} = await api.get('/project', {}, {
        headers: {
          'Authorization': `Bearer ${JSON.parse(token)}`
        }
      })
      setProjects(data)
    }catch(err){
      console.log(err)
    }finally{
      setLoading(false)
    }
  }, [])

  return { GetProfile, user, loading, GetProject, projects }
}

