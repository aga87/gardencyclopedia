import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addPlant } from '../redux/actions/plantsActions';

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
        <p>
          <label htmlFor="plantName">Plant name</label>
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
        <p>
          <label htmlFor="plantDesc">Description - optional</label>
          <input
            id="plantDesc"
            type="text"
            size="30"
            maxLength="100"
            value={desc}
            onChange={handleDescChange}
          />
        </p>
        <button type="submit">Add</button>
      </form>
    </div>
  );
};

export default PlantModal;
