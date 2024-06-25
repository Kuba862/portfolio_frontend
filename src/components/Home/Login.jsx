import React from 'react';
import { Login_icon } from '../../assets/styles/Header.styled';
import { FaLock } from 'react-icons/fa';

const Login = () => {
  return (
    <a href="http://127.0.0.1:8000/admin-panel/login-user" target='__blank'>
    <Login_icon>
      <FaLock />
    </Login_icon>
    </a>
  );
};

export default Login;
