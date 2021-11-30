import React from 'react';
import { Story, Meta } from '@storybook/react';
import TextField from './TextField';

type TextFieldProps = React.ComponentProps<typeof TextField>;

export default {
  title: 'Components/TextField',
  component: TextField,
  argTypes: {
    handleChange: { action: 'handleChange' },
    // disable controlled value prop
    value: {
      control: {
        disable: true
      }
    }
  }
} as Meta<TextFieldProps>;

const Template: Story<TextFieldProps> = args => <TextField {...args} />;

export const Required = Template.bind({});

Required.args = {
  label: 'Label for required input',
  required: true,
  type: 'text',
  maxLength: 20,
  inputId: 'input-id',
  errorId: 'error-id',
  errorMsg: ''
};

export const Optional = Template.bind({});

Optional.args = {
  ...Required.args,
  label: 'Label for optional input',
  required: false
};

export const WithError = Template.bind({});

WithError.args = {
  ...Required.args,
  errorMsg: 'This field is required.'
};
