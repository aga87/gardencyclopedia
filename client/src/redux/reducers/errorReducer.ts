import { GET_ERRORS, CLEAR_ERRORS } from '../actions/types';
import type { Action } from '../actions/errorActions';

const initialState = {
  errorMsg: '',
  status: null,
  id: ''
};

type State = {
  errorMsg: string;
  status: number | null;
  id: string;
};

const errorReducer = (state = initialState, action: Action): State => {
  switch (action.type) {
    case GET_ERRORS: {
      const { errorMsg, status, id } = action.payload;
      return {
        errorMsg,
        status,
        id
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
export const selectErrorMsg = (state: State): string => state.errorMsg;
export const selectErrorId = (state: State): string => state.id;
