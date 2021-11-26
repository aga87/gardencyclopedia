import React from 'react';

type SubmitButtonProps = {
  text: string;
};

const SubmitButton = ({ text }: SubmitButtonProps): JSX.Element => (
  <button type='submit' className='submit-button'>
    {text}
  </button>
);

export default SubmitButton;
