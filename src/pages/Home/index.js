import user from '../../assets/user.svg';
import logo from '../../assets/logo2x.svg';
import plus from '../../assets/plus.svg';
import document from '../../assets/document.svg';

import { Container, SideBar } from "../../components/Container";
import { Input } from '../../components/Input'
import { ContainerMain, Email, Name, Logo, Item } from "./styles";
import { Card } from '../../components/Card';

export default function Home() {
  return (
    <ContainerMain>
      <SideBar>
        <Logo src={logo} alt="logo" />
        <img src={user} alt="user" />

        <Name>Lincoln Costa Modesto</Name>
        <Email>lincoln@dev.com</Email>

        <div className="container-item">
          <Item>
            <img src={plus} alt="cadastrar projeto" />
            <span>&nbsp; Cadastrar Projeto</span>
          </Item>
          <Item>
            <img src={document} alt="relatorios" />
            <span>&nbsp; Relatórios</span>
          </Item>
        </div>
      </SideBar>

      <Container>

        <div className="container-inputs">
          <Input placeholder="Pesquisar por Projeto" type="text" />
          <Input placeholder="Pesquisar por Data" type="date" />
        </div>

        <h3>Projetos</h3>

        <div className="container-cards">
          <Card>
            <strong>12/12/21 - </strong>
            <strong>Projeto Fintech - </strong>
            <span> 49 horas trabalhadas</span>
          </Card>
          <Card>
            <strong>12/12/21 - </strong>
            <strong>Projeto Fintech - </strong>
            <span> 49 horas trabalhadas</span>
          </Card>
        </div>
      </Container>
    </ContainerMain>
  )
}