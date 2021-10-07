import { useState } from 'react';

type ReturnType = {
  value: string;
  handleChange: (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLSelectElement>
  ) => void;
};

const useFormInput = (initialValue: string): ReturnType => {
  const [value, setValue] = useState(initialValue);

  function handleChange(
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLSelectElement>
  ) {
    setValue(e.target.value);
  }

  return { value, handleChange };
};

export default useFormInput;
