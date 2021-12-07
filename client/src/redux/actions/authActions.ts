import axios from 'axios';
import { Dispatch, AnyAction, ThunkAction } from '@reduxjs/toolkit';
import type { RootState } from '../store';
import {
  USER_LOADING,
  USER_LOADED,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT_SUCCESS,
  REGISTER_SUCCESS,
  REGISTER_FAIL
} from './types';
import { clearErrors, getErrors } from './errorActions';

type BasicAction = { type: string };

type User = {
  email: string;
  password: string;
};

type NewUser = User & { username: string };

export type TokenState = () => {
  authReducer: {
    token: string;
  };
};

export const register =
  ({ username, email, password }: NewUser) =>
  async (dispatch: Dispatch): Promise<void> => {
    const config = {
      headers: {
        'Content-type': 'application/json'
      }
    };
    const body = JSON.stringify({ username, email, password });

    try {
      const res = await axios.post('/api/users', body, config);
      dispatch({
        type: REGISTER_SUCCESS,
        payload: res.data
      });
      dispatch(clearErrors());
    } catch (err: unknown) {
      if (axios.isAxiosError(err) && err.response) {
        dispatch(
          getErrors(err.response.data, err.response.status, REGISTER_FAIL)
        );
      }
      dispatch({
        type: REGISTER_FAIL
      });
    }
  };

export const tokenConfig = (getState: TokenState) => {
  const { token } = getState().authReducer;
  const config = {
    headers: {
      'Content-type': 'application/json',
      'x-auth-token': token || ''
    }
  };
  return config;
};

const loadUser =
  (): ThunkAction<void, RootState, unknown, AnyAction> =>
  async (dispatch: Dispatch, getState: TokenState) => {
    dispatch({
      type: USER_LOADING
    });
    try {
      const res = await axios.get('/api/auth/user', tokenConfig(getState));
      dispatch({
        type: USER_LOADED,
        payload: res.data
      });
    } catch (err: unknown) {
      if (axios.isAxiosError(err) && err.response) {
        dispatch(getErrors(err.response.data, err.response.status));
      }
      dispatch({
        type: LOGIN_FAIL
      });
    }
  };

export const login =
  ({ email, password }: User) =>
  async (dispatch: Dispatch): Promise<void> => {
    const config = {
      headers: {
        'Content-type': 'application/json'
      }
    };
    const body = JSON.stringify({ email, password });
    try {
      const res = await axios.post('/api/auth', body, config);
      dispatch({
        type: LOGIN_SUCCESS,
        payload: res.data
      });
      dispatch(clearErrors());
    } catch (err: unknown) {
      if (axios.isAxiosError(err) && err.response) {
        dispatch(getErrors(err.response.data, err.response.status, LOGIN_FAIL));
      }
      dispatch({
        type: LOGIN_FAIL
      });
    }
  };

export const logout = (): BasicAction => ({
  type: LOGOUT_SUCCESS
});

export default loadUser;
