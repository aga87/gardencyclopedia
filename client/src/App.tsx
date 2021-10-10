import React from 'react';
import './css/index.css';
import { useSelector } from 'react-redux';
import {
  selectPlantModalIsOpen,
  selectPlantToEdit
} from './redux/reducers/index';
import Plants from './components/Plants';
import PlantModal from './components/PlantModal';
import Nav from './components/Nav';

const App = (): JSX.Element => {
  const plantModalIsOpen = useSelector(selectPlantModalIsOpen);
  const plantToEdit = useSelector(selectPlantToEdit);

  return (
    <div className="App">
      {plantModalIsOpen && <PlantModal plant={plantToEdit} />}
      <Nav />
      <Plants />
    </div>
  );
};

export default App;
