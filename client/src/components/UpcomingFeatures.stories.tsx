import React from 'react';
import { Story, Meta } from '@storybook/react';
import UpcomingFeatures from './UpcomingFeatures';

type UpcomingFeaturesProps = React.ComponentProps<typeof UpcomingFeatures>;

export default {
  title: 'Components/UpcomingFeatures',
  component: UpcomingFeatures
} as Meta;

export const UpcomingFeaturesComponent: Story<UpcomingFeaturesProps> = args => (
  <UpcomingFeatures {...args} />
);

UpcomingFeaturesComponent.args = {
  features: [
    'Upcoming feature 1',
    'Upcoming feature 2',
    'Upcoming longer feature 3'
  ]
};

UpcomingFeaturesComponent.storyName = 'UpcomingFeatures';
