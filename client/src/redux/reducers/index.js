import { combineReducers } from '@reduxjs/toolkit';
import plantsReducer, * as fromPlantsReducer from './plantsReducer';

export default combineReducers({ plantsReducer });

// Selectors (global state)
export const selectAllPlants = state =>
  fromPlantsReducer.selectAllPlants(state.plantsReducer);

export const selectIsLoading = state =>
  fromPlantsReducer.selectIsLoading(state.plantsReducer);
