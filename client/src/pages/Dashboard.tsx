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
import Plants from '../components/Plants';
import Garden from '../components/Garden';
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

      <div className="l-dashboard">
        <TopMenu />
        <div className="l-dashboard__content">
          {view === 'calendar' ? <Plants /> : <Garden />}
        </div>
        <div className="l-fixed-to-bottom">
          <BottomMenu />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
