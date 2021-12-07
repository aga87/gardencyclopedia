import React from 'react';
import { Provider } from 'react-redux';
import { Story, Meta } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import mockPlantsData from '../../utils/mock-data';
import CalendarPlantFormModal from './CalendarPlantFormModal';

type CalendarPlantFormModalProps = React.ComponentProps<
  typeof CalendarPlantFormModal
>;

// Mock Redux store
const store = {
  getState: () => ({
    uiReducer: {
      plantToEditId: ''
    },
    plantsReducer: {
      plants: []
    }
  }),
  subscribe: () => 0,
  dispatch: action('dispatch')
} as any;

const storeEdit = {
  getState: () => ({
    uiReducer: {
      plantToEditId: '1'
    },
    plantsReducer: {
      plants: mockPlantsData
    }
  }),
  subscribe: () => 0,
  dispatch: action('dispatch')
} as any;

export default {
  title: 'organisms/CalendarPlantFormModal',
  component: CalendarPlantFormModal
} as Meta<CalendarPlantFormModalProps>;

const Template: Story<CalendarPlantFormModalProps> = args => (
  <CalendarPlantFormModal {...args} />
);

export const AddNewPlant = Template.bind({});

AddNewPlant.decorators = [
  story => <Provider store={store}>{story()}</Provider>
];

AddNewPlant.args = {
  variant: 'add'
};

export const EditPlant = Template.bind({});

EditPlant.decorators = [
  story => <Provider store={storeEdit}>{story()}</Provider>
];

EditPlant.args = {
  variant: 'edit'
};
