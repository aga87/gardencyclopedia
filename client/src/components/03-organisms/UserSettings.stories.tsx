import React from 'react';
import { Provider } from 'react-redux';
import { Story, Meta } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import UserSettingsModal from './UserSettingsModal';

// Mock Redux store
const store = {
  getState: () => ({}),
  subscribe: () => 0,
  dispatch: action('dispatch')
} as any; // FIXME: assign correct type

export default {
  title: 'organisms/UserSettingsModal',
  component: UserSettingsModal,
  decorators: [story => <Provider store={store}>{story()}</Provider>]
} as Meta;

export const UserSettingsModalComponent: Story = () => <UserSettingsModal />;

UserSettingsModalComponent.storyName = 'UserSettingsModal';
