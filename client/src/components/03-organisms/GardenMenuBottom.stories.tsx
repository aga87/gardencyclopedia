import React from 'react';
import { Story, Meta } from '@storybook/react';
import { Provider } from 'react-redux';
import { action } from '@storybook/addon-actions';
import GardenMenuBottom from './GardenMenuBottom';

// Mock Redux store
const store = {
  getState: () => ({}),
  subscribe: () => 0,
  dispatch: action('dispatch')
} as any; // FIXME: assign a correct type

export default {
  title: 'organisms/GardenMenuBottom',
  component: GardenMenuBottom,
  decorators: [story => <Provider store={store}>{story()}</Provider>]
} as Meta;

export const GardenMenuBottomComponent: Story = () => <GardenMenuBottom />;

GardenMenuBottomComponent.storyName = 'GardenMenuBottom';

// // Solution no 2 - connect to the store (but dispatched actions are not logged)

// import React from 'react';
// import { Story, Meta } from '@storybook/react';
// import { Provider } from 'react-redux';
// import { store } from '../../redux/store';
// import GardenMenuBottom from './GardenMenuBottom';

// export default {
//   title: 'Components/GardenMenuBottom',
//   component: GardenMenuBottom,
//   decorators: [story => <Provider store={store}>{story()}</Provider>]
// } as Meta;

// export const GardenMenuBottomComponent: Story = () => <GardenMenuBottom />;

// GardenMenuBottomComponent.storyName = 'GardenMenuBottom';
