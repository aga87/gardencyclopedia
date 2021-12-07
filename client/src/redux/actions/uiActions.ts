import { PayloadAction } from '@reduxjs/toolkit';
import {
  OPEN_MAIN_MENU_MODAL,
  OPEN_ADD_PLANT_MODAL,
  OPEN_EDIT_PLANT_MODAL,
  OPEN_USER_SETTINGS_MODAL,
  CLOSE_MODAL,
  SET_VIEW
} from './types';

type BasicAction = {
  type: string;
};

export const openMainMenuModal = (): BasicAction => ({
  type: OPEN_MAIN_MENU_MODAL
});

export const openAddPlantModal = (): BasicAction => ({
  type: OPEN_ADD_PLANT_MODAL
});

export const openEditPlantModal = (plantId: string): PayloadAction<string> => ({
  type: OPEN_EDIT_PLANT_MODAL,
  payload: plantId
});

export const openUserSettingsModal = (): BasicAction => ({
  type: OPEN_USER_SETTINGS_MODAL
});

export const closeModal = (): BasicAction => ({
  type: CLOSE_MODAL
});

export const setView = (view: View): PayloadAction<View> => ({
  type: SET_VIEW,
  payload: view
});
