import React from 'react';
import { useSelector } from 'react-redux';
import {
  selectIsMainMenuModalOpen,
  selectView,
  selectIsAddPlantModalOpen,
  selectIsEditPlantModalOpen
} from '../redux/reducers/index';
import MainMenuModal from '../components/MainMenuModal';
import PlantModal from '../components/PlantModal';
import TopMenu from '../components/Menus/TopMenu';
import CalendarView from '../components/CalendarView';
import GardenView from '../components/GardenView';
import BottomMenu from '../components/Menus/BottomMenu';
import MainMenu from '../components/Menus/MainMenu';

const Dashboard = (): JSX.Element => {
  const isMainMenuModalOpen = useSelector(selectIsMainMenuModalOpen);
  const isAddPlantModalOpen = useSelector(selectIsAddPlantModalOpen);
  const isEditPlantModalOpen = useSelector(selectIsEditPlantModalOpen);
  const view = useSelector(selectView);

  return (
    <div>
      {isMainMenuModalOpen && <MainMenuModal />}
      {isAddPlantModalOpen && <PlantModal variant='add' />}
      {isEditPlantModalOpen && <PlantModal variant='edit' />}

      <div className='p-dashboard l-dashboard'>
        <div className='l-dashboard__flex-main-menu not-xss'>
          <MainMenu />
        </div>
        <div className='l-dashboard__flex-content'>
          <TopMenu />
          <section className='l-dashboard__content'>
            {view === 'calendar' ? (
              <CalendarView />
            ) : (
              <div className='l-flex-centerY'>
                <GardenView />
              </div>
            )}
          </section>

          <div className='l-dashboard__bottom-menu xxs-only'>
            <BottomMenu />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
