import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import SubmitButton from './SubmitButton';

export default {
  title: 'Nano/SubmitButton',
  component: SubmitButton,
  argTypes: {
    text: {
      defaultValue: 'Submit'
    }
  }
} as ComponentMeta<typeof SubmitButton>;

const Template: ComponentStory<typeof SubmitButton> = args => (
  <SubmitButton {...args} />
);

export const Primary = Template.bind({});

export const Secondary = Template.bind({});
Secondary.args = {
  variant: 'secondary'
};
