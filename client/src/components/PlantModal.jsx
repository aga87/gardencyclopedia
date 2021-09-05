import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addPlant } from '../redux/actions/plantsActions';
import TextField from './TextField';
import SelectField from './SelectField';
import { months } from '../utils/constants';

const PlantModal = () => {
  const [name, setName] = useState('');
  const [desc, setDesc] = useState('');
  const [sowFrom, setSowFrom] = useState('');
  const [sowUntil, setSowUntil] = useState('');
  const [harvestFrom, setHarvestFrom] = useState('');
  const [harvestUntil, setHarvestUntil] = useState('');

  const dispatch = useDispatch();

  function handleNameChange(e) {
    const { value } = e.target;
    setName(value);
  }

  function handleDescChange(e) {
    const { value } = e.target;
    setDesc(value);
  }

  function handleSowFromChange(e) {
    const { value } = e.target;
    setSowFrom(value);
  }

  function handleSowUntilChange(e) {
    const { value } = e.target;
    setSowUntil(value);
  }

  function handleHarvestFromChange(e) {
    const { value } = e.target;
    setHarvestFrom(value);
  }

  function handleHarvestUntilChange(e) {
    const { value } = e.target;
    setHarvestUntil(value);
  }

  function handleSubmit(e) {
    e.preventDefault();

    const newPlant = {
      name,
      desc,
      sowFrom,
      sowUntil,
      harvestFrom,
      harvestUntil
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
        <SelectField
          id="sowFrom"
          label="Sow from"
          options={months}
          selectedOption="Select month"
          value={sowFrom}
          handleChange={handleSowFromChange}
        />
        <SelectField
          id="sowUntil"
          label="Sow until"
          options={months}
          selectedOption="Select month"
          value={sowUntil}
          handleChange={handleSowUntilChange}
        />
        <SelectField
          id="harvestFrom"
          label="Harvest from"
          options={months}
          selectedOption="Select month"
          value={harvestFrom}
          handleChange={handleHarvestFromChange}
        />
        <SelectField
          id="harvestUntil"
          label="Harvest until"
          options={months}
          selectedOption="Select month"
          value={harvestUntil}
          handleChange={handleHarvestUntilChange}
        />
        <button type="submit">Add</button>
      </form>
    </div>
  );
};

export default PlantModal;
