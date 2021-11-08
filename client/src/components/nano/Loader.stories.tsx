import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Loader from './Loader';

export default {
  title: 'Nano/Loader',
  component: Loader
} as ComponentMeta<typeof Loader>;

export const LoaderComponent: ComponentStory<typeof Loader> = () => <Loader />;
LoaderComponent.storyName = 'Loader';
