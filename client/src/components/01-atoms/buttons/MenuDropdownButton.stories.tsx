import React from 'react';
import { Story, Meta } from '@storybook/react';
import MenuDropdownButton from './MenuDropdownButton';

type MenuDropdownButtonProps = React.ComponentProps<typeof MenuDropdownButton>;

export default {
  title: 'Nano/Buttons/MenuDropdownButton',
  component: MenuDropdownButton,
  argTypes: {
    handleClick: { action: 'Button clicked' },
    handleKeyDown: { action: 'Key pressed' }
  }
} as Meta<MenuDropdownButtonProps>;

const Template: Story<MenuDropdownButtonProps> = args => (
  <MenuDropdownButton {...args} />
);

export const Default = Template.bind({});

Default.args = {
  text: 'Button',
  iconName: 'edit'
};

export const Selected = Template.bind({});

Selected.args = {
  ...Default.args,
  selected: true
};
