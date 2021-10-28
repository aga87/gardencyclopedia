import React, { useEffect } from 'react';
import './css/index.css';
import { useSelector, useDispatch } from 'react-redux';
import {
  selectIsAuthenticated,
  selectMainMenuModalIsOpen,
  selectView,
  selectPlantModalIsOpen,
  selectPlantToEdit
} from './redux/reducers/index';
import loadUser from './redux/actions/authActions';
import AuthModal from './components/AuthModal';
import PlantModal from './components/PlantModal';
import MainMenuModal from './components/MainMenuModal';
import TopMenu from './components/Menus/TopMenu';
import Plants from './components/Plants';
import Garden from './components/Garden';
import BottomMenu from './components/Menus/BottomMenu';

const App = (): JSX.Element => {
  const isAuthenticated = useSelector(selectIsAuthenticated);
  const mainMenuModalIsOpen = useSelector(selectMainMenuModalIsOpen);
  const view = useSelector(selectView);
  const plantModalIsOpen = useSelector(selectPlantModalIsOpen);
  const plantToEdit = useSelector(selectPlantToEdit);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadUser());
  });

  return (
    <div>
      {!isAuthenticated && <AuthModal />}
      {mainMenuModalIsOpen && <MainMenuModal />}

      {plantModalIsOpen && <PlantModal plant={plantToEdit} />}
      <div className="l-app-wrapper">
        <TopMenu />
        <div className="l-app-content">
          {view === 'calendar' ? <Plants /> : <Garden />}
        </div>
        <div className="l-fixed-to-bottom">
          <BottomMenu />
        </div>
      </div>
    </div>
  );
};

export default App;
