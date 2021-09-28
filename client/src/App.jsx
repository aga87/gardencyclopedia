import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { openPlantModal } from './redux/actions/uiActions';
import { selectPlantModalIsOpen } from './redux/reducers/index';
import './css/index.css';
import Loader from './components/Loader';
import PlantList from './components/PlantList';
import PlantModal from './components/PlantModal';
import Btn from './components/Btn';
import Icon from './components/Icon';

function App() {
  const plantModalIsOpen = useSelector(selectPlantModalIsOpen);
  const dispatch = useDispatch();

  function handleOpenPlantModal() {
    dispatch(openPlantModal());
  }

  return (
    <div className="App">
      {plantModalIsOpen && <PlantModal />}
      <Btn icon={<Icon name="plus" />} handleClick={handleOpenPlantModal} />
      <Btn
        icon={<Icon name="plus" />}
        text="New Plant"
        handleClick={handleOpenPlantModal}
      />
      <Loader />
      <PlantList />
    </div>
  );
}

export default App;
