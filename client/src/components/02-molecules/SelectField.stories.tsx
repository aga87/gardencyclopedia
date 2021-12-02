import React from 'react';
import { Story, Meta } from '@storybook/react';
import SelectField from './SelectField';

type SelectFieldProps = React.ComponentProps<typeof SelectField>;

export default {
  title: 'Molecules/SelectField',
  component: SelectField,
  argTypes: {
    handleChange: { action: 'handleChange' },
    // disable controlled value prop
    value: {
      control: {
        disable: true
      }
    }
  }
} as Meta<SelectFieldProps>;

const Template: Story<SelectFieldProps> = args => <SelectField {...args} />;

export const Required = Template.bind({});

Required.args = {
  options: ['Option 1', 'Longer option 2', 'Last option'],
  label: 'Label for required select field',
  required: true,
  inputId: 'input-id',
  errorId: 'error-id',
  errorMsg: ''
};

export const Optional = Template.bind({});

Optional.args = {
  ...Required.args,
  label: 'Label for optional select field',
  required: false
};

export const WithPlaceholderAndError = Template.bind({});

WithPlaceholderAndError.args = {
  ...Required.args,
  label: 'Label for required field with placeholder',
  placeholder: 'Select option',
  errorMsg: 'This field is required.'
};
