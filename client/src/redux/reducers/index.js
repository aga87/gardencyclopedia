import { combineReducers } from '@reduxjs/toolkit';
import plantsReducer, * as fromPlantsReducer from './plantsReducer';

export default combineReducers({ plantsReducer });

// Selectors (global state)
export const getAllPlants = state =>
  fromPlantsReducer.getAllPlants(state.plantsReducer);
