import React from 'react';
import { Story, Meta } from '@storybook/react';
import { Provider } from 'react-redux';
import { action } from '@storybook/addon-actions';
import GardenMenuTop from './GardenMenuTop';

// Mock Redux store
const store = {
  getState: () => ({}),
  subscribe: () => 0,
  dispatch: action('dispatch')
} as any; // FIXME: assign a correct type

export default {
  title: 'organisms/GardenMenuTop',
  component: GardenMenuTop,
  decorators: [story => <Provider store={store}>{story()}</Provider>]
} as Meta;

const Template: Story = args => <GardenMenuTop />;

export const ResponsiveXXS: Story = Template.bind({});

ResponsiveXXS.parameters = {
  viewport: {
    defaultViewport: 'xxs'
  }
};

export const ResponsiveMinXXS: Story = Template.bind({});
