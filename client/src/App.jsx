import React from 'react';
import './css/index.css';
import { useDispatch, useSelector } from 'react-redux';
import { openPlantModal } from './redux/actions/uiActions';
import { selectPlantModalIsOpen } from './redux/reducers/index';
import Loader from './components/Loader';
import PlantList from './components/PlantList';
import PlantModal from './components/PlantModal';
import Nav from './components/Nav';
import Btn from './components/Btn';
import Icon from './components/Icon';

const App = () => {
  const plantModalIsOpen = useSelector(selectPlantModalIsOpen);
  const dispatch = useDispatch();

  const handleAddClick = () => {
    dispatch(openPlantModal());
  };

  return (
    <div className="App">
      {plantModalIsOpen && <PlantModal />}
      <Nav />
      <Btn
        icon={<Icon name="plus" />}
        text="New Plant"
        handleClick={handleAddClick}
      />
      <Loader />
      <PlantList />
    </div>
  );
};

export default App;
