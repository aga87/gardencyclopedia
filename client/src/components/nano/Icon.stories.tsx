import React from 'react';
import { Story, Meta } from '@storybook/react';
import Icon from './Icon';

type IconProps = React.ComponentProps<typeof Icon>;

export default {
  title: 'Nano/Icon',
  component: Icon
} as Meta<IconProps>;


const iconNames = [
  'menu',
  'plus',
  'spinner',
  'more',
  'trash',
  'edit',
  'user-cog',
  'calendar',
  'seedling',
  'logout',
  'close'
] as IconProps['name'][];

export const All = () => (
  <div>
    <h2 style={{ marginBottom: '2em', borderBottom: '2px solid pink' }}>
      Iconography
    </h2>
    {iconNames.map(iconName => (
      <span style={{ marginRight: '10px' }}>
        <Icon name={iconName} />
      </span>
    ))}
  </div>
);

const Template: Story<IconProps> = args => <Icon {...args} />;

export const Example = Template.bind({});

Example.args = {
  name: 'menu'
};