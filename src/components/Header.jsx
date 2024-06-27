import React, { useContext } from 'react';
import {
  Header_style,
  Logo,
  Navigation
} from '../assets/styles/Header.styled';
import { MainContext } from '../context/MainContext';
import Language_selector from './Language_selector';
import Login from './Home/Login';
import { Link } from 'react-router-dom';

const Header = () => {
  const { t } = useContext(MainContext);
  return (
    <Header_style>
      <Logo />
      <Navigation>
        <Link to="/" >{t('header.navbar.portfolio')}</Link>
        <Link to="/blog" >{t('header.navbar.blog')}</Link>
        {/* <li>{t('header.navbar.about')}</li> */}
      </Navigation>
        <Login />
        <Language_selector />
    </Header_style>
  );
};

export default Header;
