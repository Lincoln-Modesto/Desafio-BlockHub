import Logo from '../../assets/logo.svg'
import arrowLeft from '../../assets/arrowLeft.svg'

import { Container, Content } from '../Login/styles';
import { GoBack } from './styles';
import { Input } from '../../components/Input';
import { Button } from '../../components/Button';
import { Link } from 'react-router-dom';

export default function Register() {
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
      
      <Input placeholder="Nome" type="text" />
      <Input placeholder="Email" type="email" />
      <Input placeholder="Senha" type="password" />
      <Button type="button">Registrar</Button>
    </Container>
  )
}