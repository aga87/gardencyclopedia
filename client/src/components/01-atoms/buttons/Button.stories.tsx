import React from 'react';
import { Story, Meta } from '@storybook/react';
import Button from './Button';

type ButtonProps = React.ComponentProps<typeof Button>;

export default {
  title: 'Nano/Buttons/Button',
  component: Button,
  argTypes: {
    handleClick: { action: 'Button clicked' },
    handleKeyDown: { action: 'Key pressed' }
  }
} as Meta<ButtonProps>;

const Template: Story<ButtonProps> = args => <Button {...args} />;

export const Primary = Template.bind({});

Primary.args = {
  variant: 'primary',
  text: 'Primary button'
};

export const Secondary = Template.bind({});

Secondary.args = {
  variant: 'secondary',
  text: 'Secondary button'
};

export const Tertiary = Template.bind({});

Tertiary.args = {
  variant: 'tertiary',
  text: 'Tertiary button'
};

export const WithIcon = Template.bind({});

WithIcon.args = {
  variant: 'tertiary',
  text: 'Button with icon',
  iconName: 'trash'
};
