import { GET_ERRORS, CLEAR_ERRORS } from './types';

export const getErrors = (errMsg, status, id = null) => ({
  type: GET_ERRORS,
  payload: { errMsg, status, id }
});

export const clearErrors = () => ({
  type: CLEAR_ERRORS
});
