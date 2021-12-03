import React from 'react';
import { Story, Meta } from '@storybook/react';
import SubmitButton from './SubmitButton';

type SubmitButtonProps = React.ComponentProps<typeof SubmitButton>;

export default {
  title: 'Atoms/Buttons/SubmitButton',
  component: SubmitButton
} as Meta;

export const SubmitButtonComponent: Story<SubmitButtonProps> = args => (
  <SubmitButton {...args} />
);

SubmitButtonComponent.args = {
  text: 'Submit'
};

SubmitButtonComponent.storyName = 'SubmitButton';
