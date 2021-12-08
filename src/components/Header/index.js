import { useContext } from 'react';
import { Link } from 'react-router-dom';

import home from '../../assets/home.svg';
import logout from '../../assets/logout.svg';
import logo from '../../assets/logo2x.svg';

import { Item, HeaderContainer } from './styles'

import { Context } from '../../context/AuthContext'

export function Header() {

  const { handleLogout } = useContext(Context)

  return (
    <HeaderContainer>
      <Link to="/">
        <img src={logo} alt="logo" />
      </Link>

      <ul className="container-item">
        <Item as={Link} to="/">
          <img src={home} alt="home" />
          <span>&nbsp; Home</span>
        </Item>
        <Item onClick={handleLogout}>
          <img src={logout} alt="sair" />
          <span>&nbsp; Sair</span>
        </Item>
      </ul>
    </HeaderContainer>
  )
}