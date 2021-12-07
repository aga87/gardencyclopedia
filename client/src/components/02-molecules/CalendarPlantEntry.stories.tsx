import React from 'react';
import { Story, Meta } from '@storybook/react';
import { Provider } from 'react-redux';
import { action } from '@storybook/addon-actions';
import CalendarPlantEntry from './CalendarPlantEntry';

type CalendarPlantEntryProps = React.ComponentProps<typeof CalendarPlantEntry>;

// Mock Redux store
const store = {
  getState: () => ({
    plantsReducer: {
      plants: [
        {
          _id: '1',
          name: 'Parsley',
          desc: 'Curly variety',
          category: 'herbs',
          sowFrom: 'March',
          sowUntil: 'August',
          harvestFrom: 'May',
          harvestUntil: 'September'
        }
      ]
    }
  }),
  subscribe: () => 0,
  dispatch: action('dispatch')
} as any;

export default {
  title: 'molecules/CalendarPlantEntry',
  component: CalendarPlantEntry,
  decorators: [story => <Provider store={store}>{story()}</Provider>]
} as Meta<CalendarPlantEntryProps>;

export const CalendarPlantEntryComponent: Story<CalendarPlantEntryProps> =
  args => <CalendarPlantEntry {...args} />;

CalendarPlantEntryComponent.args = {
  plantId: '1'
};

CalendarPlantEntryComponent.storyName = 'CalendarPlantEntry';
