import { GET_PLANTS, ADD_PLANT, DELETE_PLANT } from './types';

export const getPlants = () => ({
  type: GET_PLANTS
});

export const addPlant = newPlant => ({
  type: ADD_PLANT,
  payload: newPlant
});

export const deletePlant = id => ({
  type: DELETE_PLANT,
  payload: id
});
