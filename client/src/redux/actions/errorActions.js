import { GET_ERRORS, CLEAR_ERRORS } from './types';

export const getErrors = (errorMsg, status, id = null) => ({
  type: GET_ERRORS,
  payload: { errorMsg, status, id }
});

export const clearErrors = () => ({
  type: CLEAR_ERRORS
});
