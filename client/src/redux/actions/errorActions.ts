import { GET_ERRORS, CLEAR_ERRORS } from './types';

export type Action =
  | {
      type: typeof GET_ERRORS;
      payload: { errMsg: string; errStatus: number | null; errId: string };
    }
  | {
      type: typeof CLEAR_ERRORS;
    };

export const getErrors = (
  errMsg: string,
  errStatus: number,
  errId = ''
): Action => ({
  type: GET_ERRORS,
  payload: { errMsg, errStatus, errId }
});

export const clearErrors = (): Action => ({
  type: CLEAR_ERRORS
});
