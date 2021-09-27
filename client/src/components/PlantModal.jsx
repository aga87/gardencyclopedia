import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addPlant } from '../redux/actions/plantsActions';
import { closePlantModal } from '../redux/actions/uiActions';
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
} from '../utils/validation-utils';

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
    required: sowUntil.value !== ''
  };

  const sowUntilValidators = {
    required: sowFrom.value !== ''
  };

  const harvestFromValidators = {
    required: harvestUntil.value !== ''
  };

  const harvestUntilValidators = {
    required: harvestFrom.value !== ''
  };

  function resetForm() {
    name.resetField();
    desc.resetField();
    category.resetField();
    sowFrom.resetField();
    sowUntil.resetField();
    harvestFrom.resetField();
    harvestUntil.resetField();
  }

  function handleSubmit(e) {
    e.preventDefault();

    const formErrors = {
      name: validateName(name.value, nameValidators),
      desc: validateDesc(desc.value, descValidators),
      sowFrom: validateSowFrom(sowFrom.value, sowFromValidators),
      sowUntil: validateSowUntil(sowUntil.value, sowUntilValidators),
      harvestFrom: validateHarvestFrom(
        harvestFrom.value,
        harvestFromValidators
      ),
      harvestUntil: validateHarvestUntil(
        harvestUntil.value,
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
      name: name.value,
      desc: desc.value,
      category: category.value,
      sowFrom: sowFrom.value,
      sowUntil: sowUntil.value,
      harvestFrom: harvestFrom.value,
      harvestUntil: harvestUntil.value
    };
    dispatch(addPlant(newPlant));
    resetForm();
    dispatch(closePlantModal());
  }

  return (
    <div>
      <h1>Add a new plant</h1>
      <form noValidate onSubmit={handleSubmit}>
        <TextField
          id="plantName"
          label="Plant name"
          value={name.value}
          maxLength={nameValidators.maxLength}
          handleChange={name.handleChange}
          required={nameValidators.required}
        />
        <Error inputId="plantName" error={errors.name} />
        <TextField
          id="plantDesc"
          label="Description"
          value={desc.value}
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
          required={sowFromValidators.required}
        />
        <Error inputId="sowFrom" error={errors.sowFrom} />
        <SelectField
          id="sowUntil"
          label="Sow until"
          options={months}
          placeholder="Select month"
          value={sowUntil.value}
          handleChange={sowUntil.handleChange}
          required={sowUntilValidators.required}
        />
        <Error inputId="sowUntil" error={errors.sowUntil} />
        <SelectField
          id="harvestFrom"
          label="Harvest from"
          options={months}
          placeholder="Select month"
          value={harvestFrom.value}
          handleChange={harvestFrom.handleChange}
          required={harvestFromValidators.required}
        />
        <Error inputId="harvestFrom" error={errors.harvestFrom} />
        <SelectField
          id="harvestUntil"
          label="Harvest until"
          options={months}
          placeholder="Select month"
          value={harvestUntil.value}
          handleChange={harvestUntil.handleChange}
          required={harvestUntilValidators.required}
        />
        <Error inputId="harvestUntil" error={errors.harvestUntil} />
        <button type="button" onClick={() => dispatch(closePlantModal())}>
          X
        </button>
        <button type="submit">Add</button>
      </form>
    </div>
  );
};

export default PlantModal;
