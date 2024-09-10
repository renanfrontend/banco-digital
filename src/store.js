import { configureStore } from '@reduxjs/toolkit';
import authReducer from './features/auth/authSlice';
import transactionsReducer from './features/transactions/transactionsSlice';

const store = configureStore({
  reducer: {
    auth: authReducer,
    transactions: transactionsReducer,
  },
});

export default store;