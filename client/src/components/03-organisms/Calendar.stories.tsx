import React from 'react';
import { Story, Meta } from '@storybook/react';
import { Provider } from 'react-redux';
import { action } from '@storybook/addon-actions';
import mockPlantsData from '../../utils/mock-data';
import Calendar from './Calendar';

// Mock Redux store
const store = {
  getState: () => ({
    plantsReducer: {
      plants: mockPlantsData,
      statusMsg: {
        id: 1,
        msg: ''
      }
    }
  }),
  subscribe: () => 0,
  dispatch: action('dispatch')
} as any;

const storeEmpty = {
  getState: () => ({
    plantsReducer: {
      plants: [],
      statusMsg: {
        id: 1,
        msg: ''
      }
    }
  }),
  subscribe: () => 0,
  dispatch: action('dispatch')
} as any;

export default {
  title: 'organisms/Calendar',
  component: Calendar
} as Meta;

const Template: Story = () => <Calendar />;

export const WithPlants = Template.bind({});

WithPlants.decorators = [story => <Provider store={store}>{story()}</Provider>];

export const Empty = Template.bind({});

Empty.decorators = [
  story => (
    <div style={{ height: '100vh' }}>
      <Provider store={storeEmpty}>{story()}</Provider>
    </div>
  )
];
