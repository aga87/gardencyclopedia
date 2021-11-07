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
import type { TokenState } from './authActions';

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
  (newPlant: Plant) => async (dispatch: Dispatch, getState: TokenState) => {
    try {
      const res = await axios.post(
        '/api/plants',
        newPlant,
        tokenConfig(getState)
      );
      return dispatch({
        type: ADD_PLANT,
        payload: res.data
      });
    } catch (err: any) {
      return dispatch(getErrors(err.response.data, err.response.status));
    }
  };

export const deletePlant =
  (id: string) => async (dispatch: Dispatch, getState: TokenState) => {
    try {
      await axios.delete(`/api/plants/${id}`, tokenConfig(getState));
      dispatch({
        type: DELETE_PLANT,
        payload: id
      });
    } catch (err: any) {
      dispatch(getErrors(err.response.data, err.response.status));
    }
  };

export const editPlant =
  (id: string, editedPlant: Plant) =>
  async (dispatch: Dispatch, getState: TokenState) => {
    try {
      const res = await axios.put(
        `/api/plants/${id}`,
        editedPlant,
        tokenConfig(getState)
      );
      dispatch({
        type: EDIT_PLANT,
        payload: res.data
      });
    } catch (err: any) {
      dispatch(getErrors(err.response.data, err.response.status));
    }
  };

export const setPlantsLoading = (): Action => ({
  type: PLANTS_LOADING
});

export const getPlants =
  () => async (dispatch: Dispatch, getState: TokenState) => {
    dispatch(setPlantsLoading());
    try {
      const res = await axios.get('/api/plants', tokenConfig(getState));
      dispatch({
        type: GET_PLANTS,
        payload: res.data.plants
      });
    } catch (err: any) {
      dispatch(getErrors(err.response.data, err.response.status));
    }
  };

export const filterPlants = (filter: Category): Action => ({
  type: FILTER_PLANTS,
  payload: filter
});

export const sortPlants = (sort: Sort): Action => ({
  type: SORT_PLANTS,
  payload: sort
});
