import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addPlant } from '../redux/actions/plantsActions';
import TextField from './TextField';

const PlantModal = () => {
  const [name, setName] = useState('');
  const [desc, setDesc] = useState('');

  const dispatch = useDispatch();

  function handleNameChange(e) {
    const { value } = e.target;
    setName(value);
  }

  function handleDescChange(e) {
    const { value } = e.target;
    setDesc(value);
  }

  function handleSubmit(e) {
    e.preventDefault();

    const newPlant = {
      name,
      desc
    };

    dispatch(addPlant(newPlant));
  }

  return (
    <div>
      <h1>Add a new plant</h1>
      <form onSubmit={handleSubmit}>
        <TextField
          id="plantName"
          label="Plant name"
          value={name}
          maxLength="30"
          handleChange={handleNameChange}
          required
        />
        <TextField
          id="plantDesc"
          label="Description"
          value={desc}
          maxLength="100"
          handleChange={handleDescChange}
        />
        <button type="submit">Add</button>
      </form>
    </div>
  );
};

export default PlantModal;
