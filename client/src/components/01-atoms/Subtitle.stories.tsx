import React from 'react';
import { Story, Meta } from '@storybook/react';
import Subtitle from './Subtitle';

type SubtitleProps = React.ComponentProps<typeof Subtitle>;

export default {
  title: 'Atoms/Subtitle',
  component: Subtitle
} as Meta<SubtitleProps>;

export const SubtitleComponent: Story<SubtitleProps> = args => (
  <Subtitle {...args} />
);

SubtitleComponent.args = {
  subtitle: 'Subtitle'
};

SubtitleComponent.storyName = 'Subtitle';
