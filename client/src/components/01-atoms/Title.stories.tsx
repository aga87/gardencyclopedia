import React from 'react';
import { Story, Meta } from '@storybook/react';
import Title from './Title';

type TitleProps = React.ComponentProps<typeof Title>;

export default {
  title: 'Nano/Title',
  component: Title
} as Meta<TitleProps>;

export const TitleComponent: Story<TitleProps> = args => <Title {...args} />;

TitleComponent.args = {
  title: 'Title'
};

TitleComponent.storyName = 'Title';
