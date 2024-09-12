import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// Async Thunk para buscar transações
export const fetchTransactions = createAsyncThunk('transactions/fetchTransactions', async () => {
  const response = await axios.get('http://localhost:3001/transactions'); // Endpoint correto
  return response.data;
});

// Async Thunk para adicionar uma transação
export const addTransaction = createAsyncThunk('transactions/addTransaction', async (transactionData) => {
  const response = await axios.post('http://localhost:3001/transactions', transactionData); // Endpoint correto
  return response.data;
});

const transactionsSlice = createSlice({
  name: 'transactions',
  initialState: {
    transactions: [],
    loading: false,
    error: null,
  },
  reducers: {
    // Outros reducers que você possa precisar (ex: editar, deletar)
    // Exemplo de reducer para deletar uma transação
    deleteTransaction: (state, action) => {
      state.transactions = state.transactions.filter(transaction => transaction.id !== action.payload);
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchTransactions.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchTransactions.fulfilled, (state, action) => {
        state.loading = false;
        state.transactions = action.payload;
      })
      .addCase(fetchTransactions.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(addTransaction.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(addTransaction.fulfilled, (state, action) => {
        state.loading = false;
        state.transactions.push(action.payload); // Adiciona a nova transação
      })
      .addCase(addTransaction.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export const { deleteTransaction } = transactionsSlice.actions; 
export default transactionsSlice.reducer;