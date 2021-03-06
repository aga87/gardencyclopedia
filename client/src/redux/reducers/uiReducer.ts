import {
  OPEN_MAIN_MENU_MODAL,
  OPEN_ADD_PLANT_MODAL,
  OPEN_EDIT_PLANT_MODAL,
  OPEN_USER_SETTINGS_MODAL,
  CLOSE_MODAL,
  SET_VIEW,
  LOGOUT_SUCCESS
} from '../actions/types';

const initialState = {
  isMainMenuModalOpen: false,
  isAddPlantModalOpen: false,
  isEditPlantModalOpen: false,
  isUserSettingsModalOpen: false,
  plantToEditId: '',
  view: 'calendar' as View
};

type State = typeof initialState;

export type Action =
  | {
      type:
        | typeof OPEN_MAIN_MENU_MODAL
        | typeof OPEN_ADD_PLANT_MODAL
        | typeof OPEN_USER_SETTINGS_MODAL
        | typeof CLOSE_MODAL;
    }
  | {
      type: typeof OPEN_EDIT_PLANT_MODAL;
      payload: string;
    }
  | {
      type: typeof SET_VIEW;
      payload: View;
    }
  | { type: typeof LOGOUT_SUCCESS };

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
        isAddPlantModalOpen: true
      };
    case OPEN_EDIT_PLANT_MODAL:
      return {
        ...state,
        isEditPlantModalOpen: true,
        plantToEditId: action.payload
      };
    case OPEN_USER_SETTINGS_MODAL:
      return {
        ...state,
        isUserSettingsModalOpen: true
      };
    case CLOSE_MODAL:
      return {
        ...state,
        isMainMenuModalOpen: false,
        isAddPlantModalOpen: false,
        isEditPlantModalOpen: false,
        isUserSettingsModalOpen: false,
        plantToEditId: ''
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
export const selectIsUserSettingsModalOpen = (state: State): boolean =>
  state.isUserSettingsModalOpen;
export const selectPlantToEditId = (state: State): string =>
  state.plantToEditId;
export const selectView = (state: State): View => state.view;
