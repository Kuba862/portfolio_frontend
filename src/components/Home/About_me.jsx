import React, { useContext } from 'react';
import { MySectionText } from '../../assets/styles/Home.styled';
import { MainContext } from '../../context/MainContext';

const AboutMe = () => {
    const { t } = useContext(MainContext);
  return (
    <MySectionText>
      <p>{t('about_me.first_paragraph')}</p>
      <p>{t('about_me.second_paragraph')}</p>
      <p>{t('about_me.third_paragraph')}</p>
      <p>{t('about_me.fourth_paragraph')}</p>
      <p>{t('about_me.fifth_paragraph')}</p>
      <p>{t('about_me.sixth_paragraph')}</p>
      <p>{t('about_me.seventh_paragraph')}</p>
    </MySectionText>
  );
};

export default AboutMe;
