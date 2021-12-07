import React from 'react';
import { Story, Meta } from '@storybook/react';
import { Provider } from 'react-redux';
import { action } from '@storybook/addon-actions';
import mockPlantsData from '../../utils/mock-data';
import CalendarPlantEntry from './CalendarPlantEntry';

type CalendarPlantEntryProps = React.ComponentProps<typeof CalendarPlantEntry>;

// Mock Redux store
const store = {
  getState: () => ({
    plantsReducer: {
      plants: mockPlantsData
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
