import React from 'react';
import { useDispatch } from 'react-redux';
import { useForm } from 'react-hook-form';
import { register } from './authSlice';
import CustomInput from '../src/components/Input';
import CustomButton from '../src/components/Button';

function Register() {
  const dispatch = useDispatch();
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    dispatch(register(data));
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <CustomInput label="Nome" {...register('name')} />
      <CustomInput label="Email" {...register('email')} />
      <CustomInput label="Senha" type="password" {...register('password')} />
      <CustomButton type="submit">Registrar</CustomButton>
    </form>
  );
}

export default Register;