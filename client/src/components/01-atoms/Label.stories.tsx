import React from 'react';
import { Story, Meta } from '@storybook/react';
import Label from './Label';

type LabelProps = React.ComponentProps<typeof Label>;

export default {
  title: 'Nano/Label',
  component: Label,
  argTypes: {
    inputId: {
      defaultValue: ''
    }
  }
} as Meta<LabelProps>;

const Template: Story<LabelProps> = args => <Label {...args} />;

export const Primary = Template.bind({});

Primary.args = {
  label: 'I am a label for non-required input'
};

export const ForRequiredInput = Template.bind({});
ForRequiredInput.args = {
  label: 'I am a label for a required input',
  required: true
};
