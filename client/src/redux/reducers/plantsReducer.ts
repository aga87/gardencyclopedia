import {
  ADD_PLANT,
  DELETE_PLANT,
  EDIT_PLANT,
  GET_PLANTS,
  PLANTS_LOADING,
  FILTER_PLANTS,
  SORT_PLANTS
} from '../actions/types';
import type { Plant, Sort } from '../../utils/common-types';

const initialState = {
  plants: [],
  isLoading: false,
  filter: '',
  sort: 'name'
};

type State = {
  plants: Plant[];
  isLoading: boolean;
  filter: string;
  sort: Sort;
};

type Action =
  | {
      type: typeof GET_PLANTS;
      payload: Plant[];
    }
  | {
      type: typeof PLANTS_LOADING;
    }
  | {
      type: typeof FILTER_PLANTS | typeof DELETE_PLANT | typeof SORT_PLANTS;
      payload: string;
    }
  | {
      type: typeof ADD_PLANT;
      payload: Plant;
    }
  | {
      type: typeof EDIT_PLANT;
      payload: Plant;
    };

const plantsReducer = (state = initialState, action: Action): State => {
  switch (action.type) {
    case GET_PLANTS:
      return {
        ...state,
        plants: action.payload,
        isLoading: false
      };
    case PLANTS_LOADING:
      return {
        ...state,
        isLoading: true
      };
    case FILTER_PLANTS: {
      const filter = action.payload;
      return {
        ...state,
        filter
      };
    }
    case SORT_PLANTS: {
      return {
        ...state,
        sort: action.payload
      };
    }
    case ADD_PLANT: {
      const newPlant = action.payload;
      return {
        ...state,
        plants: [newPlant, ...state.plants]
      };
    }
    case EDIT_PLANT: {
      const editedPlant = action.payload;
      const updatedPlants = state.plants.map((plant: Plant) => {
        if (plant._id === editedPlant._id) {
          return editedPlant;
        }
        return plant;
      });

      return {
        ...state,
        plants: updatedPlants
      };
    }
    case DELETE_PLANT: {
      const id = action.payload;
      const remainingPlants = state.plants.filter(
        (plant: Plant) => plant._id !== id
      );
      return {
        ...state,
        plants: remainingPlants
      };
    }
    default:
      return state;
  }
};

export default plantsReducer;

// Selectors
export const selectAllPlants = (state: State): Plant[] => state.plants;
export const selectIsLoading = (state: State): boolean => state.isLoading;
export const selectFilter = (state: State): string => state.filter;
export const selectSort = (state: State): string => state.sort;
