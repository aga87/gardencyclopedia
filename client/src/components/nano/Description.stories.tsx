import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Description from './Description';

export default {
  title: 'Nano/Description',
  component: Description
} as ComponentMeta<typeof Description>;

export const DescriptionComponent: ComponentStory<typeof Description> = args => (
  <Description {...args} />
);
DescriptionComponent.args = {
  text: 'Description'
};
DescriptionComponent.storyName = 'Description';
