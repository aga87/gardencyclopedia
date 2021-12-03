import React, { useRef, useEffect } from 'react';
import { months, plantCategories } from '../../utils/constants';
import usePlantForm from '../../hooks/usePlantForm';
import SubmitButton from '../01-atoms/buttons/SubmitButton';
import Fieldset from '../02-molecules/Fieldset';
import TextField from '../02-molecules/TextField';
import SelectField from '../02-molecules/SelectField';


const CalendarPlantForm = (): JSX.Element => {
  const {
    name,
    desc,
    category,
    sowFrom,
    sowUntil,
    harvestFrom,
    harvestUntil,
    handleSubmit,
    constraints,
    errors
  } = usePlantForm();

  const firstInputRef = useRef<HTMLInputElement>(null);

  // Focus first input when the form renders and when form has errors
  useEffect(() => {
    if (firstInputRef.current) {
      firstInputRef.current.focus();
    }
  }, [errors]);

  return (
    <form className='o-form l-form' noValidate onSubmit={handleSubmit}>
      <div className='l-form__field'>
        <TextField
          ref={firstInputRef}
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
        <Fieldset legend='Chart'>
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
      <SubmitButton text='Save' />
    </form>
  );
};

export default CalendarPlantForm;
