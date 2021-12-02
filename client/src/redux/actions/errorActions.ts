import { PayloadAction } from '@reduxjs/toolkit';
import { GET_ERRORS, CLEAR_ERRORS } from './types';

type BasicAction = {
  type: string;
};

export const getErrors = (
  errMsg: string,
  errStatus: number,
  errId = ''
): PayloadAction<{
  errMsg: string;
  errStatus: number | null;
  errId: string;
}> => ({
  type: GET_ERRORS,
  payload: { errMsg, errStatus, errId }
});

export const clearErrors = (): BasicAction => ({
  type: CLEAR_ERRORS
});
