import {
  OPEN_MAIN_MENU_MODAL,
  OPEN_ADD_PLANT_MODAL,
  OPEN_EDIT_PLANT_MODAL,
  CLOSE_MODAL,
  SET_VIEW
} from './types';

type Action =
  | {
      type: typeof OPEN_MAIN_MENU_MODAL | typeof CLOSE_MODAL;
    }
  | {
      type: typeof OPEN_ADD_PLANT_MODAL | typeof OPEN_EDIT_PLANT_MODAL;
      payload: Plant;
    }
  | {
      type: typeof SET_VIEW;
      payload: View;
    };

export const openMainMenuModal = (): Action => ({
  type: OPEN_MAIN_MENU_MODAL
});

export const openAddPlantModal = (plant: Plant): Action => ({
  type: OPEN_ADD_PLANT_MODAL,
  payload: plant
});

export const openEditPlantModal = (plant: Plant): Action => ({
  type: OPEN_EDIT_PLANT_MODAL,
  payload: plant
});

export const closeModal = (): Action => ({
  type: CLOSE_MODAL
});

export const setView = (view: View): Action => ({
  type: SET_VIEW,
  payload: view
});
