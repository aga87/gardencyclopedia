import { ADD_PLANT, DELETE_PLANT, GET_PLANTS } from '../actions/types';

const initialState = {
  plants: []
};

const plantsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_PLANTS:
      return {
        ...state,
        plants: action.payload
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
    default:
      return state;
  }
};

export default plantsReducer;

// Selectors
export const getAllPlants = state => state.plants;
