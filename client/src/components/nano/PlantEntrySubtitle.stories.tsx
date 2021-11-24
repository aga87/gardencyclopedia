import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import PlantEntrySubtitle from './PlantEntrySubtitle';

export default {
  title: 'Nano/PlantEntrySubtitle',
  component: PlantEntrySubtitle
} as ComponentMeta<typeof PlantEntrySubtitle>;

export const PlantEntrySubtitleComponent: ComponentStory<typeof PlantEntrySubtitle> = args => (
  <PlantEntrySubtitle {...args} />
);
PlantEntrySubtitleComponent.args = {
  subtitle: 'Plant entry subtitle / plant variety'
};
PlantEntrySubtitleComponent.storyName = 'Description';
