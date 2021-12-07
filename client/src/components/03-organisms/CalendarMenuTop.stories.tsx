import React from 'react';
import { Provider } from 'react-redux';
import { Story, Meta } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import CalendarMenuTop from './CalendarMenuTop';

// Mock Redux store
const store = {
  getState: () => ({
    plantsReducer: {
      sort: '',
      filter: ''
    }
  }),
  subscribe: () => 0,
  dispatch: action('dispatch')
} as any; // FIXME: assign correct type

export default {
  title: 'organisms/CalendarMenuTop',
  component: CalendarMenuTop,
  decorators: [story => <Provider store={store}>{story()}</Provider>]
} as Meta;

const Template: Story = () => <CalendarMenuTop />;

export const ResponsiveXXS: Story = Template.bind({});

ResponsiveXXS.parameters = {
  viewport: {
    defaultViewport: 'xxs'
  }
};

export const ResponsiveMinXXS: Story = Template.bind({});
