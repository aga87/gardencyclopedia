import { combineReducers } from '@reduxjs/toolkit';
import plantsReducer, * as fromPlantsReducer from './plantsReducer';
import uiReducer, * as fromUiReducer from './uiReducer';
import authReducer, * as fromAuthReducer from './authReducer';
import errorReducer, * as fromErrorReducer from './errorReducer';
import type { RootState } from '../store';

export default combineReducers({
  plantsReducer,
  uiReducer,
  authReducer,
  errorReducer
});

// Global plant selectors
export const selectAllPlants = (state: RootState): Plant[] =>
  fromPlantsReducer.selectAllPlants(state.plantsReducer);

export const selectIsLoading = (state: RootState): boolean =>
  fromPlantsReducer.selectIsLoading(state.plantsReducer);

export const selectFilter = (state: RootState): Category =>
  fromPlantsReducer.selectFilter(state.plantsReducer);

export const selectSort = (state: RootState): Sort =>
  fromPlantsReducer.selectSort(state.plantsReducer);

// Global UI selectors
export const selectIsMainMenuModalOpen = (state: RootState): boolean =>
  fromUiReducer.selectIsMainMenuModalOpen(state.uiReducer);

export const selectIsAddPlantModalOpen = (state: RootState): boolean =>
  fromUiReducer.selectIsAddPlantModalOpen(state.uiReducer);

export const selectIsEditPlantModalOpen = (state: RootState): boolean =>
  fromUiReducer.selectIsEditPlantModalOpen(state.uiReducer);

export const selectPlantToEdit = (state: RootState): Plant =>
  fromUiReducer.selectPlantToEdit(state.uiReducer);

export const selectView = (state: RootState): View =>
  fromUiReducer.selectView(state.uiReducer);

// Global auth/ user selectors
export const selectIsUserLoading = (state: RootState): boolean =>
  fromAuthReducer.selectIsUserLoading(state.authReducer);

export const selectIsAuthenticated = (state: RootState): boolean =>
  fromAuthReducer.selectIsAuthenticated(state.authReducer);

export const selectUsername = (state: RootState): string =>
  fromAuthReducer.selectUsername(state.authReducer);

// Global error selectors
export const selectErrMsg = (state: RootState): string =>
  fromErrorReducer.selectErrMsg(state.errorReducer);

export const selectErrId = (state: RootState): string =>
  fromErrorReducer.selectErrId(state.errorReducer);
