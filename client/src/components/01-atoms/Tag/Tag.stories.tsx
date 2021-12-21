import React from 'react';
import { Story, Meta } from '@storybook/react';
import Tag from './Tag';

type TagProps = React.ComponentProps<typeof Tag>;

export default {
  title: 'Atoms/Tag',
  component: Tag
} as Meta<TagProps>;

export const TagComponent: Story<TagProps> = args => <Tag {...args} />;

TagComponent.args = {
  tag: 'Tagged'
};

TagComponent.storyName = 'Tag';
