import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addPlant, editPlant } from '../redux/actions/plantsActions';
import { closePlantModal } from '../redux/actions/uiActions';
import TextField from './TextField';
import SelectField from './SelectField';
import Error from './Error';
import Btn from './Btn';
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
import type { Plant } from '../utils/common-types';

type PlantModalProps = {
  plant: Plant;
};

const PlantModal = ({ plant }: PlantModalProps): JSX.Element => {
  const name = useFormInput(plant.name);
  const desc = useFormInput(plant.desc);
  const category = useFormInput(plant.category);
  const sowFrom = useFormInput(plant.sowFrom);
  const sowUntil = useFormInput(plant.sowUntil);
  const harvestFrom = useFormInput(plant.harvestFrom);
  const harvestUntil = useFormInput(plant.harvestUntil);

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
    maxLength: 20
  };

  const descValidators = {
    required: false,
    maxLength: 30
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

  const handleCancelClick = () => {
    dispatch(closePlantModal());
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
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

    const formErrorExists = Object.values(formErrors).some(
      value => value !== ''
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

    if (plant._id !== '') {
      dispatch(editPlant(plant._id, newPlant));
    } else {
      dispatch(addPlant(newPlant));
    }
    dispatch(closePlantModal());
  };

  return (
    <div>
      <h1>{plant._id === '' ? 'New Plant' : 'Edit Plant'}</h1>
      <Btn text="Cancel" handleClick={handleCancelClick} />
      <form noValidate onSubmit={handleSubmit}>
        <button type="submit">Save</button>
        <TextField
          id="plant-name"
          label="Plant name"
          value={name.value}
          maxLength={nameValidators.maxLength}
          handleChange={name.handleChange}
          required={nameValidators.required}
        />
        <Error inputId="plant-name" error={errors.name} />
        <TextField
          id="plant-desc"
          label="Description"
          value={desc.value}
          maxLength={descValidators.maxLength}
          handleChange={desc.handleChange}
          required={descValidators.required}
        />
        <Error inputId="plant-desc" error={errors.desc} />
        <SelectField
          id="plant-category"
          label="Category"
          options={plantCategories}
          value={category.value}
          handleChange={category.handleChange}
        />
        <SelectField
          id="sow-from"
          label="Sow from"
          options={months}
          placeholder="Select month"
          value={sowFrom.value}
          handleChange={sowFrom.handleChange}
          required={sowFromValidators.required}
        />
        <Error inputId="sow-from" error={errors.sowFrom} />
        <SelectField
          id="sow-until"
          label="Sow until"
          options={months}
          placeholder="Select month"
          value={sowUntil.value}
          handleChange={sowUntil.handleChange}
          required={sowUntilValidators.required}
        />
        <Error inputId="sow-until" error={errors.sowUntil} />
        <SelectField
          id="harvest-from"
          label="Harvest from"
          options={months}
          placeholder="Select month"
          value={harvestFrom.value}
          handleChange={harvestFrom.handleChange}
          required={harvestFromValidators.required}
        />
        <Error inputId="harvest-from" error={errors.harvestFrom} />
        <SelectField
          id="harvest-until"
          label="Harvest until"
          options={months}
          placeholder="Select month"
          value={harvestUntil.value}
          handleChange={harvestUntil.handleChange}
          required={harvestUntilValidators.required}
        />
        <Error inputId="harvest-until" error={errors.harvestUntil} />
      </form>
    </div>
  );
};

export default PlantModal;
