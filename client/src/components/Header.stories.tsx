import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Header from './Header';

export default {
  title: 'Components/Header',
  component: Header
} as ComponentMeta<typeof Header>;

export const HeaderComponent: ComponentStory<typeof Header> = () => <Header />;
HeaderComponent.storyName = 'Header';
