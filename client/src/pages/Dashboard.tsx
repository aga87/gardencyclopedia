import React from 'react';
import { useSelector } from 'react-redux';
import {
  selectIsMainMenuModalOpen,
  selectView,
  selectIsAddPlantModalOpen,
  selectIsEditPlantModalOpen,
  selectIsUserSettingsModalOpen
} from '../redux/reducers/index';
import MainMenuModal from '../components/MainMenuModal';
import UserSettingsModal from '../components/UserSettingsModal';
import PlantModal from '../components/PlantModal';
import CalendarMenuTop from '../components/Menus/CalendarMenuTop';
import GardenMenuTop from '../components/Menus/GardenMenuTop';
import CalendarMenuBottom from '../components/Menus/CalendarMenuBottom';
import GardenMenuBottom from '../components/Menus/GardenMenuBottom';
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
      {isAddPlantModalOpen && <PlantModal variant='add' />}
      {isEditPlantModalOpen && <PlantModal variant='edit' />}

      <div className='p-dashboard l-dashboard'>
        <div className='l-dashboard__flex-main-menu not-xxs'>
          <h2 className='p-dashboard__title'>Gardencyclopedia</h2>
          <MainMenu />
        </div>
        <div className='l-dashboard__flex-content'>
          {view === 'calendar' ? <CalendarMenuTop /> : <GardenMenuTop />}
          <section className='l-dashboard__content'>
            {view === 'calendar' ? <CalendarView /> : <GardenView />}
          </section>
          <div className='l-dashboard__bottom-toolbar xxs-only'>
            {view === 'calendar' ? (
              <CalendarMenuBottom />
            ) : (
              <GardenMenuBottom />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
