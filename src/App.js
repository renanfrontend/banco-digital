import React from 'react';
import { useDispatch } from 'react-redux';
import { useForm } from 'react-hook-form';
import { addTransaction } from './features/transactions/transactionsSlice';
import CustomInput from '../src/components/Input';
import CustomButton from '../src/components/Button';

function TransactionForm() {
  const dispatch = useDispatch();
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    dispatch(addTransaction(data));
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <CustomInput label="Tipo" {...register('type')} />
      <CustomInput label="Valor" type="number" {...register('amount')} />
      <CustomInput label="Data" type="date" {...register('date')} />
      {/* Adicione outros campos conforme necessário */}
      <CustomButton type="submit">Realizar Transação</CustomButton>
    </form>
  );
}

export default TransactionForm;