import React from 'react';
import './css/index.css';
import Loader from './components/Loader';
import PlantList from './components/PlantList';

function App() {
  return (
    <div className="App">
      <Loader />
      <PlantList />
    </div>
  );
}

export default App;
