import React from 'react';
import { Story, Meta } from '@storybook/react';
import { Provider } from 'react-redux';
import { action } from '@storybook/addon-actions';
import Calendar from './Calendar';

// Mock Redux store
const plants = [
  {
    _id: '1',
    name: 'Parsley',
    desc: 'Curly variety',
    category: 'herbs',
    sowFrom: 'March',
    sowUntil: 'August',
    harvestFrom: 'May',
    harvestUntil: 'September'
  },
  {
    _id: '2',
    name: 'Pumpkin',
    desc: '',
    category: 'vegetables',
    sowFrom: 'March',
    sowUntil: 'August',
    harvestFrom: 'September',
    harvestUntil: 'October'
  },
  {
    _id: '3',
    name: 'Tomatoes',
    desc: 'Cherry',
    category: 'uncategorised',
    sowFrom: 'February',
    sowUntil: 'May',
    harvestFrom: 'June',
    harvestUntil: 'October'
  }
];

const store = {
  getState: () => ({
    plantsReducer: {
      plants,
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
      plants,
      filter: 'flowers',
      sort: '',
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
