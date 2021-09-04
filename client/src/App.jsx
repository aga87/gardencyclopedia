import React from 'react';
import './css/index.css';
import Loader from './components/Loader';
import PlantList from './components/PlantList';
import PlantModal from './components/PlantModal';

function App() {
  return (
    <div className="App">
      <PlantModal />
      <Loader />
      <PlantList />
    </div>
  );
}

export default App;
