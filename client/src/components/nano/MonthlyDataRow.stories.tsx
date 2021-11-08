import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import MonthlyDataRow from './MonthlyDataRow';
import { months } from '../../utils/constants';

export default {
  title: 'Nano/MonthlyDataRow',
  component: MonthlyDataRow,
  argTypes: {
    monthStart: {
      options: ['', ...months], // FIXME: infer types from d.ts
      // control: { type: 'select'}
    },
    monthEnd: {
      options: ['', ...months] // FIXME: infer types from d.ts
      // control: { type: 'select'},
    }
  },
  decorators: [
    Story => (
      <table style={{ width: '100%' }}>
        <tbody>
          {/* <Story />  */}
          {/* Bug - Use the syntax below to prevent NoDisplayName in component docs */}
          {Story()}
        </tbody>
      </table>
    )
  ]
} as ComponentMeta<typeof MonthlyDataRow>;


const Template: ComponentStory<typeof MonthlyDataRow> = args => (
  <MonthlyDataRow {...args} />
);

export const SowDefault = Template.bind({});

SowDefault.args = {
  variant: 'sow',
  monthStart: '',
  monthEnd: ''
};

export const SowFromTo = Template.bind({});

SowFromTo.args = {
  variant: 'sow',
  monthStart: 'January',
  monthEnd: 'October'
};

export const HarvestDefault = Template.bind({});

HarvestDefault.args = {
  variant: 'sow',
  monthStart: '',
  monthEnd: ''
};

export const HarvestFromTo = Template.bind({});

HarvestFromTo.args = {
  variant: 'harvest',
  monthStart: 'January',
  monthEnd: 'August'
};