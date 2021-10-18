import { GET_ERRORS, CLEAR_ERRORS } from '../actions/types';
import type { Action } from '../actions/errorActions';

const initialState = {
  errMsg: '',
  errStatus: null,
  errId: ''
};

type State = {
  errMsg: string;
  errStatus: number | null;
  errId: string;
};

const errorReducer = (state = initialState, action: Action): State => {
  switch (action.type) {
    case GET_ERRORS: {
      const { errMsg, errStatus, errId } = action.payload;
      return {
        errMsg,
        errStatus,
        errId
      };
    }
    case CLEAR_ERRORS:
      return initialState;
    default:
      return state;
  }
};

export default errorReducer;

// Selectors
export const selectErrMsg = (state: State): string => state.errMsg;
export const selectErrId = (state: State): string => state.errId;
