import { useState } from 'react';

const useFormInput = () => {
  const [values, setValues] = useState({
    value: ''
  });

  function handleChange(e) {
    setValues({
      value: e.target.value
    });
  }

  return { values, handleChange };
};

export default useFormInput;
