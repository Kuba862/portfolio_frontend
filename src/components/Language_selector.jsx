import React from 'react';
import { useTranslation } from 'react-i18next';
// import { PL, GB } from 'country-flag-icons/react/3x2';
import { LanguageSelectorBox } from '../assets/styles/Header.styled';

const Language_selector = () => {
  const { i18n } = useTranslation();

  const changeLanguage = (e) => {
    i18n.changeLanguage(e.target.value);
  };
  return (
    <LanguageSelectorBox onChange={(e) => changeLanguage(e)} >
      <option value="pl">
          Polski
        </option>
        <option value="en">
          English
        </option>
    </LanguageSelectorBox>
  );
};

export default Language_selector;
