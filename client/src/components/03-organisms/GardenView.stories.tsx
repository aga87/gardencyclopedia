import React from 'react';
import { Story, Meta } from '@storybook/react';
import GardenView from './GardenView';

export default {
  title: 'Components/GardenView',
  component: GardenView
} as Meta;

export const GardenViewComponent: Story = () => <GardenView />;

GardenViewComponent.storyName = 'GardenView';
