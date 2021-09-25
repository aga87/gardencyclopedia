import { useState } from 'react';
import validateField from '../validation';

const useFormInput = () => {
  const [values, setValues] = useState({
    value: '',
    error: ''
  });

  function handleChange(e) {
    setValues({
      value: e.target.value,
      error: validateField(e.target)
    });
  }

  return { values, handleChange };
};

export default useFormInput;
