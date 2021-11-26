import React from 'react';
import { Story, Meta } from '@storybook/react';
import PlantEntrySubtitle from './PlantEntrySubtitle';

type PlantEntrySubtitleProps = React.ComponentProps<typeof PlantEntrySubtitle>;

export default {
  title: 'Nano/PlantEntrySubtitle',
  component: PlantEntrySubtitle
} as Meta<PlantEntrySubtitleProps>;

export const PlantEntrySubtitleComponent: Story<PlantEntrySubtitleProps> =
  args => <PlantEntrySubtitle {...args} />;

PlantEntrySubtitleComponent.args = {
  subtitle: 'Plant entry subtitle / plant variety'
};

PlantEntrySubtitleComponent.storyName = 'Description';
