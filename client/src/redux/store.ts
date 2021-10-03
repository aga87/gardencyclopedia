import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './reducers/index';

// Setting up Redux store to manage state changes
export const store = configureStore({
  reducer: rootReducer
});

// Infer the root state type from the store itself
export type RootState = ReturnType<typeof store.getState>;
