import { useState, useContext } from 'react';
import { Context } from '../../context/AuthContext';
import { Link } from 'react-router-dom';

import Logo from '../../assets/logo.svg'

import { Container, Content, Register, TextRegister } from './styles';
import { Input } from '../../components/Input';
import { Button } from '../../components/Button';

export default function Login() {

  const { handleLogin } = useContext(Context);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function handleEmailChange(event) {
    setEmail(event.target.value);
  }

  function handlePasswordChange(event) {
    setPassword(event.target.value);
  }

  return (
    <>
    <Container>
      <Content>
        <img src={Logo} alt="alt" />
      </Content>

      <Input
        placeholder="Email"
        type="email"
        onChange={handleEmailChange}
        value={email} />
      <Input
        placeholder="Senha"
        type="password"
        onChange={handlePasswordChange}
        value={password} />

      <Button 
      type="button"
      onClick={() => handleLogin(email, password)}>
        Entrar</Button>

      <TextRegister>Ainda não tem uma conta? &nbsp;
        <Register as={Link} to="/register">
          Cadastre-se
        </Register>
      </TextRegister>

    </Container>
    </>
  )
}