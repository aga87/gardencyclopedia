import React from 'react';
import { useDispatch } from 'react-redux';
import { addPlant } from '../redux/actions/plantsActions';
import TextField from './TextField';
import SelectField from './SelectField';
import { months, plantCategories } from '../utils/constants';
import useFormInput from '../utils/hooks/useFormInput';

const PlantModal = () => {
  const name = useFormInput();
  const desc = useFormInput();
  const category = useFormInput();
  const sowFrom = useFormInput();
  const sowUntil = useFormInput();
  const harvestFrom = useFormInput();
  const harvestUntil = useFormInput();

  const dispatch = useDispatch();

  function handleSubmit(e) {
    e.preventDefault();
    const newPlant = {
      name: name.value,
      desc: desc.value,
      category: category.value,
      sowFrom: sowFrom.value,
      sowUntil: sowUntil.value,
      harvestFrom: harvestFrom.value,
      harvestUntil: harvestUntil.value
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
          value={name.value}
          maxLength="20"
          handleChange={name.handleChange}
          required
        />
        <TextField
          id="plantDesc"
          label="Description"
          value={desc.value}
          maxLength="30"
          handleChange={desc.handleChange}
        />
        <SelectField
          id="plantCategory"
          label="Category"
          options={plantCategories}
          placeholder="Select category"
          value={category.value}
          handleChange={category.handleChange}
        />
        <SelectField
          id="sowFrom"
          label="Sow from"
          options={months}
          placeholder="Select month"
          value={sowFrom.value}
          handleChange={sowFrom.handleChange}
          required={sowUntil.value !== ''}
        />
        <SelectField
          id="sowUntil"
          label="Sow until"
          options={months}
          placeholder="Select month"
          value={sowUntil.value}
          handleChange={sowUntil.handleChange}
          required={sowFrom.value !== ''}
        />
        <SelectField
          id="harvestFrom"
          label="Harvest from"
          options={months}
          placeholder="Select month"
          value={harvestFrom.value}
          handleChange={harvestFrom.handleChange}
          required={harvestUntil.value !== ''}
        />
        <SelectField
          id="harvestUntil"
          label="Harvest until"
          options={months}
          placeholder="Select month"
          value={harvestUntil.value}
          handleChange={harvestUntil.handleChange}
          required={harvestFrom.value !== ''}
        />
        <button type="submit">Add</button>
      </form>
    </div>
  );
};

export default PlantModal;
