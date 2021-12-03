import React from 'react';
import { Story, Meta } from '@storybook/react';
import Garden from './Garden';

export default {
  title: 'organisms/Garden',
  component: Garden
} as Meta;

export const GardenComponent: Story = () => <Garden />;

GardenComponent.storyName = 'Garden';
