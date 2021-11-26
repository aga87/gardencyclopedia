import React from 'react';
import { Story, Meta } from '@storybook/react';
import SubmitButton from './SubmitButton';
import type { SubmitButtonProps } from './SubmitButton';

export default {
  title: 'Nano/SubmitButton',
  component: SubmitButton
} as Meta;

export const SubmitButtonComponent: Story<SubmitButtonProps> = args => (
  <SubmitButton {...args} />
);

SubmitButtonComponent.args = {
  text: 'Submit'
};

SubmitButtonComponent.storyName = 'SubmitButton';
