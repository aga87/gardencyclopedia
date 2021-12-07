import React from 'react';
import { Provider } from 'react-redux';
import { Story, Meta } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import CalendarPlantFormModal from './CalendarPlantFormModal';

type CalendarPlantFormModalProps = React.ComponentProps<
  typeof CalendarPlantFormModal
>;

const store = {
  getState: () => ({
    uiReducer: {
      plantToEditId: '1'
    },
    plantsReducer: {
      plants: []
    }
  }),
  subscribe: () => 0,
  dispatch: action('dispatch')
} as any;

// Mock Redux store - edit plant form
const storeEdit = {
  getState: () => ({
    uiReducer: {
      plantToEditId: '1'
    },
    plantsReducer: {
      plants: [
        {
          _id: '1',
          name: 'Parsley',
          desc: 'Curly variety',
          category: 'herbs',
          sowFrom: 'March',
          sowUntil: 'August',
          harvestFrom: 'May',
          harvestUntil: 'September'
        }
      ]
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
