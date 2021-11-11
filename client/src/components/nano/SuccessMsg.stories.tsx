import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import SuccessMsg from './SuccessMsg';

export default {
  title: 'Nano/SuccessMsg',
  component: SuccessMsg
} as ComponentMeta<typeof SuccessMsg>;

export const SuccessMsgComponent: ComponentStory<typeof SuccessMsg> = args => (
  <SuccessMsg {...args} />
);

SuccessMsgComponent.args = {
  msg: 'Success message.'
};

SuccessMsgComponent.storyName = 'SuccessMsg';
