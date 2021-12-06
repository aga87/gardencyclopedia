import React from 'react';
import { Story, Meta } from '@storybook/react';
import { Provider } from 'react-redux';
// import {store} from '../../redux/store'; // TODO:
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
  plant: {
    _id: '1',
    name: 'Parsley',
    desc: 'Curly variety',
    category: 'herbs',
    sowFrom: 'March',
    sowUntil: 'August',
    harvestFrom: 'May',
    harvestUntil: 'September'
  }
};

CalendarEntryMenuComponent.storyName = 'CalendarEntryMenu';
