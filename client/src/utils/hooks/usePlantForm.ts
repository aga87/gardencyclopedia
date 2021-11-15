import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addPlant, editPlant } from '../../redux/actions/plantsActions';
import { closeModal } from '../../redux/actions/uiActions';
import { selectPlantToEdit } from '../../redux/reducers/index';
import {
  validateName,
  validateDesc,
  validateSowFrom,
  validateSowUntil,
  validateHarvestFrom,
  validateHarvestUntil
} from '../validation-utils';
import useFormInput from './useFormInput';

const usePlantForm = () => {
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

  return {
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
  };
};

export default usePlantForm;
