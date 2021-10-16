import { GET_ERRORS, CLEAR_ERRORS } from './types';

export const getErrors = (errMsg, errStatus, errId = '') => ({
  type: GET_ERRORS,
  payload: { errMsg, errStatus, errId }
});

export const clearErrors = () => ({
  type: CLEAR_ERRORS
});
