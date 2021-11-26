import React from 'react';
import { Story, Meta } from '@storybook/react';
import Icon from './Icon';
import type { IconProps } from './Icon';

export default {
  title: 'Nano/Icon',
  component: Icon
} as Meta;

export const IconComponent: Story<IconProps> = args => <Icon {...args} />;

IconComponent.storyName = 'Icon';
