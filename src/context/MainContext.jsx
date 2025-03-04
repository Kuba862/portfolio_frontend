import React, { createContext, useState, useEffect } from 'react';
import useMultiPosts from '../hooks/useMultiPosts';
import { useTranslation } from 'react-i18next';
import '../i18next.config';
import { BE_URL } from '../utils/URLS';
import axios from 'axios';

export const MainContext = createContext();

const MainContextProvider = ({ children }) => {
    const { posts } = useMultiPosts('http://127.0.0.1:8000/api/v1/posts');
    const { t } = useTranslation();
    const { i18n: { language } } = useTranslation();

  const [ contactIsOpen, setContactIsOpen ] = useState(false);
  const [ contactFormData, setContactFormData ] = useState({
    name: '',
    email: '',
    message: ''
  })

  const handleContactOpen = () => {
    setContactIsOpen(!contactIsOpen);
  }

  const handleContactFormData = (e) => {
    setContactFormData({
      ...contactFormData,
      [e.target.name]: e.target.value
    })
  }

  const sendContactData = async (name, email, message) => {
    try {
      const res = await axios.post(`${BE_URL()}/api/send-message`, {
        name,
        email,
        message
      });
      console.log(res);
    } catch(err) {
      console.log(err);
    }
  }

  return <MainContext.Provider value={{
    posts,
    t,
    language,
    contactIsOpen,
    contactFormData,
    handleContactOpen,
    handleContactFormData,
    sendContactData
  }}>{children}</MainContext.Provider>;
};

export default MainContextProvider;