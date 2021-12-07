import React from 'react';
import { useAppSelector } from '../redux/typed-hooks';
import {
  selectIsAddPlantModalOpen,
  selectIsEditPlantModalOpen
} from '../redux/reducers/index';
import CalendarPlantFormModal from '../components/03-organisms/CalendarPlantFormModal';
import CalendarMenuTop from '../components/03-organisms/CalendarMenuTop';
import CalendarWithLoading from '../components/03-organisms/CalendarWithLoading';
import CalendarMenuBottom from '../components/03-organisms/CalendarMenuBottom';
import MainMenu from '../components/03-organisms/MainMenu';
import DashboardTemplate from '../components/04-templates/DashboardTemplate';

const CalendarView = (): JSX.Element => {
  const isAddPlantModalOpen = useAppSelector(selectIsAddPlantModalOpen);
  const isEditPlantModalOpen = useAppSelector(selectIsEditPlantModalOpen);

  return (
    <div>
      {isAddPlantModalOpen && <CalendarPlantFormModal variant='add' />}
      {isEditPlantModalOpen && <CalendarPlantFormModal variant='edit' />}
      <DashboardTemplate
        sideContent={<MainMenu />}
        topMenu={<CalendarMenuTop />}
        bottomMenuMobile={<CalendarMenuBottom />}
        content={<CalendarWithLoading />}
      />
    </div>
  );
};

export default CalendarView;
