import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Logo from './Logo';

export default {
  title: 'Nano/Logo',
  component: Logo
} as ComponentMeta<typeof Logo>;

export const LogoComponent: ComponentStory<typeof Logo> = () => <Logo />;

LogoComponent.storyName = 'Logo';
