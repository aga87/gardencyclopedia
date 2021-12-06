import React from 'react';
import { Provider } from 'react-redux';
import { Story, Meta } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import MainMenuModal from './MainMenuModal';

// Mock Redux store
const store = {
  getState: () => ({
    authReducer: {
      user: {
        username: 'username'
      }
    },
    uiReducer: {
      view: 'calendar'
    }
  }),
  subscribe: () => 0,
  dispatch: action('dispatch')
} as any;

export default {
  title: 'organisms/MainMenuModal',
  component: MainMenuModal,
  decorators: [story => <Provider store={store}>{story()}</Provider>]
} as Meta;

export const MainMenuModalComponent: Story = () => <MainMenuModal />;

MainMenuModalComponent.storyName = 'MainMenuModal';
