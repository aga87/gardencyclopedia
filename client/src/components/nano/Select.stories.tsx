import React, { useState } from 'react';
import { Story, Meta } from '@storybook/react';
import Select from './Select';

type SelectProps = React.ComponentProps<typeof Select>;

export default {
  title: 'Nano/Select',
  component: Select,
  argTypes: {
    handleChange: { action: 'handleChange' },
    // disable controls for controlled value prop
    value: {
      control: {
        disable: true
      }
    }
  },
  parameters: {
    backgrounds: { default: 'forest' }
  }
} as Meta<SelectProps>;

const Template: Story<SelectProps> = args => <Select {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  options: [
    'Option 1',
    'Longer option 2',
    'option 3 (gets capitalised)',
    'option 4'
  ]
};

export const WithPlaceholder = Template.bind({});
WithPlaceholder.args = {
  ...Primary.args,
  placeholder: 'Select option'
};

export const WithSortIcon = Template.bind({});
WithSortIcon.args = {
  ...Primary.args,
  variant: 'sort',
  ariaLabel: 'Sort by'
};
