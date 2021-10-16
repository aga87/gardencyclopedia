import {
  USER_LOADING,
  USER_LOADED,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT_SUCCESS,
  REGISTER_SUCCESS,
  REGISTER_FAIL
} from '../actions/types';

const initialState = {
  token: localStorage.getItem('token'),
  isAuthenticated: false,
  isLoading: false,
  user: null
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case USER_LOADING:
      return {
        ...state,
        isLoading: true
      };
    case USER_LOADED:
      return {
        ...state,
        isAuthenticated: true,
        isLoading: false,
        user: action.payload
      };
    case LOGIN_SUCCESS:
    case REGISTER_SUCCESS: {
      const { token, user } = action.payload;
      localStorage.setItem('token', token);
      return {
        token,
        isAuthenticated: true,
        isLoading: false,
        user
      };
    }
    case LOGIN_FAIL:
    case LOGOUT_SUCCESS:
    case REGISTER_FAIL:
      localStorage.removeItem('token');
      return {
        token: null,
        isAuthenticated: false,
        isLoading: false,
        user: null
      };
    default:
      return state;
  }
};

export default authReducer;

// Selectors 
export const selectIsAuthenticated = (state) => state.isAuthenticated;
