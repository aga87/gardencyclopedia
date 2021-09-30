import { useState } from 'react';

const useFormInput = initialValue => {
  const [value, setValue] = useState(initialValue);

  function handleChange(e) {
    setValue(e.target.value);
  }

  function resetField() {
    setValue(initialValue);
  }

  return { value, handleChange, resetField };
};

export default useFormInput;
