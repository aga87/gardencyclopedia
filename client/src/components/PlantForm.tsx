import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addPlant, editPlant } from '../redux/actions/plantsActions';
import { closeModal } from '../redux/actions/uiActions';
import { selectPlantToEdit } from '../redux/reducers/index';
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
import Fieldset from './nano/Fieldset';
import SubmitButton from './nano/SubmitButton';

const PlantForm = (): JSX.Element => {
  const plantToEdit = useSelector(selectPlantToEdit);
  const name = useFormInput(plantToEdit.name);
  const desc = useFormInput(plantToEdit.desc);
  const category = useFormInput(plantToEdit.category);
  const sowFrom = useFormInput(plantToEdit.sowFrom);
  const sowUntil = useFormInput(plantToEdit.sowUntil);
  const harvestFrom = useFormInput(plantToEdit.harvestFrom);
  const harvestUntil = useFormInput(plantToEdit.harvestUntil);
  const [errors, setErrors] = useState({
    name: '',
    desc: '',
    category: '',
    sowFrom: '',
    sowUntil: '',
    harvestFrom: '',
    harvestUntil: ''
  });
  const dispatch = useDispatch();

  // Field constraints
  const constraints = {
    name: {
      required: true,
      maxLength: 20
    },
    desc: {
      required: false,
      maxLength: 30
    },
    sowFrom: {
      required: sowUntil.value !== ''
    },
    sowUntil: {
      required: sowFrom.value !== ''
    },
    harvestFrom: {
      required: harvestUntil.value !== ''
    },
    harvestUntil: {
      required: harvestFrom.value !== ''
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formErrors = {
      name: validateName(name.value, constraints.name),
      desc: validateDesc(desc.value, constraints.desc),
      category: '', // always valid
      sowFrom: validateSowFrom(sowFrom.value, constraints.sowFrom),
      sowUntil: validateSowUntil(sowUntil.value, constraints.sowUntil),
      harvestFrom: validateHarvestFrom(
        harvestFrom.value,
        constraints.harvestFrom
      ),
      harvestUntil: validateHarvestUntil(
        harvestUntil.value,
        constraints.harvestUntil
      )
    };

    setErrors(formErrors);

    const formErrorExists = Object.values(formErrors).some(
      value => value !== ''
    );

    if (formErrorExists) return;

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

    if (plantToEdit._id) {
      dispatch(editPlant(plantToEdit._id, newPlant));
    } else {
      dispatch(addPlant(newPlant));
    }
    dispatch(closeModal());
  };

  return (
    <form className='c-form l-form' noValidate onSubmit={handleSubmit}>
      <div className='l-form__field'>
        <TextField
          inputId='plant-name'
          label='Plant name'
          value={name.value}
          maxLength={constraints.name.maxLength}
          handleChange={name.handleChange}
          required={constraints.name.required}
          errorId='plant-name-error'
          errorMsg={errors.name}
        />
      </div>
      <div className='l-form__field'>
        <TextField
          inputId='plant-desc'
          label='Description'
          value={desc.value}
          maxLength={constraints.desc.maxLength}
          handleChange={desc.handleChange}
          required={constraints.desc.required}
          errorId='plant-desc-error'
          errorMsg={errors.desc}
        />
      </div>
      <div className='l-form__field'>
        <SelectField
          inputId='plant-category'
          label='Category'
          options={plantCategories}
          value={category.value}
          handleChange={category.handleChange}
          errorId='plant-category-error'
          errorMsg={errors.category}
        />
      </div>
      <div className='l-form__field-last'>
        <Fieldset legend='Calendar'>
          <div className='l-form__field'>
            <SelectField
              inputId='sow-from'
              label='Sow from'
              options={months}
              placeholder='Select month'
              value={sowFrom.value}
              handleChange={sowFrom.handleChange}
              required={constraints.sowFrom.required}
              errorId='sow-from-error'
              errorMsg={errors.sowFrom}
            />
          </div>
          <div className='l-form__field'>
            <SelectField
              inputId='sow-until'
              label='Sow until'
              options={months}
              placeholder='Select month'
              value={sowUntil.value}
              handleChange={sowUntil.handleChange}
              required={constraints.sowUntil.required}
              errorId='sow-until-error'
              errorMsg={errors.sowUntil}
            />
          </div>
          <div className='l-form__field'>
            <SelectField
              inputId='harvest-from'
              label='Harvest from'
              options={months}
              placeholder='Select month'
              value={harvestFrom.value}
              handleChange={harvestFrom.handleChange}
              required={constraints.harvestFrom.required}
              errorId='harvest-from-error'
              errorMsg={errors.harvestFrom}
            />
          </div>
          <div className='l-form__field'>
            <SelectField
              inputId='harvest-until'
              label='Harvest until'
              options={months}
              placeholder='Select month'
              value={harvestUntil.value}
              handleChange={harvestUntil.handleChange}
              required={constraints.harvestUntil.required}
              errorId='harvest-until-error'
              errorMsg={errors.harvestUntil}
            />
          </div>
        </Fieldset>
      </div>
      <SubmitButton variant='secondary' text='Save' />
    </form>
  );
};

export default PlantForm;
