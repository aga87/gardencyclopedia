import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import SubmitBtn from './SubmitBtn';

export default {
  title: 'Nano/SubmitBtn',
  component: SubmitBtn,
  argTypes: {
    text: {
      defaultValue: 'Submit'
    }
  }
} as ComponentMeta<typeof SubmitBtn>;

const Template: ComponentStory<typeof SubmitBtn> = args => (
  <SubmitBtn {...args} />
);

export const Primary = Template.bind({});

export const Secondary = Template.bind({});
Secondary.args = {
  variant: 'secondary'
};
