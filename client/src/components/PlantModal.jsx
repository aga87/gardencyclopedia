import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addPlant } from '../redux/actions/plantsActions';
import TextField from './TextField';
import SelectField from './SelectField';
import { months, plantCategories } from '../utils/constants';

const PlantModal = () => {
  const [name, setName] = useState('');
  const [desc, setDesc] = useState('');
  const [category, setCategory] = useState('');
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

  function handleCategoryChange(e) {
    const { value } = e.target;
    setCategory(value);
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
      category,
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
          maxLength="20"
          handleChange={handleNameChange}
          required
        />
        <TextField
          id="plantDesc"
          label="Description"
          value={desc}
          maxLength="30"
          handleChange={handleDescChange}
        />
        <SelectField
          id="plantCategory"
          label="Category"
          options={plantCategories}
          placeholder="Select category"
          value={category}
          handleChange={handleCategoryChange}
        />
        <SelectField
          id="sowFrom"
          label="Sow from"
          options={months}
          placeholder="Select month"
          value={sowFrom}
          handleChange={handleSowFromChange}
          required={sowUntil !== ''}
        />
        <SelectField
          id="sowUntil"
          label="Sow until"
          options={months}
          placeholder="Select month"
          value={sowUntil}
          handleChange={handleSowUntilChange}
          required={sowFrom !== ''}
        />
        <SelectField
          id="harvestFrom"
          label="Harvest from"
          options={months}
          placeholder="Select month"
          value={harvestFrom}
          handleChange={handleHarvestFromChange}
          required={harvestUntil !== ''}
        />
        <SelectField
          id="harvestUntil"
          label="Harvest until"
          options={months}
          placeholder="Select month"
          value={harvestUntil}
          handleChange={handleHarvestUntilChange}
          required={harvestFrom !== ''}
        />
        <button type="submit">Add</button>
      </form>
    </div>
  );
};

export default PlantModal;
