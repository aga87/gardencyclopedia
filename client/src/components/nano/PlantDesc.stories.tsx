import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import PlantDesc from './PlantDesc';

export default {
  title: 'Nano/PlantDesc',
  component: PlantDesc
} as ComponentMeta<typeof PlantDesc>;

export const PlantDescComponent: ComponentStory<typeof PlantDesc> = args => (
  <PlantDesc {...args} />
);
PlantDescComponent.args = {
  desc: 'Plant description'
};
PlantDescComponent.storyName = 'PlantDesc';
