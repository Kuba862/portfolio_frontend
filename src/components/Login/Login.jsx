import React from 'react';
import { useForm } from 'react-hook-form';
import { Login_form, Input, Button } from '../../assets/styles/Login.styled';
import useLogin from '../../hooks/useLogin';

const LoginForm = () => {
    const { register, handleSubmit } = useForm();
    const { login } = useLogin();

    const onSubmit = (data) => login(data.email, data.password);

  return (
    <Login_form onSubmit={handleSubmit(onSubmit)}>
        <Input type="text" {...register('email')} placeholder='Email' />
        <Input type="password" {...register('password')} placeholder='Password' />
        <Button type="submit">Login</Button>
    </Login_form>
  )
}

export default LoginForm;