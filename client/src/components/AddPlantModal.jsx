import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addPlant } from '../redux/actions/plantActions';

const AddPlantModal = () => {
  const dispatch = useDispatch();

  const [name, setName] = useState('');

  function onNameChange(e) {
    const { value } = e.target;
    setName(value);
  }

  function onSubmit(e) {
    e.preventDefault();

    const newPlant = {
      name
    };

    dispatch(addPlant(newPlant));
  }

  return (
    <div>
      <h1>Add a new plant</h1>
      <form onSubmit={onSubmit}>
        <p>
          <label htmlFor="plantName">Name:</label>
          <input
            id="plantName"
            type="text"
            size="30"
            maxLength="30"
            required
            value={name}
            onChange={onNameChange}
          />
        </p>
        <button type="button">Cancel</button>
        <button type="submit">Add</button>
      </form>
    </div>
  );
};

export default AddPlantModal;
