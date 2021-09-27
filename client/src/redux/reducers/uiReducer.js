import { OPEN_PLANT_MODAL, CLOSE_PLANT_MODAL } from '../actions/types';

const initialState = {
  plantModalIsOpen: false
};

const uiReducer = (state = initialState, action) => {
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
export const selectPlantModalIsOpen = state => state.plantModalIsOpen;
