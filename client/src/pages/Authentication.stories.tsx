import React from 'react';
import { Story, Meta } from '@storybook/react';
import { Provider } from 'react-redux';
import { action } from '@storybook/addon-actions';
import Authentication from './Authentication';

// Mock Redux store
const store = {
  getState: () => ({
    authReducer: {
      isUserLoading: false
    },
    errorReducer: {
      errMsg: '',
      errId: ''
    }
  }),
  subscribe: () => 0,
  dispatch: action('dispatch')
} as any;

const storeLoading = {
  getState: () => ({
    authReducer: {
      isUserLoading: true
    }
  }),
  subscribe: () => 0,
  dispatch: action('dispatch')
} as any;

export default {
  title: 'pages/Authentication',
  component: Authentication
} as Meta;

const Template: Story = () => <Authentication />;

export const UserAuthentication = Template.bind({});

UserAuthentication.decorators = [
  story => <Provider store={store}>{story()}</Provider>
];

export const UserIsLoading = Template.bind({});

UserIsLoading.decorators = [
  story => <Provider store={storeLoading}>{story()}</Provider>
];
