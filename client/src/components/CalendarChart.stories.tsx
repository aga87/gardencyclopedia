import React from 'react';
import { Story, Meta } from '@storybook/react';
import CalendarChart from './CalendarChart';

type CalendarChartProps = React.ComponentProps<typeof CalendarChart>;

export default {
  title: 'Components/CalendarChart',
  component: CalendarChart
} as Meta<CalendarChartProps>;

const Template: Story<CalendarChartProps> = args => <CalendarChart {...args} />;

export const WithData = Template.bind({});

WithData.args = {
  sowFrom: 'January',
  sowUntil: 'May',
  harvestFrom: 'February',
  harvestUntil: 'September'
};

export const WithoutData = Template.bind({});

WithoutData.args = {
  sowFrom: '',
  sowUntil: '',
  harvestFrom: '',
  harvestUntil: ''
};
