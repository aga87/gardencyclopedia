import React from 'react';
import { Story, Meta } from '@storybook/react';
import Header from './Header';

type HeaderProps = React.ComponentProps<typeof Header>;

export default {
  title: 'Components/Header',
  component: Header
} as Meta<HeaderProps>;

const Template: Story<HeaderProps> = args => <Header {...args} />;

export const Primary = Template.bind({});

export const Secondary = Template.bind({});
Secondary.args = {
  variant: 'secondary',
  title: 'Section header'
};
