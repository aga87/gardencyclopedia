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

type State = {
  token: string;
  isAuthenticated: boolean;
  isLoading: boolean;
  user: null | User;
};

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

const initialState: State = {
  token: localStorage.getItem('token') as string,
  isAuthenticated: false,
  isLoading: false,
  user: null
};

const authReducer = (state = initialState, action: Action): State => {
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
        token: '',
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
export const selectIsAuthenticated = (state: State): boolean =>
  state.isAuthenticated;
