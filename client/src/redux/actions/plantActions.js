import axios from 'axios';
import { GET_PLANTS, ADD_PLANT, DELETE_PLANT, PLANTS_LOADING } from './types';

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

export const addPlant = newPlant => dispatch => {
  axios.post('/api/plants', newPlant).then(res =>
    dispatch({
      type: ADD_PLANT,
      payload: res.data
    })
  );
};

export const deletePlant = id => dispatch => {
  axios.delete(`/api/plants/${id}`).then(() =>
    dispatch({
      type: DELETE_PLANT,
      payload: id
    })
  );
};
