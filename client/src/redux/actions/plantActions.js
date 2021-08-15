import { GET_PLANTS, DELETE_PLANT } from './types';

export const getPlants = () => ({
  type: GET_PLANTS
});

export const deletePlant = id => ({
  type: DELETE_PLANT,
  payload: id
});
