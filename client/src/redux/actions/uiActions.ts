import { OPEN_PLANT_MODAL, CLOSE_PLANT_MODAL, SET_VIEW } from './types';

type Action =
  | {
      type: typeof OPEN_PLANT_MODAL;
      payload: Plant;
    }
  | {
      type: typeof CLOSE_PLANT_MODAL;
    }
  | {
      type: typeof SET_VIEW;
      payload: View;
    };

export const openPlantModal = (plant: Plant): Action => ({
  type: OPEN_PLANT_MODAL,
  payload: plant
});

export const closePlantModal = (): Action => ({
  type: CLOSE_PLANT_MODAL
});

export const setView = (view: View): Action => ({
  type: SET_VIEW,
  payload: view
});
