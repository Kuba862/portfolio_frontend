import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Login_form, Input, Button } from '../../assets/styles/Login.styled';

const LoginForm = () => {
    const { register, handleSubmit } = useForm();

    const onSubmit = (data, e) => {
        e.preventDefault();
        console.log(data);
    }

  return (
    <Login_form onSubmit={handleSubmit(onSubmit)}>
        <Input type="text" {...register('email')} />
        <Input type="password" {...register('password')} />
        <Button type="submit">Login</Button>
    </Login_form>
  )
}

export default LoginForm;