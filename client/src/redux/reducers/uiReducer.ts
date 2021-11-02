import {
  OPEN_MAIN_MENU_MODAL,
  OPEN_PLANT_MODAL,
  CLOSE_MODAL,
  SET_VIEW
} from '../actions/types';
import { emptyPlant } from '../../utils/constants';

const initialState = {
  mainMenuModalIsOpen: false,
  plantModalIsOpen: false,
  plantToEdit: emptyPlant,
  view: 'calendar' as View
};

type State = typeof initialState;
type Action =
  | {
      type: typeof OPEN_MAIN_MENU_MODAL | typeof CLOSE_MODAL;
    }
  | {
      type: typeof OPEN_PLANT_MODAL;
      payload: Plant;
    }
  | {
      type: typeof SET_VIEW;
      payload: View;
    };

const uiReducer = (state = initialState, action: Action): State => {
  switch (action.type) {
    case OPEN_MAIN_MENU_MODAL:
      return {
        ...state,
        mainMenuModalIsOpen: true
      };
    case OPEN_PLANT_MODAL:
      return {
        ...state,
        plantModalIsOpen: true,
        plantToEdit: action.payload
      };
    case CLOSE_MODAL:
      return {
        ...state,
        mainMenuModalIsOpen: false,
        plantModalIsOpen: false,
        plantToEdit: emptyPlant
      };
    case SET_VIEW:
      return {
        ...state,
        view: action.payload,
        mainMenuModalIsOpen: false
      };
    default:
      return state;
  }
};

export default uiReducer;

// Selectors
export const selectMainMenuModalIsOpen = (state: State): boolean =>
  state.mainMenuModalIsOpen;
export const selectPlantModalIsOpen = (state: State): boolean =>
  state.plantModalIsOpen;
export const selectPlantToEdit = (state: State): Plant => state.plantToEdit;
export const selectView = (state: State): View => state.view;
