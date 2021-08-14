import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './reducers/index';

// Setting up Redux store to manage state changes

export default configureStore({
  reducer: rootReducer,
});
