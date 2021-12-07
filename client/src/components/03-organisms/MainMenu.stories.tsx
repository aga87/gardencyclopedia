import React from 'react';
import { Provider } from 'react-redux';
import { Story, Meta } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import MainMenu from './MainMenu';

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
  title: 'organisms/MainMenu',
  component: MainMenu,
  decorators: [story => <Provider store={store}>{story()}</Provider>]
} as Meta;

export const MainMenuComponent: Story = () => <MainMenu />;

MainMenuComponent.storyName = 'MainMenu';
