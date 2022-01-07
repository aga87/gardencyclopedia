import React from 'react';
import { Provider } from 'react-redux';
import { Story, Meta } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import AuthForm from './AuthForm';

type AuthFormProps = React.ComponentProps<typeof AuthForm>;

// Mock Redux store
const store = {
  getState: () => ({
    authReducer: {
      hasJustRegistered: false
    },
    errorReducer: {
      errMsg: '',
      errId: ''
    }
  }),
  subscribe: () => 0,
  dispatch: action('dispatch')
} as any;

const storeLoginError = {
  getState: () => ({
    authReducer: {
      hasJustRegistered: false
    },
    errorReducer: {
      errMsg: 'Invalid credentials',
      errId: 'LOGIN_FAIL'
    }
  }),
  subscribe: () => 0,
  dispatch: action('dispatch')
} as any;

const storeRegisterSuccess = {
  getState: () => ({
    authReducer: {
      hasJustRegistered: true
    },
    errorReducer: {
      errMsg: '',
      errId: ''
    }
  }),
  subscribe: () => 0,
  dispatch: action('dispatch')
} as any;

const storeRegisterError = {
  getState: () => ({
    authReducer: {
      hasJustRegistered: false
    },
    errorReducer: {
      errMsg: 'User already exists',
      errId: 'REGISTER_FAIL'
    }
  }),
  subscribe: () => 0,
  dispatch: action('dispatch')
} as any;

export default {
  title: 'organisms/auth/AuthForm',
  component: AuthForm
} as Meta<AuthFormProps>;

const Template: Story<AuthFormProps> = args => <AuthForm {...args} />;

export const Login = Template.bind({});

Login.decorators = [story => <Provider store={store}>{story()}</Provider>];

Login.args = {
  variant: 'login'
};

export const LoginError = Template.bind({});

LoginError.decorators = [
  story => <Provider store={storeLoginError}>{story()}</Provider>
];

LoginError.args = {
  variant: 'login'
};

export const Register = Template.bind({});

Register.decorators = [story => <Provider store={store}>{story()}</Provider>];

Register.args = {
  variant: 'register'
};

export const RegisterError = Template.bind({});

RegisterError.decorators = [
  story => <Provider store={storeRegisterError}>{story()}</Provider>
];

RegisterError.args = {
  variant: 'register'
};

export const RegisterSuccess = Template.bind({});

RegisterSuccess.decorators = [
  story => <Provider store={storeRegisterSuccess}>{story()}</Provider>
];

RegisterSuccess.args = {
  variant: 'register'
};
