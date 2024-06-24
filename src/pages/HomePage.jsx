import React, { useContext } from 'react'
import { Home_style } from '../assets/styles/Home.styled';
import { MainContext } from '../context/MainContext';

const HomePage = () => {
    const { posts } = useContext(MainContext);

  return (
    <>
    <Home_style />
    </>
  )
}

export default HomePage