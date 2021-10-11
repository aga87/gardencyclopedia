import axios from 'axios';
import { Dispatch } from '@reduxjs/toolkit';
import {
  ADD_PLANT,
  DELETE_PLANT,
  EDIT_PLANT,
  GET_PLANTS,
  PLANTS_LOADING,
  FILTER_PLANTS,
  SORT_PLANTS
} from './types';
import type { Plant, Category, Sort } from '../../utils/common-types';

type Action =
  | {
      type: typeof SORT_PLANTS;
      payload: Sort;
    }
  | {
      type: typeof FILTER_PLANTS;
      payload: Category;
    };

export const addPlant = (newPlant: Plant) => (dispatch: Dispatch) => {
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

export const editPlant =
  (id: string, editedPlant: Plant) => (dispatch: Dispatch) => {
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

export const getPlants = () => (dispatch: Dispatch) => {
  dispatch(setPlantsLoading());
  axios.get('/api/plants').then(res =>
    dispatch({
      type: GET_PLANTS,
      payload: res.data.plants
    })
  );
};

export const filterPlants = (filter: Category): Action => ({
  type: FILTER_PLANTS,
  payload: filter
});

export const sortPlants = (sort: Sort): Action => ({
  type: SORT_PLANTS,
  payload: sort
});
