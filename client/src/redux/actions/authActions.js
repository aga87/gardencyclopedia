import axios from 'axios';
import {
  USER_LOADING,
  USER_LOADED,
  AUTH_ERROR,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT_SUCCESS,
  REGISTER_SUCCESS,
  REGISTER_FAIL
} from './types';
import { getErrors } from './errorActions';

const setUserLoading = () => ({
  type: USER_LOADING
});

const setAuthError = () => ({
  type: AUTH_ERROR
});

const setRegisterFail = () => ({
  type: REGISTER_FAIL
});

export const register =
  ({ username, email, password }) =>
  dispatch => {
    const config = {
      headers: {
        'Content-type': 'application/json'
      }
    };
    const body = JSON.stringify({ username, email, password });
    axios
      .post('/api/users', body, config)
      .then(res =>
        dispatch({
          type: REGISTER_SUCCESS,
          payload: res.data
        })
      )
      .catch(err => {
        dispatch(
          getErrors(err.response.data, err.response.status, REGISTER_FAIL)
        );
        dispatch(setRegisterFail());
      });
  };

const tokenConfig = getState => {
  const { token } = getState().authReducer;
  const config = {
    headers: {
      'Content-type': 'application/json'
    }
  };
  if (token) {
    config.headers['x-auth-token'] = token;
  }
  return config;
};

const loadUser = () => (dispatch, getState) => {
  dispatch(setUserLoading());
  axios
    .get('/api/auth/user', tokenConfig(getState))
    .then(res =>
      dispatch({
        type: USER_LOADED,
        payload: res.data
      })
    )
    .catch(err => {
      dispatch(getErrors(err.response.data, err.response.status));
      dispatch(setAuthError());
    });
};

export default loadUser;
