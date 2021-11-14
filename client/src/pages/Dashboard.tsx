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
import TopToolbar from '../components/Menus/TopToolbar';
import BottomToolbar from '../components/Menus/BottomToolbar';
import CalendarView from '../components/CalendarView';
import GardenView from '../components/GardenView';
import MainMenu from '../components/Menus/MainMenu';

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
          <TopToolbar />
          <section className='l-dashboard__content'>
            {view === 'calendar' ? (
              <CalendarView />
            ) : (
              <div className='l-flex-centerY'>
                <GardenView />
              </div>
            )}
          </section>

          <div className='l-dashboard__bottom-toolbar xxs-only'>
            <BottomToolbar />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
