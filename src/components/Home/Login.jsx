import React from 'react';
import { Login_icon } from '../../assets/styles/Header.styled';
import { FaLock } from 'react-icons/fa';

const Login = ({ openModal, closeModal, modalIsOpen }) => {

  const modalHandler = () => {
    if(modalIsOpen) {
      closeModal();
    } else {
      openModal();
    }
  }

  return (
    <Login_icon onClick={modalHandler}>
      <FaLock />
    </Login_icon>
  );
};

export default Login;
