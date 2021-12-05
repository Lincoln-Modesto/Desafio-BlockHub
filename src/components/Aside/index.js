import { Link } from 'react-router-dom';

import home from '../../assets/home.svg';
import work from '../../assets/work.svg';
import document from '../../assets/document.svg';
import logout from '../../assets/logout.svg';
import userImg from '../../assets/user.svg';
import logo from '../../assets/logo2x.svg';

import {Email, Name, Item, SideBar, Logo} from './styles'

export function Aside({user}){
  return(
    <SideBar>
    <Logo src={logo} alt="logo" />
    <img src={userImg} alt="user" />

    <Name>{user?.name}</Name>
    <Email>{user?.email}</Email>

    <div className="container-item">
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
    </div>
  </SideBar>
  )
}