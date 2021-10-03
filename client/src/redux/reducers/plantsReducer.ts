import {
  ADD_PLANT,
  DELETE_PLANT,
  GET_PLANTS,
  PLANTS_LOADING,
  FILTER_PLANTS
} from '../actions/types';

const initialState = {
  plants: [],
  isLoading: false,
  filter: ''
};

type Plant = { _id: string; [key: string]: string };

type State = {
  plants: Plant[];
  isLoading: boolean;
  filter: string;
};

type Action =
  | {
      type: 'GET_PLANTS';
      payload: Plant[];
    }
  | {
      type: 'PLANTS_LOADING';
    }
  | {
      type: 'FILTER_PLANTS';
      payload: string;
    }
  | {
      type: 'ADD_PLANT';
      payload: Plant;
    }
  | {
      type: 'DELETE_PLANT';
      payload: string;
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
    case ADD_PLANT: {
      const newPlant = action.payload;
      return {
        ...state,
        plants: [newPlant, ...state.plants]
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
