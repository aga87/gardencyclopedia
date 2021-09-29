import React from 'react';
import './css/index.css';
import { useSelector } from 'react-redux';
import { selectPlantModalIsOpen } from './redux/reducers/index';
import Loader from './components/Loader';
import PlantList from './components/PlantList';
import PlantModal from './components/PlantModal';
import Nav from './components/Nav';

const App = () => {
  const plantModalIsOpen = useSelector(selectPlantModalIsOpen);

  return (
    <div className="App">
      {plantModalIsOpen && <PlantModal />}
      <Nav />
      <Loader />
      <PlantList />
    </div>
  );
};

export default App;
