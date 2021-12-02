import React from 'react';
import { Story, Meta } from '@storybook/react';
import DropdownToggleButton from './DropdownToggleButton';

type DropdownToggleButtonProps = React.ComponentProps<
  typeof DropdownToggleButton
>;

export default {
  title: 'Nano/Buttons/DropdownToggleButton',
  component: DropdownToggleButton,
  argTypes: {
    handleClick: { action: 'Button clicked' },
    handleKeyDown: { action: 'Key pressed' }
  }
} as Meta<DropdownToggleButtonProps>;

const Template: Story<DropdownToggleButtonProps> = args => (
  <DropdownToggleButton {...args} />
);

export const Primary = Template.bind({});

Primary.parameters = {
  backgrounds: { default: 'forest' }
};

Primary.args = {
  variant: 'primary',
  iconName: 'menu',
  ariaLabel: 'Toggle menu',
  id: 'button-id',
  dropdownId: 'dropdownId'
};

export const Secondary = Template.bind({});

Secondary.args = {
  ...Primary.args,
  variant: 'secondary',
  iconName: 'more'
};
