import React, { useContext } from 'react';
import { My_section_text } from '../../assets/styles/Home.styled';
import { MainContext } from '../../context/MainContext';

const About_me = () => {
    const { t } = useContext(MainContext);
  return (
    <My_section_text>
      <p>{t('about_me.first_paragraph')}</p>
      <p>{t('about_me.second_paragraph')}</p>
      <p>{t('about_me.third_paragraph')}</p>
      <p>{t('about_me.fourth_paragraph')}</p>
      <p>{t('about_me.fifth_paragraph')}</p>
      <p>{t('about_me.sixth_paragraph')}</p>
      <p>{t('about_me.seventh_paragraph')}</p>
    </My_section_text>
  );
};

export default About_me;
