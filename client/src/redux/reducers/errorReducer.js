import { GET_ERRORS, CLEAR_ERRORS } from '../actions/types';

const initialState = {
  errorMsg: '',
  status: null,
  id: null
};

const errorReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ERRORS:
      return {
        errorMsg: action.payload.errorMsg,
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
export const selectErrorMsg = state => state.errorMsg;
export const selectErrorId = state => state.id;
