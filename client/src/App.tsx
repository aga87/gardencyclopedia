import React from 'react';
import './css/index.css';
import { useSelector } from 'react-redux';
import {
  selectPlantModalIsOpen,
  selectIsLoading
} from './redux/reducers/index';
import Spinner from './components/Spinner';
import PlantList from './components/PlantList';
import PlantModal from './components/PlantModal';
import Nav from './components/Nav';

const App = (): JSX.Element => {
  const plantModalIsOpen = useSelector(selectPlantModalIsOpen);
  const plantsAreLoading = useSelector(selectIsLoading);

  return (
    <div className="App">
      {plantModalIsOpen && <PlantModal />}
      <Nav />
      <Spinner isLoading={plantsAreLoading} />
      <PlantList />
    </div>
  );
};

export default App;
