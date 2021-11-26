import React from 'react';
import { Story, Meta } from '@storybook/react';
import Tab from './Tab';

type TabProps = React.ComponentProps<typeof Tab>;

export default {
  title: 'Nano/Tab',
  component: Tab,
  argTypes: {
    handleClick: { action: 'Tab clicked' }
  }
} as Meta<TabProps>;

const Template: Story<TabProps> = args => <Tab {...args} />;

export const Default = Template.bind({});
Default.args = {
  text: 'Tab'
};

export const Selected = Template.bind({});
Selected.args = {
  selected: true,
  text: 'Selected Tab'
};
