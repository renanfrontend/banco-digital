import React from 'react';
import { useDispatch } from 'react-redux';
import { useForm } from 'react-hook-form';
import { login } from './authSlice';
import CustomInput from '../src/components/Input';
import CustomButton from '../src/components/Button';

function Login() {
  const dispatch = useDispatch();
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    dispatch(login(data));
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <CustomInput label="Email" {...register('email')} />
      <CustomInput label="Senha" type="password" {...register('password')} />
      <CustomButton type="submit">Entrar</CustomButton>
    </form>
  );
}

export default Login;