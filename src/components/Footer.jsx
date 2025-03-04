import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { IoLogoLinkedin } from 'react-icons/io';
import { FaGithub } from 'react-icons/fa';
import { FooterStyle, ContactButton } from '../assets/styles/Footer.styled';
import LogoImage from '../assets/images/work.webp';
import { MainContext } from '../context/MainContext';

const Footer = () => {
    const navigate = useNavigate();
    const { t, handleContactOpen } = useContext(MainContext);
  return (
    <FooterStyle>
        <ContactButton onClick={handleContactOpen} >{t('footer.contact')}</ContactButton>
      <div className="social">
        <span className="line"></span>
        <span className="icons">
          <a href="/" target="_blank" rel="noreferrer">
            <IoLogoLinkedin />
          </a>
          <a href="/" target="_blank" rel="noreferrer">
            <FaGithub />
          </a>
        </span>
        <span className="line"></span>
      </div>
      <div className="logo" onClick={() => navigate('/')} >
        <img src={LogoImage} alt="Jakub Rejch - Web Developer" />
      </div>
      <div className="copy">
        <p>© 2024 Jakub Rejch - Web Developer</p>
      </div>
    </FooterStyle>
  );
};

export default Footer;
