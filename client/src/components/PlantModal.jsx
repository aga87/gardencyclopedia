import React from 'react';
import { useDispatch } from 'react-redux';
import { addPlant } from '../redux/actions/plantsActions';
import TextField from './TextField';
import SelectField from './SelectField';
import Error from './Error';
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

  const isEveryFieldValid =
    name.values.error === '' &&
    desc.values.error === '' &&
    category.values.error === '' &&
    sowFrom.values.error === '' &&
    sowUntil.values.error === '' &&
    harvestFrom.values.error === '' &&
    harvestUntil.values.error === '';

  function handleSubmit(e) {
    e.preventDefault();
    const newPlant = {
      name: name.values.value,
      desc: desc.values.value,
      category: category.values.value,
      sowFrom: sowFrom.values.value,
      sowUntil: sowUntil.values.value,
      harvestFrom: harvestFrom.values.value,
      harvestUntil: harvestUntil.values.value
    };
    dispatch(addPlant(newPlant));
  }

  return (
    <div>
      <h1>Add a new plant</h1>
      <form noValidate onSubmit={handleSubmit}>
        <TextField
          id="plantName"
          label="Plant name"
          value={name.values.value}
          maxLength="20"
          handleChange={name.handleChange}
          required
        />
        <Error inputId="plantName" error={name.values.error} />
        <TextField
          id="plantDesc"
          label="Description"
          value={desc.values.value}
          maxLength="30"
          handleChange={desc.handleChange}
        />
        <Error inputId="plantDesc" error={desc.values.error} />
        <SelectField
          id="plantCategory"
          label="Category"
          options={plantCategories}
          placeholder="Select category"
          value={category.values.value}
          handleChange={category.handleChange}
        />
        <Error inputId="plantCategory" error={category.values.error} />
        <SelectField
          id="sowFrom"
          label="Sow from"
          options={months}
          placeholder="Select month"
          value={sowFrom.values.value}
          handleChange={sowFrom.handleChange}
          required={sowUntil.values.value !== ''}
        />
        <Error inputId="sowFrom" error={sowFrom.values.error} />
        <SelectField
          id="sowUntil"
          label="Sow until"
          options={months}
          placeholder="Select month"
          value={sowUntil.values.value}
          handleChange={sowUntil.handleChange}
          required={sowFrom.values.value !== ''}
        />
        <Error inputId="sowUntil" error={sowUntil.values.error} />
        <SelectField
          id="harvestFrom"
          label="Harvest from"
          options={months}
          placeholder="Select month"
          value={harvestFrom.values.value}
          handleChange={harvestFrom.handleChange}
          required={harvestUntil.values.value !== ''}
        />
        <Error inputId="harvestFrom" error={harvestFrom.values.error} />
        <SelectField
          id="harvestUntil"
          label="Harvest until"
          options={months}
          placeholder="Select month"
          value={harvestUntil.values.value}
          handleChange={harvestUntil.handleChange}
          required={harvestFrom.values.value !== ''}
        />
        <Error inputId="harvestUntil" error={harvestUntil.values.error} />
        <button type="submit" disabled={!isEveryFieldValid}>
          Add
        </button>
      </form>
    </div>
  );
};

export default PlantModal;
