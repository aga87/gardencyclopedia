import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { openPlantModal } from './redux/actions/uiActions';
import { selectPlantModalIsOpen } from './redux/reducers/index';
import './css/index.css';
import Loader from './components/Loader';
import PlantList from './components/PlantList';
import PlantModal from './components/PlantModal';
import Nav from './components/Nav';
import Btn from './components/Btn';
import Icon from './components/Icon';

function App() {
  const plantModalIsOpen = useSelector(selectPlantModalIsOpen);
  const dispatch = useDispatch();

  return (
    <div className="App">
      {plantModalIsOpen && <PlantModal />}
      <Nav />
      <Btn
        icon={<Icon name="plus" />}
        text="New Plant"
        handleClick={() => dispatch(openPlantModal())}
      />
      <Loader />
      <PlantList />
    </div>
  );
}

export default App;
