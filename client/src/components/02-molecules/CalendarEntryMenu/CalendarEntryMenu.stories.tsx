import React from 'react';
import { Story, Meta } from '@storybook/react';
import { Provider } from 'react-redux';
import { action } from '@storybook/addon-actions';
import CalendarEntryMenu from './CalendarEntryMenu';

type CalendarEntryMenuProps = React.ComponentProps<typeof CalendarEntryMenu>;

// Mock Redux store
const store = {
  getState: () => ({}),
  subscribe: () => 0,
  dispatch: action('dispatch')
} as any;

export default {
  title: 'molecules/CalendarEntryMenu',
  component: CalendarEntryMenu,
  decorators: [story => <Provider store={store}>{story()}</Provider>]
} as Meta<CalendarEntryMenuProps>;

export const CalendarEntryMenuComponent: Story<CalendarEntryMenuProps> =
  args => <CalendarEntryMenu {...args} />;

CalendarEntryMenuComponent.args = {
  plantName: 'Parsley',
  plantId: '1'
};

CalendarEntryMenuComponent.storyName = 'CalendarEntryMenu';
