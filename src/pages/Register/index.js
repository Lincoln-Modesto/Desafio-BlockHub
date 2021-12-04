import { useState } from 'react';
import Swal from 'sweetalert2'

import Logo from '../../assets/logo.svg'
import arrowLeft from '../../assets/arrowLeft.svg'

import { Container, Content } from '../Login/styles';
import { GoBack } from './styles';
import { Input } from '../../components/Input';
import { Button } from '../../components/Button';
import { Link } from 'react-router-dom';
import api from '../../services/api';
import history from '../history';

export default function Register() {

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  function handleName(event){
    setName(event.target.value)
  }

  function handleEmail(event){
    setEmail(event.target.value)
  }

  function handlePassword(event){
    setPassword(event.target.value)
  }

  function handleRegister(){
    try{
      api.post('/register', {
        name: name,
        email: email,
        password: password
      })

     Swal.fire({ 
        title: 'Cadastro realizado com sucesso!',
        confirmButtonText: 'Save',
        icon: 'success', 
      }).then(() => {
        history.push('/login')
      })
    }catch(err){}
  }
  
  return (
    <Container>

      <Link to="/login">
        <GoBack>
          <img src={arrowLeft} alt="voltar" />
          <span>&nbsp; Voltar</span>
        </GoBack>
      </Link>

      <Content>
        <img src={Logo} alt="logo" />
      </Content>
      
      <Input
      placeholder="Nome"
      type="text"
      value={name}
      onChange={handleName}/>

      <Input
      placeholder="Email"
      type="email"
      value={email}
      onChange={handleEmail}
      />

      <Input
      placeholder="Senha"
      type="password"
      value={password}
      onChange={handlePassword}/>

      <Button 
      type="button"
      onClick={handleRegister}>Registrar</Button>
    </Container>
  )
}