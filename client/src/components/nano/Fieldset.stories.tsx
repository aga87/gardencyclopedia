import React from 'react';
import { Story, Meta } from '@storybook/react';
import Fieldset from './Fieldset';
import type { FieldsetProps } from './Fieldset';

export default {
  title: 'Nano/Fieldset',
  component: Fieldset,
  argTypes: {
    children: {
      defaultValue: 'Related form inputs will go here.'
    },
    legend: {
      defaultValue: 'Legend'
    }
  }
} as Meta;

export const FieldsetComponent: Story<FieldsetProps> = args => (
  <Fieldset {...args} />
);
FieldsetComponent.storyName = 'Fieldset';
