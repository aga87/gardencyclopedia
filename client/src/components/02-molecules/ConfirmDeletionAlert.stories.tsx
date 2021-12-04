import React from 'react';
import { Story, Meta } from '@storybook/react';
import ConfirmDeletionAlert from './ConfirmDeletionAlert';

type ConfirmDeletionAlertProps = React.ComponentProps<
  typeof ConfirmDeletionAlert
>;

export default {
  title: 'Molecules/ConfirmDeletionAlert',
  component: ConfirmDeletionAlert,
  argTypes: {
    handleCancel: { action: 'handleCancel' },
    handleDelete: { action: 'handleDelete' }
  }
} as Meta;

export const ConfirmDeletionAlertComponent: Story<ConfirmDeletionAlertProps> =
  args => <ConfirmDeletionAlert {...args} />;

ConfirmDeletionAlertComponent.args = {
  itemName: 'Item name',
  id: 'alert-id'
};

ConfirmDeletionAlertComponent.storyName = 'ConfirmDeletionAlert';
