import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { openPlantModal } from './redux/actions/uiActions';
import { selectPlantModalIsOpen } from './redux/reducers/index';
import './css/index.css';
import Loader from './components/Loader';
import PlantList from './components/PlantList';
import PlantModal from './components/PlantModal';

function App() {
  const plantModalIsOpen = useSelector(selectPlantModalIsOpen);
  const dispatch = useDispatch();

  function handleOpenPlantBtnClick() {
    dispatch(openPlantModal());
  }

  return (
    <div className="App">
      {plantModalIsOpen && <PlantModal />}
      <button type="button" onClick={handleOpenPlantBtnClick}>
        +
      </button>
      <Loader />
      <button type="button" onClick={handleOpenPlantBtnClick}>
        + New Plant
      </button>
      <PlantList />
    </div>
  );
}

export default App;
