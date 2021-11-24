import React from 'react';
import { useSelector } from 'react-redux';
import {
  selectIsMainMenuModalOpen,
  selectView,
  selectIsAddPlantModalOpen,
  selectIsEditPlantModalOpen,
  selectIsUserSettingsModalOpen
} from '../redux/reducers/index';
import DashboardTemplate from '../components/templates/DashboardTemplate';
import MainMenuModal from '../components/MainMenuModal';
import UserSettingsModal from '../components/UserSettingsModal';
import PlantFormModal from '../components/PlantFormModal';
import CalendarMenuTop from '../components/CalendarMenuTop';
import GardenMenuTop from '../components/GardenMenuTop';
import CalendarMenuBottom from '../components/CalendarMenuBottom';
import GardenMenuBottom from '../components/GardenMenuBottom';
import CalendarView from '../components/CalendarView';
import GardenView from '../components/GardenView';
import MainMenu from '../components/MainMenu';

const Dashboard = (): JSX.Element => {
  const isMainMenuModalOpen = useSelector(selectIsMainMenuModalOpen);
  const isUserSettingsModalOpen = useSelector(selectIsUserSettingsModalOpen);
  const isAddPlantModalOpen = useSelector(selectIsAddPlantModalOpen);
  const isEditPlantModalOpen = useSelector(selectIsEditPlantModalOpen);
  const view = useSelector(selectView);

  return (
    <div>
      {isMainMenuModalOpen && <MainMenuModal />}
      {isUserSettingsModalOpen && <UserSettingsModal />}

      {view === 'calendar' ? (
        <div>
          {isAddPlantModalOpen && <PlantFormModal variant='add' />}
          {isEditPlantModalOpen && <PlantFormModal variant='edit' />}
          <DashboardTemplate
            sideContent={<MainMenu />}
            topMenu={<CalendarMenuTop />}
            bottomMenuMobile={<CalendarMenuBottom />}
            content={<CalendarView />}
          />
        </div>
      ) : (
        <DashboardTemplate
          sideContent={<MainMenu />}
          topMenu={<GardenMenuTop />}
          bottomMenuMobile={<GardenMenuBottom />}
          content={<GardenView />}
        />
      )}
    </div>
  );
};

export default Dashboard;
