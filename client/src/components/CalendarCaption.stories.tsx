import React from 'react';
import { Story, Meta } from '@storybook/react';
import CalendarCaption from './CalendarCaption';

type CalendarCaptionProps = React.ComponentProps<typeof CalendarCaption>;

export default {
  title: 'Components/CalendarCaption',
  component: CalendarCaption
} as Meta;

export const CalendarCaptionComponent: Story<CalendarCaptionProps> = args => (
  <CalendarCaption {...args} />
);

CalendarCaptionComponent.args = {
  noOfPlants: 5
};

CalendarCaptionComponent.storyName = 'CalendarCaption';
