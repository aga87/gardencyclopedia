import { GET_ERRORS, CLEAR_ERRORS } from './types';

export const getErrors = (errMsg, status, errId = '') => ({
  type: GET_ERRORS,
  payload: { errMsg, status, errId }
});

export const clearErrors = () => ({
  type: CLEAR_ERRORS
});
