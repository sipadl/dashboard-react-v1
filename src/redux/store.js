// store.js
import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './reducer'; // Sesuaikan dengan reducer Anda

const store = configureStore({
  reducer: rootReducer,
});

export default store;
