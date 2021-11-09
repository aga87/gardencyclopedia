import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Logo from './Logo';

export default {
  title: 'Nano/Logo',
  component: Logo
} as ComponentMeta<typeof Logo>;

const Template: ComponentStory<typeof Logo> = args => <Logo {...args} />;

export const Primary = Template.bind({});

export const Light = Template.bind({});
Light.args = {
  variant: 'light'
};