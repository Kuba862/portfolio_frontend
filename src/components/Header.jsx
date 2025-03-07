import React, { useContext } from 'react';
import {
  HeaderStyle,
  Logo,
  Navigation
} from '../assets/styles/Header.styled';
import { MainContext } from '../context/MainContext';
import { AuthContext } from '../context/AuthContext';
import LanguageSelector from './Language_selector';
import Login from './Home/Login';
import { Link } from 'react-router-dom';

const Header = ({ openModal, closeModal, modalIsOpen }) => {
  const { t } = useContext(MainContext);
  const { auth } = useContext(AuthContext);
  
  return (
    <HeaderStyle>
      <Logo />
      <Navigation>
        <Link to="/" >{t('header.navbar.portfolio')}</Link>
        <Link to="/blog" >{t('header.navbar.blog')}</Link>
        {auth && <Link to="/admin" >{t('header.navbar.admin')}</Link>}
      </Navigation>
        <Login openModal={openModal} closeModal={closeModal} modalIsOpen={modalIsOpen} />
        <LanguageSelector />
    </HeaderStyle>
  );
};

export default Header;
