import React from 'react';
import { Story, Meta } from '@storybook/react';
import { Provider } from 'react-redux';
import { action } from '@storybook/addon-actions';
import CalendarMenuBottom from './CalendarMenuBottom';

// Mock Redux store
const store = {
  getState: () => ({
    plantsReducer: {
      sort: ''
    }
  }),
  subscribe: () => 0,
  dispatch: action('dispatch')
} as any;

export default {
  title: 'organisms/CalendarMenuBottom',
  component: CalendarMenuBottom,
  decorators: [story => <Provider store={store}>{story()}</Provider>]
} as Meta;

export const CalendarMenuBottomComponent: Story = () => <CalendarMenuBottom />;

CalendarMenuBottomComponent.storyName = 'CalendarMenuBottom';
