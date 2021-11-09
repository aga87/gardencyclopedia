import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Tab from './Tab';

export default {
  title: 'Nano/Tab',
  component: Tab,
  argTypes: {
    handleClick: { action: 'Tab clicked' }
  }
} as ComponentMeta<typeof Tab>;

const Template: ComponentStory<typeof Tab> = args => <Tab {...args} />;

export const Default = Template.bind({});
Default.args = {
  text: 'Tab'
};

export const Selected = Template.bind({});
Selected.args = {
  selected: true,
  text: 'Selected Tab'
};
