import React from 'react';
import { useSelector } from 'react-redux';
import {
  selectMainMenuModalIsOpen,
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

const Dashboard = (): JSX.Element => {
  const mainMenuModalIsOpen = useSelector(selectMainMenuModalIsOpen);
  const isAddPlantModalOpen = useSelector(selectIsAddPlantModalOpen);
  const isEditPlantModalOpen = useSelector(selectIsEditPlantModalOpen);
  const view = useSelector(selectView);

  return (
    <div>
      {mainMenuModalIsOpen && <MainMenuModal />}
      {isAddPlantModalOpen && <PlantModal variant='add' />}
      {isEditPlantModalOpen && <PlantModal variant='edit' />}

      <div className='p-dashboard l-dashboard'>
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
        <div className='l-dashboard__bottom-menu'>
          <BottomMenu />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
