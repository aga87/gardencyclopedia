import React from 'react';
import { Story, Meta } from '@storybook/react';
import Loader from './Loader';

export default {
  title: 'Atoms/Loader',
  component: Loader
} as Meta;

export const LoaderComponent: Story = () => <Loader />;
LoaderComponent.storyName = 'Loader';
