import { useState } from 'react';

const useFormInput = () => {
  const [value, setValue] = useState('');

  function handleChange(e) {
    setValue(e.target.value);
  }

  return { value, handleChange };
};

export default useFormInput;
