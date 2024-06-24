import { createContext } from 'react';
import useMultiPosts from '../hooks/useMultiPosts';

export const MainContext = createContext();

const MainContextProvider = ({ children }) => {
    const { posts } = useMultiPosts('http://127.0.0.1:8000/api/v1/posts');
  return <MainContext.Provider value={{
    posts
  }}>{children}</MainContext.Provider>;
};

export default MainContextProvider;
