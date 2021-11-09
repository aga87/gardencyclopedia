import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Tag from './Tag';

export default {
  title: 'Nano/Tag',
  component: Tag
} as ComponentMeta<typeof Tag>;

export const TagComponent: ComponentStory<typeof Tag> = args => (
  <Tag {...args} />
);
TagComponent.args = {
  tag: 'Tagged'
};
TagComponent.storyName = 'Tag';
