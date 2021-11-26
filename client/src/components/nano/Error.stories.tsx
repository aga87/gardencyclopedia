import React from 'react';
import { Story, Meta } from '@storybook/react';
import Error from './Error';
import type { ErrorProps } from './Error';

export default {
  title: 'Nano/Error',
  component: Error
} as Meta;

const Template: Story<ErrorProps> = args => <Error {...args} />;

export const Primary = Template.bind({});

Primary.args = {
  msg: 'I am a client-side error.'
};

export const Server = Template.bind({});
Server.args = {
  variant: 'server',
  msg: 'I am a server-side error.'
};
