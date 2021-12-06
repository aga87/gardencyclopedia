import React from 'react';
import { Story, Meta } from '@storybook/react';
import { Provider } from 'react-redux';
import { action } from '@storybook/addon-actions';
import Dashboard from './Dashboard';

const store = {
  getState: () => ({
    uiReducer: {
      isMainMenuModalOpen: true,
      view: 'garden'
    },
    authReducer: {
      user: {
        username: 'username'
      }
    }
  }),
  subscribe: () => 0,
  dispatch: action('dispatch')
} as any;

export default {
  title: 'pages/Dashboard',
  component: Dashboard,
  parameters: {
    layout: 'fullscreen'
  }
} as Meta;

const Template: Story = () => <Dashboard />;

export const WithOpenMainMenuModal = Template.bind({});

WithOpenMainMenuModal.decorators = [
  story => <Provider store={store}>{story()}</Provider>
];

WithOpenMainMenuModal.parameters = {
  viewport: {
    defaultViewport: 'xxs'
  }
};
