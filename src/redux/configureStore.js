import { configureStore } from '@reduxjs/toolkit';
import greetingsReducer from './greetingReducer';

const store = configureStore({
  reducer: {
    greeting: greetingsReducer,
  },
});

export default store;
