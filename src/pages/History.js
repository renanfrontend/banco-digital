import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchTransactions } from '../features/transactions/transactionsSlice';

function History() {
  const dispatch = useDispatch();
  const { transactions } = useSelector((state) => state.transactions);

  useEffect(() => {
    dispatch(fetchTransactions());
  }, [dispatch]);

  return (
    <div>
      <h1>Histórico de Movimentações</h1>
      <ul>
        {transactions.map((transaction) => (
          <li key={transaction.id}>
            {transaction.type}: {transaction.amount.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })} em {new Date(transaction.date).toLocaleDateString()}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default History;