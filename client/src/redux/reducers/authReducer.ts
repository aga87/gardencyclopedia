import {
  USER_LOADING,
  USER_LOADED,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT_SUCCESS,
  REGISTER_SUCCESS,
  REGISTER_FAIL
} from '../actions/types';

type User = {
  username: string;
  email: string;
  password: string;
};

const initialState = {
  token: localStorage.getItem('token') as string,
  hasJustRegistered: false,
  isAuthenticated: false,
  isUserLoading: false,
  user: null as null | User
};

type State = typeof initialState;

type Action =
  | {
      type:
        | typeof USER_LOADING
        | typeof REGISTER_FAIL
        | typeof LOGIN_FAIL
        | typeof LOGOUT_SUCCESS;
    }
  | {
      type: typeof USER_LOADED;
      payload: User;
    }
  | {
      type: typeof REGISTER_SUCCESS | typeof LOGIN_SUCCESS;
      payload: {
        token: string;
        user: User;
      };
    };

const authReducer = (state = initialState, action: Action): State => {
  switch (action.type) {
    case USER_LOADING:
      return {
        ...state,
        isUserLoading: true
      };
    case USER_LOADED:
      return {
        ...state,
        isAuthenticated: true,
        isUserLoading: false,
        user: action.payload
      };
    case LOGIN_SUCCESS: {
      const { token, user } = action.payload;
      localStorage.setItem('token', token);
      return {
        ...state,
        token,
        isAuthenticated: true,
        isUserLoading: false,
        user
      };
    }
    case REGISTER_SUCCESS: {
      const { token, user } = action.payload;
      return {
        token,
        hasJustRegistered: true,
        isAuthenticated: false,
        isUserLoading: false,
        user
      };
    }
    case LOGIN_FAIL:
    case LOGOUT_SUCCESS:
    case REGISTER_FAIL:
      localStorage.removeItem('token');
      return {
        hasJustRegistered: false,
        token: '',
        isAuthenticated: false,
        isUserLoading: false,
        user: null
      };
    default:
      return state;
  }
};

export default authReducer;

// Selectors

export const selectHasJustRegistered = (state: State): boolean =>
  state.hasJustRegistered;

export const selectIsUserLoading = (state: State): boolean =>
  state.isUserLoading;

export const selectIsAuthenticated = (state: State): boolean =>
  state.isAuthenticated;

export const selectUsername = (state: State): string => {
  if (state.user) return state.user.username;
  return '';
};
