import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addPlant } from '../redux/actions/plantsActions';
import TextField from './TextField';
import SelectField from './SelectField';
import Error from './Error';
import { months, plantCategories } from '../utils/constants';
import useFormInput from '../utils/hooks/useFormInput';
import {
  validateName,
  validateDesc,
  validateSowFrom,
  validateSowUntil,
  validateHarvestFrom,
  validateHarvestUntil
} from '../utils/validation';

const PlantModal = () => {
  const name = useFormInput();
  const desc = useFormInput();
  const category = useFormInput();
  const sowFrom = useFormInput();
  const sowUntil = useFormInput();
  const harvestFrom = useFormInput();
  const harvestUntil = useFormInput();

  const noErrors = {
    name: '',
    desc: '',
    // (no category field - always valid)
    sowFrom: '',
    sowUntil: '',
    harvestFrom: '',
    harvestUntil: ''
  };
  const [errors, setErrors] = useState(noErrors);

  const dispatch = useDispatch();

  // Single source of truth (on the client) for field constraints
  const nameValidators = {
    required: true,
    maxLength: '20'
  };

  const descValidators = {
    required: false,
    maxLength: '30'
  };

  const sowFromValidators = {
    required: sowUntil.values.value !== ''
  };

  const sowUntilValidators = {
    required: sowFrom.values.value !== ''
  };

  const harvestFromValidators = {
    required: harvestUntil.values.value !== ''
  };

  const harvestUntilValidators = {
    required: harvestFrom.values.value !== ''
  };

  function handleSubmit(e) {
    e.preventDefault();

    const formErrors = {
      name: validateName(name.values.value, nameValidators),
      desc: validateDesc(desc.values.value, descValidators),
      sowFrom: validateSowFrom(sowFrom.values.value, sowFromValidators),
      sowUntil: validateSowUntil(sowUntil.values.value, sowUntilValidators),
      harvestFrom: validateHarvestFrom(
        harvestFrom.values.value,
        harvestFromValidators
      ),
      harvestUntil: validateHarvestUntil(
        harvestUntil.values.value,
        harvestUntilValidators
      )
    };

    const formErrorExists = Object.keys(formErrors).some(
      value => formErrors[value] !== ''
    );

    if (formErrorExists) {
      setErrors(formErrors);
      return;
    }

    setErrors(noErrors);

    // Submit if there is no errors
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
          maxLength={nameValidators.maxLength}
          handleChange={name.handleChange}
          required={nameValidators.required}
        />
        <Error inputId="plantName" error={errors.name} />
        <TextField
          id="plantDesc"
          label="Description"
          value={desc.values.value}
          maxLength={descValidators.maxLength}
          handleChange={desc.handleChange}
          required={descValidators.required}
        />
        <Error inputId="plantDesc" error={errors.desc} />
        <SelectField
          id="plantCategory"
          label="Category"
          options={plantCategories}
          placeholder="Select category"
          value={category.values.value}
          handleChange={category.handleChange}
        />
        <SelectField
          id="sowFrom"
          label="Sow from"
          options={months}
          placeholder="Select month"
          value={sowFrom.values.value}
          handleChange={sowFrom.handleChange}
          required={sowFromValidators.required}
        />
        <Error inputId="sowFrom" error={errors.sowFrom} />
        <SelectField
          id="sowUntil"
          label="Sow until"
          options={months}
          placeholder="Select month"
          value={sowUntil.values.value}
          handleChange={sowUntil.handleChange}
          required={sowUntilValidators.required}
        />
        <Error inputId="sowUntil" error={errors.sowUntil} />
        <SelectField
          id="harvestFrom"
          label="Harvest from"
          options={months}
          placeholder="Select month"
          value={harvestFrom.values.value}
          handleChange={harvestFrom.handleChange}
          required={harvestFromValidators.required}
        />
        <Error inputId="harvestFrom" error={errors.harvestFrom} />
        <SelectField
          id="harvestUntil"
          label="Harvest until"
          options={months}
          placeholder="Select month"
          value={harvestUntil.values.value}
          handleChange={harvestUntil.handleChange}
          required={harvestUntilValidators.required}
        />
        <Error inputId="harvestUntil" error={errors.harvestUntil} />
        <button type="submit">Add</button>
      </form>
    </div>
  );
};

export default PlantModal;
