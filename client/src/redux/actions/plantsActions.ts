import axios from 'axios';
import { Dispatch } from '@reduxjs/toolkit';
import {
  ADD_PLANT,
  DELETE_PLANT,
  GET_PLANTS,
  PLANTS_LOADING,
  FILTER_PLANTS
} from './types';

export const addPlant = (newPlant: Plant) => (dispatch: Dispatch)=> {
  axios.post('/api/plants', newPlant).then(res =>
    dispatch({
      type: ADD_PLANT,
      payload: res.data
    })
  );
};

export const deletePlant = (id: string) => (dispatch: Dispatch) => {
  axios.delete(`/api/plants/${id}`).then(() =>
    dispatch({
      type: DELETE_PLANT,
      payload: id
    })
  );
};

export const setPlantsLoading = () => ({
  type: PLANTS_LOADING
});

export const getPlants = () => (dispatch: Dispatch) => {
  dispatch(setPlantsLoading());
  axios.get('/api/plants').then(res =>
    dispatch({
      type: GET_PLANTS,
      payload: res.data.plants
    })
  );
};

export const filterPlants = (filter: string) => ({
  type: FILTER_PLANTS,
  payload: filter
});
