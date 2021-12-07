import React from 'react';
import { Story, Meta } from '@storybook/react';
import { Provider } from 'react-redux';
import { action } from '@storybook/addon-actions';
import StatusMessage from './StatusMessage';

// Mock Redux store
const store = {
  getState: () => ({
    plantsReducer: {
      statusMsg: {
        id: 1,
        msg: 'Status Message'
      }
    }
  }),
  subscribe: () => 0,
  dispatch: action('dispatch')
} as any; // FIXME: assign correct type

export default {
  title: 'molecules/StatusMessage',
  component: StatusMessage,
  decorators: [story => <Provider store={store}>{story()}</Provider>]
} as Meta;

export const StatusMessageComponent: Story = () => <StatusMessage />;

StatusMessageComponent.storyName = 'StatusMessage';
