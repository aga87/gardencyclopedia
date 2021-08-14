import { GET_PLANTS } from '../actions/types';

const initialState = {
  plants: [
    {
      id: 1,
      name: 'Chives'
    }
  ]
};

const plantReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_PLANTS:
      return {
        ...state
      };
    default:
      return state;
  }
};

export default plantReducer;

// Selectors
export const getPlants = state => state.plants;
