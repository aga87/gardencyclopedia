import React from 'react';

type SubmitButtonProps = {
  variant?: 'primary' | 'secondary';
  text: string;
};

const SubmitButton = ({
  variant = 'primary',
  text
}: SubmitButtonProps): JSX.Element => {
  let className = 'submit-button';
  if (variant !== 'primary') {
    className = `${className} ${className}--${variant}`;
  }

  return (
    <button type='submit' className={className}>
      {text}
    </button>
  );
};

export default SubmitButton;
