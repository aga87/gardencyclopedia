import { combineReducers } from '@reduxjs/toolkit';
import plantsReducer, * as fromPlantsReducer from './plantsReducer';
import uiReducer, * as fromUiReducer from './uiReducer';

export default combineReducers({ plantsReducer, uiReducer });

// Selectors - global
// Global plant selectors
export const selectAllPlants = state =>
  fromPlantsReducer.selectAllPlants(state.plantsReducer);

export const selectIsLoading = state =>
  fromPlantsReducer.selectIsLoading(state.plantsReducer);

// Global UI selectors
export const selectPlantModalIsOpen = state =>
  fromUiReducer.selectPlantModalIsOpen(state.uiReducer);
