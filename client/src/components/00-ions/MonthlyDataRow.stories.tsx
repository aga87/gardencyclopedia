import React from 'react';
import { Story, Meta } from '@storybook/react';
import MonthlyDataRow from './MonthlyDataRow';

type MonthlyDataRowProps = React.ComponentProps<typeof MonthlyDataRow>;

export default {
  title: 'Ions/MonthlyDataRow',
  component: MonthlyDataRow,
  decorators: [
    story => (
      <table style={{ width: '100%' }}>
        <tbody>{story()}</tbody>
      </table>
    )
  ]
} as Meta<MonthlyDataRowProps>;

const Template: Story<MonthlyDataRowProps> = args => (
  <MonthlyDataRow {...args} />
);

export const SowingData = Template.bind({});

SowingData.args = {
  variant: 'sow',
  monthStart: 'February',
  monthEnd: 'September'
};

export const HarvestingData = Template.bind({});

HarvestingData.args = {
  variant: 'harvest',
  monthStart: 'May',
  monthEnd: 'October'
};

export const NoData = Template.bind({});

NoData.args = {
  variant: 'harvest',
  monthStart: '',
  monthEnd: ''
};
