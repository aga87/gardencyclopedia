import axios from 'axios';
import {
  ADD_PLANT,
  DELETE_PLANT,
  EDIT_PLANT,
  GET_PLANTS,
  PLANTS_LOADING,
  FILTER_PLANTS
} from './types';

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

export const editPlant = (id, editedPlant) => dispatch => {
  axios.put(`/api/plants/${id}`, editedPlant).then(res =>
    dispatch({
      type: EDIT_PLANT,
      payload: res.data
    })
  );
};

export const setPlantsLoading = () => ({
  type: PLANTS_LOADING
});

export const getPlants = () => dispatch => {
  dispatch(setPlantsLoading());
  axios.get('/api/plants').then(res =>
    dispatch({
      type: GET_PLANTS,
      payload: res.data.plants
    })
  );
};

export const filterPlants = filter => ({
  type: FILTER_PLANTS,
  payload: filter
});
