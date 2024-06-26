import React from 'react';
import { useTranslation } from 'react-i18next';
// import { PL, GB } from 'country-flag-icons/react/3x2';
import { Language_selector_box } from '../assets/styles/Header.styled';

const Language_selector = () => {
  const { i18n } = useTranslation();

  const changeLanguage = (e) => {
    i18n.changeLanguage(e.target.value);
  };
  return (
    <Language_selector_box onChange={(e) => changeLanguage(e)} >
        <option value="en">
          English
        </option>
        <option value="pl">
          Polski
        </option>
    </Language_selector_box>
  );
};

export default Language_selector;
