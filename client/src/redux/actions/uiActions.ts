import { OPEN_PLANT_MODAL, CLOSE_PLANT_MODAL } from './types';
import type { Plant } from '../../utils/common-types';

type Action =
  | {
      type: typeof OPEN_PLANT_MODAL;
      payload: Plant;
    }
  | {
      type: typeof CLOSE_PLANT_MODAL;
    };

export const openPlantModal = (plant: Plant): Action => ({
  type: OPEN_PLANT_MODAL,
  payload: plant
});

export const closePlantModal = (): Action => ({
  type: CLOSE_PLANT_MODAL
});
