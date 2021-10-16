import { GET_ERRORS, CLEAR_ERRORS } from '../actions/types';

const initialState = {
  errMsg: '',
  status: null,
  id: null
};

const errorReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ERRORS:
      return {
        errMsg: action.payload.errMsg,
        status: action.payload.status,
        id: action.payload.id
      };
    case CLEAR_ERRORS:
      return initialState;
    default:
      return state;
  }
};

export default errorReducer;

// Selectors
export const selectErrMsg = state => state.errMsg;
export const selectErrorId = state => state.id;
