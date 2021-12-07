import { useState, useEffect } from "react";
import api from "../services/api";
import history from "../pages/history";
import Swal from "sweetalert2";

export default function useAuth() {
  const [authenticated, setAuthenticated] = useState(false)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const token = localStorage.getItem('token');

    if (token) {
      api.defaults.headers.Authorization = `Bearer ${JSON.parse(token)}`;
      setAuthenticated(true)
    }

    setLoading(false)
  }, [])

  async function handleLogin(email, password) {

    try {
      const { data } = await api
        .post('/login', {
          email: email,
          password: password
        })

      const token = data?.access_token

      localStorage.setItem('token', JSON.stringify(token));
      api.defaults.headers.Authorization = `Bearer ${token}`;
      setAuthenticated(true);
      history.push('/');

    } catch (err) {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: `Não foi possível realizar o login, 
        verifique se você possui cadastro ou se digitou 
        suas credenciais corretamente.`,
        confirmButtonText: 'Ok',
      })
      console.log(err)
      }}

    async function handleLogout() {
      localStorage.removeItem('token');
      api.defaults.headers.Authorization = undefined;
      setAuthenticated(false);
      history.push('/login');
    }

    return { authenticated, loading, handleLogin, handleLogout }
  }