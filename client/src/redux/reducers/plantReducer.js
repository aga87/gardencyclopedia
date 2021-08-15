import { GET_PLANTS, DELETE_PLANT } from '../actions/types';

const initialState = {
  plants: [
    {
      id: '1',
      name: 'Chives'
    },
    {
      id: '2',
      name: 'Parsley'
    }
  ]
};

const plantReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_PLANTS:
      return {
        ...state
      };
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

export default plantReducer;

// Selectors
export const getPlants = state => state.plants;
