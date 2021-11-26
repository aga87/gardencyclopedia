import React, { useState } from 'react';
import { Story, Meta } from '@storybook/react';
import Select from './Select';
import type {SelectProps} from './Select';

export default {
  title: 'Nano/Select',
  component: Select,
  argTypes: {
    // controlled value prop
    value: {
      control: {
        disable: true
      }
    }
  }
} as Meta;

const Template: Story<SelectProps> = args => {
  const [value, setValue] = useState(args.value ?? '');

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setValue(e.target.value);
  };

  return (
    <>
      <Select {...args} value={value} handleChange={handleChange} />
      <pre style={{ marginTop: 10 }}>{value}</pre>
    </>
  );
};

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
