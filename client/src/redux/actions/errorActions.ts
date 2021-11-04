import { GET_ERRORS, CLEAR_ERRORS } from './types';

export type ErrAction =
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
): ErrAction => ({
  type: GET_ERRORS,
  payload: { errMsg, errStatus, errId }
});

export const clearErrors = (): ErrAction => ({
  type: CLEAR_ERRORS
});
