import React from 'react';
import { useSelector } from 'react-redux';
import {
  selectIsMainMenuModalOpen,
  selectView,
  selectIsAddPlantModalOpen,
  selectIsEditPlantModalOpen,
  selectIsUserSettingsModalOpen
} from '../redux/reducers/index';
import MainMenuModal from '../components/03-organisms/MainMenuModal';
import UserSettingsModal from '../components/03-organisms/UserSettingsModal';
import PlantFormModal from '../components/03-organisms/PlantFormModal';
import CalendarMenuTop from '../components/03-organisms/CalendarMenuTop';
import GardenMenuTop from '../components/03-organisms/GardenMenuTop';
import CalendarMenuBottom from '../components/03-organisms/CalendarMenuBottom';
import GardenMenuBottom from '../components/03-organisms/GardenMenuBottom';
import CalendarView from '../components/03-organisms/CalendarView';
import GardenView from '../components/03-organisms/GardenView';
import MainMenu from '../components/03-organisms/MainMenu';
import DashboardTemplate from '../components/04-templates/DashboardTemplate';

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
