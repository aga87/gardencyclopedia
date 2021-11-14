import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import SubmitButton from './SubmitButton';

export default {
  title: 'Nano/SubmitButton',
  component: SubmitButton
} as ComponentMeta<typeof SubmitButton>;

export const SubmitButtonComponent: ComponentStory<typeof SubmitButton> =
  args => <SubmitButton {...args} />;

SubmitButtonComponent.args = {
  text: 'Submit'
};

SubmitButtonComponent.storyName = 'SubmitButton';
