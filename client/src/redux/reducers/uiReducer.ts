import { OPEN_PLANT_MODAL, CLOSE_PLANT_MODAL } from '../actions/types';

const initialState = {
  plantModalIsOpen: false
};

type State = typeof initialState;
type Action = {
  type: string;
};

const uiReducer = (state = initialState, action: Action): State => {
  switch (action.type) {
    case OPEN_PLANT_MODAL:
      return {
        plantModalIsOpen: true
      };
    case CLOSE_PLANT_MODAL:
      return {
        plantModalIsOpen: false
      };
    default:
      return state;
  }
};

export default uiReducer;

// Selectors
export const selectPlantModalIsOpen = (state: State): boolean =>
  state.plantModalIsOpen;
