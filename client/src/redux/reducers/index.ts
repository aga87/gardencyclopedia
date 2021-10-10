import { combineReducers } from '@reduxjs/toolkit';
import plantsReducer, * as fromPlantsReducer from './plantsReducer';
import uiReducer, * as fromUiReducer from './uiReducer';
import type { RootState } from '../store';
import type { Plant } from '../../utils/common-types';

export default combineReducers({ plantsReducer, uiReducer });

// Selectors - global
// Global plant selectors
export const selectAllPlants = (state: RootState): Plant[] =>
  fromPlantsReducer.selectAllPlants(state.plantsReducer);

export const selectIsLoading = (state: RootState): boolean =>
  fromPlantsReducer.selectIsLoading(state.plantsReducer);

export const selectFilter = (state: RootState): string =>
  fromPlantsReducer.selectFilter(state.plantsReducer);

export const selectSort = (state: RootState): string =>
  fromPlantsReducer.selectSort(state.plantsReducer);

// Global UI selectors
export const selectPlantModalIsOpen = (state: RootState): boolean =>
  fromUiReducer.selectPlantModalIsOpen(state.uiReducer);

export const selectPlantToEdit = (state: RootState): Plant =>
  fromUiReducer.selectPlantToEdit(state.uiReducer);
