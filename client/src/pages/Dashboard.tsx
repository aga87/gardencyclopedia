import React from 'react';
import { useSelector } from 'react-redux';
import {
  selectMainMenuModalIsOpen,
  selectView,
  selectPlantModalIsOpen,
  selectPlantToEdit
} from '../redux/reducers/index';
import PlantModal from '../components/PlantModal';
import MainMenuModal from '../components/MainMenuModal';
import TopMenu from '../components/Menus/TopMenu';
import CalendarView from '../components/CalendarView';
import GardenView from '../components/GardenView';
import BottomMenu from '../components/Menus/BottomMenu';

const Dashboard = (): JSX.Element => {
  const mainMenuModalIsOpen = useSelector(selectMainMenuModalIsOpen);
  const view = useSelector(selectView);
  const plantModalIsOpen = useSelector(selectPlantModalIsOpen);
  const plantToEdit = useSelector(selectPlantToEdit);

  return (
    <div>
      {mainMenuModalIsOpen && <MainMenuModal />}
      {plantModalIsOpen && <PlantModal plant={plantToEdit} />}

      <div className="p-dashboard l-dashboard">
        <TopMenu />
        <section className="l-dashboard__content">
          {view === 'calendar' ? (
            <CalendarView />
          ) : (
            <div className="l-flex-centerY">
              <GardenView />
            </div>
          )}
        </section>
        <div className="l-dashboard__bottom-menu">
          <BottomMenu />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
