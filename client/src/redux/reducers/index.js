import { combineReducers } from '@reduxjs/toolkit';
import plantReducer, * as fromPlantReducer from './plantReducer';

export default combineReducers({ plantReducer });

// Selectors (global state)
export const getPlants = state =>
  fromPlantReducer.getPlants(state.plantReducer);
