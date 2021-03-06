import React from 'react';
import { Story, Meta } from '@storybook/react';
import Logo from './Logo';

export default {
  title: 'Atoms/Logo',
  component: Logo
} as Meta;

export const LogoComponent: Story = () => <Logo />;

LogoComponent.storyName = 'Logo';
