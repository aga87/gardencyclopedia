import { useState } from 'react';

const useFormInput = () => {
  const [value, setValue] = useState('');

  function handleChange(e) {
    setValue(e.target.value);
  }

  function resetField() {
    setValue('');
  }

  return { value, handleChange, resetField };
};

export default useFormInput;
