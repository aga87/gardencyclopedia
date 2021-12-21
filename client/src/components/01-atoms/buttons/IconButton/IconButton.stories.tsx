import React from 'react';
import { Story, Meta } from '@storybook/react';
import IconButton from './IconButton';

type IconButtonProps = React.ComponentProps<typeof IconButton>;

export default {
  title: 'Atoms/Buttons/IconButton',
  component: IconButton,
  argTypes: {
    handleClick: { action: 'Button clicked' },
    ariaLabel: { defaultValue: 'accessible label' }
  }
} as Meta<IconButtonProps>;

const Template: Story<IconButtonProps> = args => <IconButton {...args} />;

export const Primary = Template.bind({});

Primary.parameters = {
  backgrounds: { default: 'forest' }
};

Primary.args = {
  variant: 'primary',
  iconName: 'menu'
};

export const Secondary = Template.bind({});

Secondary.args = {
  variant: 'secondary',
  iconName: 'more'
};
