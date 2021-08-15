import React from 'react';
import './css/index.css';
import PlantList from './components/PlantList';
import AddPlantModal from './components/AddPlantModal';

function App() {
  return (
    <div className="App">
      <AddPlantModal />
      <PlantList />
    </div>
  );
}

export default App;
