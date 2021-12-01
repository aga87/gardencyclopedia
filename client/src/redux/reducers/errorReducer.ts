import { GET_ERRORS, CLEAR_ERRORS } from '../actions/types';

const initialState = {
  errMsg: '',
  errStatus: null as null | number,
  errId: ''
};

type State = typeof initialState;

type ErrAction =
  | {
      type: typeof GET_ERRORS;
      payload: { errMsg: string; errStatus: number | null; errId: string };
    }
  | {
      type: typeof CLEAR_ERRORS;
    };

const errorReducer = (state = initialState, action: ErrAction): State => {
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
