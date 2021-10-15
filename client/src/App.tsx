import React, { useEffect } from 'react';
import './css/index.css';
import { useSelector, useDispatch } from 'react-redux';
import {
  selectIsAuthenticated,
  selectView,
  selectPlantModalIsOpen,
  selectPlantToEdit
} from './redux/reducers/index';
import loadUser from './redux/actions/authActions';
import RegistrationModal from './components/RegistrationModal';
import PlantModal from './components/PlantModal';
import MainMenu from './components/Menus/MainMenu';
import TopMenu from './components/Menus/TopMenu';
import Plants from './components/Plants';
import Garden from './components/Garden';
import BottomMenu from './components/Menus/BottomMenu';

const App = (): JSX.Element => {
  const isAuthenticated = useSelector(selectIsAuthenticated);
  const view = useSelector(selectView);
  const plantModalIsOpen = useSelector(selectPlantModalIsOpen);
  const plantToEdit = useSelector(selectPlantToEdit);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadUser());
  });

  return (
    <div className="App">
      {!isAuthenticated && <RegistrationModal />}
      {plantModalIsOpen && <PlantModal plant={plantToEdit} />}
      <MainMenu />
      <TopMenu />
      {view === 'calendar' ? <Plants /> : <Garden />}
      <BottomMenu />
    </div>
  );
};

export default App;
