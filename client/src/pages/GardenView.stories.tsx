import React from 'react';
import { Story, Meta } from '@storybook/react';
import { Provider } from 'react-redux';
import { action } from '@storybook/addon-actions';
import GardenView from './GardenView';

const store = {
  getState: () => ({
    uiReducer: {
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
  title: 'pages/GardenView',
  component: GardenView,
  parameters: {
    layout: 'fullscreen'
  }
} as Meta;

const Template: Story = () => <GardenView />;

export const Default = Template.bind({});

Default.decorators = [story => <Provider store={store}>{story()}</Provider>];

export const XXS = Template.bind({});

XXS.decorators = [story => <Provider store={store}>{story()}</Provider>];

XXS.parameters = {
  viewport: {
    defaultViewport: 'xxs'
  }
};
