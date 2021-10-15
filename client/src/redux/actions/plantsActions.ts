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
import { tokenConfig } from './authActions';
import { getErrors } from './errorActions';
import type { RootState } from '../store';

type Action =
  | { type: typeof PLANTS_LOADING }
  | {
      type: typeof SORT_PLANTS;
      payload: Sort;
    }
  | {
      type: typeof FILTER_PLANTS;
      payload: Category;
    };

export const addPlant =
  (newPlant: Plant) => (dispatch: Dispatch, getState: RootState) => {
    axios
      .post('/api/plants', newPlant, tokenConfig(getState))
      .then(res =>
        dispatch({
          type: ADD_PLANT,
          payload: res.data
        })
      )
      .catch(err =>
        dispatch(getErrors(err.response.data, err.response.status))
      );
  };

export const deletePlant =
  (id: string) => (dispatch: Dispatch, getState: RootState) => {
    axios
      .delete(`/api/plants/${id}`, tokenConfig(getState))
      .then(() =>
        dispatch({
          type: DELETE_PLANT,
          payload: id
        })
      )
      .catch(err =>
        dispatch(getErrors(err.response.data, err.response.status))
      );
  };

export const editPlant =
  (id: string, editedPlant: Plant) =>
  (dispatch: Dispatch, getState: RootState) => {
    axios
      .put(`/api/plants/${id}`, editedPlant, tokenConfig(getState))
      .then(res =>
        dispatch({
          type: EDIT_PLANT,
          payload: res.data
        })
      )
      .catch(err =>
        dispatch(getErrors(err.response.data, err.response.status))
      );
  };

export const setPlantsLoading = (): Action => ({
  type: PLANTS_LOADING
});

export const getPlants = () => (dispatch: Dispatch, getState: RootState) => {
  dispatch(setPlantsLoading());
  axios
    .get('/api/plants', tokenConfig(getState))
    .then(res =>
      dispatch({
        type: GET_PLANTS,
        payload: res.data.plants
      })
    )
    .catch(err => dispatch(getErrors(err.response.data, err.response.status)));
};

export const filterPlants = (filter: Category): Action => ({
  type: FILTER_PLANTS,
  payload: filter
});

export const sortPlants = (sort: Sort): Action => ({
  type: SORT_PLANTS,
  payload: sort
});
