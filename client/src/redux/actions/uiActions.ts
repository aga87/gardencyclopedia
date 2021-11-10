import {
  OPEN_MAIN_MENU_MODAL,
  OPEN_ADD_PLANT_MODAL,
  OPEN_EDIT_PLANT_MODAL,
  OPEN_USER_SETTINGS_MODAL,
  CLOSE_MODAL,
  SET_VIEW
} from './types';

export type UIAction =
  | {
      type:
        | typeof OPEN_MAIN_MENU_MODAL
        | typeof CLOSE_MODAL
        | typeof OPEN_ADD_PLANT_MODAL
        | typeof OPEN_USER_SETTINGS_MODAL;
    }
  | {
      type: typeof OPEN_EDIT_PLANT_MODAL;
      payload: Plant;
    }
  | {
      type: typeof SET_VIEW;
      payload: View;
    };

export const openMainMenuModal = (): UIAction => ({
  type: OPEN_MAIN_MENU_MODAL
});

export const openAddPlantModal = (): UIAction => ({
  type: OPEN_ADD_PLANT_MODAL
});

export const openEditPlantModal = (plant: Plant): UIAction => ({
  type: OPEN_EDIT_PLANT_MODAL,
  payload: plant
});

export const openUserSettingsModal = (): UIAction => ({
  type: OPEN_USER_SETTINGS_MODAL
});

export const closeModal = (): UIAction => ({
  type: CLOSE_MODAL
});

export const setView = (view: View): UIAction => ({
  type: SET_VIEW,
  payload: view
});
