import React from 'react';
import { Provider } from 'react-redux';
import { Story, Meta } from '@storybook/react';
import { store } from '../../../../redux/store';

import TabbedAuthForm from './TabbedAuthForm';

export default {
  title: 'organisms/auth/TabbedAuthForm',
  component: TabbedAuthForm,
  decorators: [story => <Provider store={store}>{story()}</Provider>]
} as Meta;

export const TabbedAuthFormComponent: Story = () => <TabbedAuthForm />;

TabbedAuthFormComponent.storyName = 'TabbedAuthForm';
