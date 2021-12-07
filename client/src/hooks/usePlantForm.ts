import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { useAppDispatch } from '../redux/typed-hooks';
import type { RootState } from '../redux/store';
import { addPlant, editPlant } from '../redux/actions/plantsActions';
import { closeModal } from '../redux/actions/uiActions';
import { selectPlantToEditId, selectPlantById } from '../redux/reducers/index';
import {
  validateName,
  validateDesc,
  validateSowFrom,
  validateSowUntil,
  validateHarvestFrom,
  validateHarvestUntil
} from '../utils/validation-utils';
import useFormInput from './useFormInput';

type Input = {
  value: string;
  handleChange: (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLSelectElement>
  ) => void;
};

type ReturnType = {
  name: Input;
  desc: Input;
  category: Input;
  sowFrom: Input;
  sowUntil: Input;
  harvestFrom: Input;
  harvestUntil: Input;
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  constraints: {
    name: {
      required: boolean;
      maxLength: number;
    };
    desc: {
      required: boolean;
      maxLength: number;
    };
    sowFrom: {
      required: boolean;
    };
    sowUntil: {
      required: boolean;
    };
    harvestFrom: {
      required: boolean;
    };
    harvestUntil: {
      required: boolean;
    };
  };
  errors: {
    name: string;
    desc: string;
    category: string;
    sowFrom: string;
    sowUntil: string;
    harvestFrom: string;
    harvestUntil: string;
  };
};

const usePlantForm = (): ReturnType => {
  const plantToEditId = useSelector(selectPlantToEditId);
  const plantToEdit = useSelector((state: RootState) =>
    selectPlantById(state, plantToEditId)
  );
  const name = useFormInput(plantToEdit?.name || '');
  const desc = useFormInput(plantToEdit?.desc || '');
  const category = useFormInput(plantToEdit?.category || 'uncategorised');
  const sowFrom = useFormInput(plantToEdit?.sowFrom || '');
  const sowUntil = useFormInput(plantToEdit?.sowUntil || '');
  const harvestFrom = useFormInput(plantToEdit?.harvestFrom || '');
  const harvestUntil = useFormInput(plantToEdit?.harvestUntil || '');
  const [errors, setErrors] = useState({
    name: '',
    desc: '',
    category: '',
    sowFrom: '',
    sowUntil: '',
    harvestFrom: '',
    harvestUntil: ''
  });
  const dispatch = useAppDispatch();

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

    if (plantToEditId) {
      dispatch(editPlant(plantToEditId, newPlant));
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
