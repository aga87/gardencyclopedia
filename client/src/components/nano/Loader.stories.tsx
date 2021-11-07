import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import LoaderComponent from './Loader';

export default {
  title: 'Nano/Loader',
  component: LoaderComponent
} as ComponentMeta<typeof LoaderComponent>;

export const Loader = () => <LoaderComponent />;
