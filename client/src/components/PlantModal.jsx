import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addPlant } from '../redux/actions/plantsActions';

const PlantModal = () => {
  const dispatch = useDispatch();

  const [name, setName] = useState('');

  function handleNameChange(e) {
    const { value } = e.target;
    setName(value);
  }

  function handleSubmit(e) {
    e.preventDefault();

    const newPlant = {
      name
    };

    dispatch(addPlant(newPlant));
  }

  return (
    <div>
      <h1>Add a new plant</h1>
      <form onSubmit={handleSubmit}>
        <p>
          <label htmlFor="plantName">Plant name:</label>
          <input
            id="plantName"
            type="text"
            size="30"
            maxLength="30"
            required
            value={name}
            onChange={handleNameChange}
          />
        </p>
        <button type="submit">Add</button>
      </form>
    </div>
  );
};

export default PlantModal;
