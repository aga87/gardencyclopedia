import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Icon from './Icon';

export default {
  title: 'Nano/Icon',
  component: Icon
} as ComponentMeta<typeof Icon>;

export const IconComponent: ComponentStory<typeof Icon> = args => (
  <Icon {...args} />
);

IconComponent.storyName = 'Icon';
