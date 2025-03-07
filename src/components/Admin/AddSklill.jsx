import React from 'react';
import { ContactButton } from '../../assets/styles/Footer.styled';
import { useTranslation } from 'react-i18next';
import Input from './Input';

const AddSklill = () => {
  const { t } = useTranslation();
  return (
    <div>
      <ContactButton>{t('admin.add_skill_button')}</ContactButton>
      <form>
        <Input type="text" placeholder="name" />
        <Input type="text" placeholder="learning way pl" />
        <Input type="text" placeholder="learning way en" />
        <Input type="file" placeholder="image" />
      </form>
    </div>
  );
};

export default AddSklill;
