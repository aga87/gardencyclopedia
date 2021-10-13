import React from 'react';
import './css/index.css';
import { useSelector } from 'react-redux';
import {
  selectView,
  selectPlantModalIsOpen,
  selectPlantToEdit
} from './redux/reducers/index';

import PlantModal from './components/PlantModal';
import MainMenu from './components/Menus/MainMenu';
import TopMenu from './components/Menus/TopMenu';
import Plants from './components/Plants';
import Garden from './components/Garden';
import BottomMenu from './components/Menus/BottomMenu';

const App = (): JSX.Element => {
  const view = useSelector(selectView);
  const plantModalIsOpen = useSelector(selectPlantModalIsOpen);
  const plantToEdit = useSelector(selectPlantToEdit);

  return (
    <div className="App">
      {plantModalIsOpen && <PlantModal plant={plantToEdit} />}
      <MainMenu />
      <TopMenu />
      {view === 'calendar' ? <Plants /> : <Garden />}
      <BottomMenu />
    </div>
  );
};

export default App;
