import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchTransactions } from '../features/transactions/transactionsSlice';

function Home() {
  const dispatch = useDispatch();
  const { transactions } = useSelector((state) => state.transactions);
  const { user } = useSelector((state) => state.auth);

  useEffect(() => {
    dispatch(fetchTransactions());
  }, [dispatch]);

  return (
    <div>
      <h1>Bem-vindo ao Meu Banco, {user ? user.name : 'usuário'}!</h1>
      <h2>Saldo: {user ? user.balance.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' }) : 'R$ 0,00'}</h2>

      <h3>Últimas Transações:</h3>
      <ul>
        {transactions.slice(0, 5).map((transaction) => (
          <li key={transaction.id}>
            {transaction.type}: {transaction.amount.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })} em {new Date(transaction.date).toLocaleDateString()}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Home;