import { Link } from 'react-router-dom';

import home from '../../assets/home.svg';
import work from '../../assets/work.svg';
import document from '../../assets/document.svg';
import logout from '../../assets/logout.svg';
import logo from '../../assets/logo2x.svg';

import {Item, HeaderContainer} from './styles'

export function Header(){
  return(
    <HeaderContainer>
    <img src={logo} alt="logo" />

    <ul className="container-item">
      <Item as={Link} to="/">
        <img src={home} alt="home" />
        <span>&nbsp; Home</span>
      </Item>
      <Item>
        <img src={work} alt="projetos" />
        <span>&nbsp; Horas/Projeto</span>
      </Item>
      <Item>
        <img src={document} alt="relatorios" />
        <span>&nbsp; Relatórios</span>
      </Item>
      <Item>
        <img src={logout} alt="sair" />
        <span>&nbsp; Sair</span>
      </Item>
    </ul>
    </HeaderContainer>
  )
}