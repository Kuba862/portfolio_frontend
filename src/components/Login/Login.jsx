import React, { useContext, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { AuthContext } from '../../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import { Login_form, Input, Button } from '../../assets/styles/Login.styled';
import useLogin from '../../hooks/useLogin';

const LoginForm = () => {
    const { register, handleSubmit } = useForm();
    const { auth } = useContext(AuthContext);
    const { login } = useLogin();
    const navigate = useNavigate();

    const onSubmit = (data) => login(data.email, data.password);
    
    useEffect(() => {
        if(auth) {
            navigate('/admin');
        }
    }, [auth, navigate]);

  return (
    <Login_form onSubmit={handleSubmit(onSubmit)}>
        <Input type="text" {...register('email')} placeholder='Email' />
        <Input type="password" {...register('password')} placeholder='Password' />
        <Button type="submit">Login</Button>
    </Login_form>
  )
}

export default LoginForm;