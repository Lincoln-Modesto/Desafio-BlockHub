import Logo from '../../assets/logo.svg'
import { Container, Content, Register, TextRegister } from './styles';
import { Input } from '../../components/Input';
import { Button } from '../../components/Button';

export default function Login() {
  return (
    <Container>
      <Content>
        <img src={Logo} alt="alt" />
      </Content>
      <Input placeholder="Email" type="email" />
      <Input placeholder="Senha" type="password" />
      <Button type="button">Entrar</Button>
      <TextRegister>Ainda não tem uma conta? &nbsp;
        <Register>Cadastre-se</Register>
      </TextRegister>
    </Container>
  )
}