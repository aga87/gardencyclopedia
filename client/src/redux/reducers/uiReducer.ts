import {
  OPEN_MAIN_MENU_MODAL,
  OPEN_ADD_PLANT_MODAL,
  OPEN_EDIT_PLANT_MODAL,
  CLOSE_MODAL,
  SET_VIEW,
  LOGOUT_SUCCESS
} from '../actions/types';
import { emptyPlant } from '../../utils/constants';
import type { UIAction } from '../actions/uiActions';

const initialState = {
  isMainMenuModalOpen: false,
  isAddPlantModalOpen: false,
  isEditPlantModalOpen: false,
  plantToEdit: emptyPlant,
  view: 'calendar' as View
};

type State = typeof initialState;
type Action = UIAction | { type: typeof LOGOUT_SUCCESS };

const uiReducer = (state = initialState, action: Action): State => {
  switch (action.type) {
    case OPEN_MAIN_MENU_MODAL:
      return {
        ...state,
        isMainMenuModalOpen: true
      };
    case OPEN_ADD_PLANT_MODAL:
      return {
        ...state,
        isAddPlantModalOpen: true,
        plantToEdit: action.payload
      };
    case OPEN_EDIT_PLANT_MODAL:
      return {
        ...state,
        isEditPlantModalOpen: true,
        plantToEdit: action.payload
      };
    case CLOSE_MODAL:
      return {
        ...state,
        isMainMenuModalOpen: false,
        isAddPlantModalOpen: false,
        isEditPlantModalOpen: false,
        plantToEdit: emptyPlant
      };
    case SET_VIEW:
      return {
        ...state,
        view: action.payload,
        isMainMenuModalOpen: false
      };
    case LOGOUT_SUCCESS:
      return initialState;
    default:
      return state;
  }
};

export default uiReducer;

// Selectors
export const selectIsMainMenuModalOpen = (state: State): boolean =>
  state.isMainMenuModalOpen;
export const selectIsAddPlantModalOpen = (state: State): boolean =>
  state.isAddPlantModalOpen;
export const selectIsEditPlantModalOpen = (state: State): boolean =>
  state.isEditPlantModalOpen;
export const selectPlantToEdit = (state: State): Plant => state.plantToEdit;
export const selectView = (state: State): View => state.view;
