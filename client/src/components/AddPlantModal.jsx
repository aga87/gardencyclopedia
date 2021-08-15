import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addPlant } from '../redux/actions/plantActions';

const AddPlantModal = () => {
  const dispatch = useDispatch();

  const [name, setName] = useState('');
  const [id, setId] = useState('');

  function onNameChange(e) {
    const { value } = e.target;
    setName(value);
  }

  function onIdChange(e) {
    const { value } = e.target;
    setId(value);
  }

  function onSubmit(e) {
    e.preventDefault();

    const newPlant = {
      name,
      id
    };

    dispatch(addPlant(newPlant));
  }

  return (
    <div>
      <h1>Add a new plant</h1>
      <form>
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
        {/* TODO: Remove the temporary id field */}
        <p>
          <label htmlFor="plantId">Id:</label>
          <input
            id="plantId"
            type="text"
            size="30"
            maxLength="30"
            required
            value={id}
            onChange={onIdChange}
          />
        </p>
        <button type="button">Cancel</button>
        <button type="submit" onSubmit={onSubmit}>
          Add
        </button>
      </form>
    </div>
  );
};

export default AddPlantModal;
