import { OPEN_PLANT_MODAL, CLOSE_PLANT_MODAL } from './types';

type Action = {
  type: string;
};

export const openPlantModal = (): Action => ({
  type: OPEN_PLANT_MODAL
});

export const closePlantModal = (): Action => ({
  type: CLOSE_PLANT_MODAL
});
