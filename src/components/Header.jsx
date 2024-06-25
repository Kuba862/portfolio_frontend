import React, { useContext } from 'react';
import { Header_style, Logo, Navigation } from '../assets/styles/Header.styled';
import { MainContext } from '../context/MainContext';
import Language_selector from './Language_selector';

const Header = () => {
  const { t } = useContext(MainContext);
  return (
    <Header_style>
        <Logo />
        <Navigation>
            <li>{t('header.navbar.portfolio')}</li>
            <li>{t('header.navbar.blog')}</li>
            <li>{t('header.navbar.about')}</li>
        </Navigation>
        <Language_selector />
    </Header_style>
  )
}

export default Header