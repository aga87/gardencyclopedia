import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addPlant, editPlant } from '../redux/actions/plantsActions';
import { closePlantModal } from '../redux/actions/uiActions';
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
import TextField from './TextField';
import SelectField from './SelectField';
import Btn from './Btn';
import SubmitBtn from './SubmitBtn';

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
    category: '',
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
      category: '', // always valid
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
      category: category.value as Category,
      sowFrom: sowFrom.value as Month,
      sowUntil: sowUntil.value as Month,
      harvestFrom: harvestFrom.value as Month,
      harvestUntil: harvestUntil.value as Month
    };

    if (plant._id) {
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
        <TextField
          inputId="plant-name"
          label="Plant name"
          value={name.value}
          maxLength={nameValidators.maxLength}
          handleChange={name.handleChange}
          required={nameValidators.required}
          errorId="plant-name-error"
          errorMsg={errors.name}
        />
        <TextField
          inputId="plant-desc"
          label="Description"
          value={desc.value}
          maxLength={descValidators.maxLength}
          handleChange={desc.handleChange}
          required={descValidators.required}
          errorId="plant-desc-error"
          errorMsg={errors.desc}
        />
        <SelectField
          inputId="plant-category"
          label="Category"
          options={plantCategories}
          value={category.value}
          handleChange={category.handleChange}
          errorId="plant-category-error"
          errorMsg={errors.category}
        />
        <SelectField
          inputId="sow-from"
          label="Sow from"
          options={months}
          placeholder="Select month"
          value={sowFrom.value}
          handleChange={sowFrom.handleChange}
          required={sowFromValidators.required}
          errorId="sow-from-error"
          errorMsg={errors.sowFrom}
        />
        <SelectField
          inputId="sow-until"
          label="Sow until"
          options={months}
          placeholder="Select month"
          value={sowUntil.value}
          handleChange={sowUntil.handleChange}
          required={sowUntilValidators.required}
          errorId="sow-until-error"
          errorMsg={errors.sowUntil}
        />
        <SelectField
          inputId="harvest-from"
          label="Harvest from"
          options={months}
          placeholder="Select month"
          value={harvestFrom.value}
          handleChange={harvestFrom.handleChange}
          required={harvestFromValidators.required}
          errorId="harvest-from-error"
          errorMsg={errors.harvestFrom}
        />
        <SelectField
          inputId="harvest-until"
          label="Harvest until"
          options={months}
          placeholder="Select month"
          value={harvestUntil.value}
          handleChange={harvestUntil.handleChange}
          required={harvestUntilValidators.required}
          errorId="harvest-until-error"
          errorMsg={errors.harvestUntil}
        />
        <SubmitBtn text="Save" />
      </form>
    </div>
  );
};

export default PlantModal;
