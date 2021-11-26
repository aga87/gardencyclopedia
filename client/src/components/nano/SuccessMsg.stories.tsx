import React from 'react';
import { Story, Meta } from '@storybook/react';
import SuccessMsg from './SuccessMsg';

type SuccessMsgProps = React.ComponentProps<typeof SuccessMsg>;

export default {
  title: 'Nano/SuccessMsg',
  component: SuccessMsg
} as Meta<SuccessMsgProps>;

export const SuccessMsgComponent: Story<SuccessMsgProps> = args => (
  <SuccessMsg {...args} />
);

SuccessMsgComponent.args = {
  msg: 'Success message.'
};

SuccessMsgComponent.storyName = 'SuccessMsg';
