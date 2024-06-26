import { createContext } from 'react';
import useMultiPosts from '../hooks/useMultiPosts';
import { useTranslation } from 'react-i18next';
import '../i18next.config';

export const MainContext = createContext();

const MainContextProvider = ({ children }) => {
    const { posts } = useMultiPosts('http://127.0.0.1:8000/api/v1/posts');
    const { t } = useTranslation();
    const { i18n: { language } } = useTranslation();
  return <MainContext.Provider value={{
    posts,
    t,
    language
  }}>{children}</MainContext.Provider>;
};

export default MainContextProvider;