import React from 'react';
import { Story, Meta } from '@storybook/react';
import Tag from './Tag';
import type { TagProps } from './Tag';

export default {
  title: 'Nano/Tag',
  component: Tag
} as Meta;

export const TagComponent: Story<TagProps> = args => <Tag {...args} />;

TagComponent.args = {
  tag: 'Tagged'
};

TagComponent.storyName = 'Tag';
