import React from 'react';
import { Story, Meta } from '@storybook/react';
import SuccessMsg from './SuccessMsg';
import type { SuccessMsgProps } from './SuccessMsg';

export default {
  title: 'Nano/SuccessMsg',
  component: SuccessMsg
} as Meta;

export const SuccessMsgComponent: Story<SuccessMsgProps> = args => (
  <SuccessMsg {...args} />
);

SuccessMsgComponent.args = {
  msg: 'Success message.'
};

SuccessMsgComponent.storyName = 'SuccessMsg';
