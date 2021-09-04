import axios from 'axios';
import { ADD_PLANT, DELETE_PLANT, GET_PLANTS, PLANTS_LOADING } from './types';

export const addPlant = newPlant => ({
  type: ADD_PLANT,
  payload: newPlant
});

export const deletePlant = id => ({
  type: DELETE_PLANT,
  payload: id
});

export const setPlantsLoading = () => ({
  type: PLANTS_LOADING
});

export const getPlants = () => dispatch => {
  dispatch(setPlantsLoading());
  axios.get('/api/plants').then(res =>
    dispatch({
      type: GET_PLANTS,
      payload: res.data
    })
  );
};
