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

const plantsReducer = (state = initialState, action) => {
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
      const remainingPlants = state.plants.filter(plant => plant._id !== id);
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
export const selectAllPlants = state => state.plants;
export const selectIsLoading = state => state.isLoading;
export const selectFilter = state => state.filter;
