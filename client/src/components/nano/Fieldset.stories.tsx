import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Fieldset from './Fieldset';

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
} as ComponentMeta<typeof Fieldset>;

export const FieldsetComponent: ComponentStory<typeof Fieldset> = args => (
  <Fieldset {...args} />
);
FieldsetComponent.storyName = 'Fieldset';
