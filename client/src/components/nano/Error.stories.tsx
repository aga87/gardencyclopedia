import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Error from './Error';

export default {
  title: 'Nano/Error',
  component: Error
} as ComponentMeta<typeof Error>;

const Template: ComponentStory<typeof Error> = args => <Error {...args} />;

export const Primary = Template.bind({});

Primary.args = {
  msg: 'I am a client-side error.'
};

export const Server = Template.bind({});
Server.args = {
  variant: 'server',
  msg: 'I am a server-side error.'
};
