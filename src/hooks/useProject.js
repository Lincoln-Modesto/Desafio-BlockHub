import { useState, useCallback } from "react";
import api from "../services/api";

export function LoadUser() {

  const [user, setUser] = useState({});
  const [loading, setLoading] = useState(false);

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

  return { GetProfile, user, loading,  }
}

