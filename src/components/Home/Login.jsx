import React, { useContext } from 'react';
import { Login_icon } from '../../assets/styles/Header.styled';
import { FaLock, FaLockOpen } from 'react-icons/fa';
import { AuthContext } from '../../context/AuthContext';

const Login = ({ openModal, closeModal, modalIsOpen }) => {
  const { auth, logoutContext } = useContext(AuthContext);

  const modalHandler = () => {
    if(modalIsOpen) {
      closeModal();
    } else {
      openModal();
    }
  }

  return (
    <Login_icon onClick={auth ? logoutContext : modalHandler}>
      {auth ? <FaLockOpen /> : <FaLock />}
    </Login_icon>
  );
};

export default Login;
