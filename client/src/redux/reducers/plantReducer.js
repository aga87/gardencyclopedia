import {
  GET_PLANTS,
  ADD_PLANT,
  DELETE_PLANT,
  PLANTS_LOADING
} from '../actions/types';

const initialState = {
  plants: [],
  loading: false
};

const plantReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_PLANTS:
      return {
        ...state,
        plants: action.payload,
        loading: false
      };
    case ADD_PLANT: {
      const newPlant = action.payload;
      return {
        ...state,
        plants: [newPlant, ...state.plants]
      };
    }
    case DELETE_PLANT: {
      const id = action.payload;
      return {
        ...state,
        plants: state.plants.filter(plant => plant.id !== id)
      };
    }
    case PLANTS_LOADING:
      return {
        ...state,
        loading: true
      };
    default:
      return state;
  }
};

export default plantReducer;

// Selectors
export const getAllPlants = state => state.plants;
