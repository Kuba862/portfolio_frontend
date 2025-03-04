import React, { useContext } from 'react';
import { MainContext } from '../../context/MainContext';
import { ContactStyle, ExitButton } from '../../assets/styles/Contact.styled';
import { ContactButton } from '../../assets/styles/Footer.styled';

const Form = () => {
  const { handleContactOpen, t, handleContactFormData, contactFormData: { name, email, message }, sendContactData } = useContext(MainContext);
  return (
    <ContactStyle>
      <div>
      <ExitButton onClick={handleContactOpen} className="close"></ExitButton>
        <h1>{t('footer.popup_title')}</h1>
        <form onSubmit={(e) => e.preventDefault()} >
          <input name="name" onChange={(e) => handleContactFormData(e)} type="text" placeholder={t('footer.placeholder_name')} />
          <input name="email" onChange={(e) => handleContactFormData(e)} type="email" placeholder={t('footer.placeholder_email')} />
          <textarea name="message" onChange={(e) => handleContactFormData(e)} placeholder={t('footer.placeholder_message')} rows="10" cols="33"></textarea>
          <ContactButton onClick={() => sendContactData(name, email, message)}>{t('footer.button_send')}</ContactButton>
        </form>
      </div>
    </ContactStyle>
  );
};

export default Form;
