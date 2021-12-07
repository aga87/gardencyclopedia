import React from 'react';
import { Story, Meta } from '@storybook/react';
import { Provider } from 'react-redux';
import { action } from '@storybook/addon-actions';
import CalendarView from './CalendarView';

// Mock Redux store
const storeDefault = {
  getState: () => ({
    uiReducer: {
      isAddPlantModalOpen: false,
      isEditPlantModalOpen: false
    },
    plantsReducer: {
      plants: []
    },
    authReducer: {
      user: {
        username: 'username'
      }
    }
  }),
  subscribe: () => 0,
  dispatch: action('dispatch')
} as any;

const storeModalOpen = {
  getState: () => ({
    uiReducer: {
      isAddPlantModalOpen: true
    },
    plantsReducer: {
      plants: []
    },
    authReducer: {
      user: {
        username: 'username'
      }
    }
  }),
  subscribe: () => 0,
  dispatch: action('dispatch')
} as any;

export default {
  title: 'pages/CalendarView',
  component: CalendarView,
  parameters: {
    layout: 'fullscreen'
  }
} as Meta;

const Template: Story = () => <CalendarView />;

export const DefaultXXS = Template.bind({});

DefaultXXS.decorators = [
  story => <Provider store={storeDefault}>{story()}</Provider>
];

DefaultXXS.parameters = {
  viewport: {
    defaultViewport: 'xxs'
  }
};

export const Default = Template.bind({});

Default.decorators = [
  story => <Provider store={storeDefault}>{story()}</Provider>
];

export const WithOpenModalXXS = Template.bind({});

WithOpenModalXXS.decorators = [
  story => <Provider store={storeModalOpen}>{story()}</Provider>
];

WithOpenModalXXS.parameters = {
  viewport: {
    defaultViewport: 'xxs'
  }
};

export const WithOpenModal = Template.bind({});

WithOpenModal.decorators = [
  story => <Provider store={storeModalOpen}>{story()}</Provider>
];
