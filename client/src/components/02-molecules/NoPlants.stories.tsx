import React from 'react';
import { Provider } from 'react-redux';
import { Story, Meta } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import NoPlants from './NoPlants';

// Mock Redux store
const store = {
    getState: () => ({}),
    subscribe: () => 0,
    dispatch: action('dispatch')
  } as any; // FIXME: assign correct type

export default {
  title: 'Molecules/NoPlants',
  component: NoPlants,
  decorators: [story => <Provider store={store}>{story()}</Provider>]
} as Meta;

export const NoPlantsComponent: Story = () => <NoPlants />;

NoPlantsComponent.storyName = 'NoPlants';
