import { OPEN_PLANT_MODAL, CLOSE_PLANT_MODAL } from '../actions/types';
import { emptyPlant } from '../../utils/constants';
import type { Plant } from '../../utils/common-types';

const initialState = {
  plantModalIsOpen: false,
  plantToEdit: emptyPlant
};

type State = typeof initialState;
type Action =
  | {
      type: typeof OPEN_PLANT_MODAL;
      payload: Plant;
    }
  | {
      type: typeof CLOSE_PLANT_MODAL;
    };

const uiReducer = (state = initialState, action: Action): State => {
  switch (action.type) {
    case OPEN_PLANT_MODAL:
      return {
        plantModalIsOpen: true,
        plantToEdit: action.payload
      };
    case CLOSE_PLANT_MODAL:
      return {
        plantModalIsOpen: false,
        plantToEdit: emptyPlant
      };
    default:
      return state;
  }
};

export default uiReducer;

// Selectors
export const selectPlantModalIsOpen = (state: State): boolean =>
  state.plantModalIsOpen;

export const selectPlantToEdit = (state: State): Plant => state.plantToEdit;
