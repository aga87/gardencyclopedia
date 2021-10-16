import { GET_ERRORS, CLEAR_ERRORS } from '../actions/types';

const initialState = {
  errMsg: '',
  errStatus: null,
  errId: ''
};

const errorReducer = (state = initialState, action) => {
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
export const selectErrMsg = state => state.errMsg;
export const selectErrId = state => state.errId;
