import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Tag from './Tag';

export default {
  title: 'Nano/Tag',
  component: Tag
} as ComponentMeta<typeof Tag>;

const Template: ComponentStory<typeof Tag> = args => <Tag {...args} />;

export const Primary = Template.bind({});

Primary.args = {
    tag: 'uncategorised'
    // tag: "str"
  };

// export const Light = Template.bind({});
// Light.args = {
//   variant: 'light'
// };