import React from 'react';
import { useSelector } from 'react-redux';
import {
  selectIsMainMenuModalOpen,
  selectView,
  selectIsUserSettingsModalOpen
} from '../redux/reducers/index';
import MainMenuModal from '../components/03-organisms/MainMenuModal';
import UserSettingsModal from '../components/03-organisms/UserSettingsModal';
import CalendarView from './CalendarView';
import GardenView from './GardenView';

const Dashboard = (): JSX.Element => {
  const isMainMenuModalOpen = useSelector(selectIsMainMenuModalOpen);
  const isUserSettingsModalOpen = useSelector(selectIsUserSettingsModalOpen);
  const view = useSelector(selectView);

  return (
    <div>
      {isMainMenuModalOpen && <MainMenuModal />}
      {isUserSettingsModalOpen && <UserSettingsModal />}

      {view === 'calendar' ? <CalendarView /> : <GardenView />}
    </div>
  );
};

export default Dashboard;
