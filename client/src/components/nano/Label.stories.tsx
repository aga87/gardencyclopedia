import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Label from './Label';

export default {
  title: 'Nano/Label',
  component: Label,
  argTypes: {
    inputId: {
      defaultValue: ''
    }
  }
} as ComponentMeta<typeof Label>;

const Template: ComponentStory<typeof Label> = args => <Label {...args} />;

export const Primary = Template.bind({});

Primary.args = {
  label: 'I am a label for non-required input'
};

export const ForRequiredInput = Template.bind({});
ForRequiredInput.args = {
  label: 'I am a label for a required input',
  required: true
};
