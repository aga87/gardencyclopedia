import React from 'react';
import { Story, Meta } from '@storybook/react';
import Modal from './Modal';

type ModalProps = React.ComponentProps<typeof Modal>;

export default {
  title: 'Components/Modal',
  component: Modal,
  argTypes: {
    handleClose: { action: 'handleClose' },
    id: { defaultValue: 'modal-id' }
  }
} as Meta<ModalProps>;

const Template: Story<ModalProps> = args => <Modal {...args} />;

export const Primary = Template.bind({});

Primary.args = {
  variant: 'primary',
  title: 'Primary modal',
  children:
    'This is a window-heigh responsive modal with translucent darkened background.'
};

export const Secondary = Template.bind({});

Secondary.args = {
  variant: 'secondary',
  title: 'Secondary',
  children:
    'This is a window-heigh responsive modal with translucent darkened background. This variant is more narrow and there is no padding around the modal content.'
};
