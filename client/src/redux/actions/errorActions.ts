import { GET_ERRORS, CLEAR_ERRORS } from './types';

export type Action =
  | {
      type: typeof GET_ERRORS;
      payload: { errorMsg: string; status: number | null; id: string };
    }
  | {
      type: typeof CLEAR_ERRORS;
    };

export const getErrors = (
  errorMsg: string,
  status: number | null,
  id = ''
): Action => ({
  type: GET_ERRORS,
  payload: { errorMsg, status, id }
});

export const clearErrors = (): Action => ({
  type: CLEAR_ERRORS
});
