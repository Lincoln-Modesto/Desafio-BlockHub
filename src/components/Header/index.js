import { useContext } from 'react';
import { Link } from 'react-router-dom';

import home from '../../assets/home.svg';
import work from '../../assets/work.svg';
import logout from '../../assets/logout.svg';
import logo from '../../assets/logo2x.svg';

import {Item, HeaderContainer} from './styles'

import { Context } from '../../context/AuthContext'

export function Header(){

  const { handleLogout } = useContext(Context)

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
      <Item onClick={handleLogout}>
        <img src={logout} alt="sair" />
        <span>&nbsp; Sair</span>
      </Item>
    </ul>
    </HeaderContainer>
  )
}