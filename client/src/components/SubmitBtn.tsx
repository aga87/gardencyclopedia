import React from 'react';

type SubmitBtnProps = {
  variant?: 'primary' | 'secondary';
  text: string;
};

const SubmitBtn = ({
  variant = 'primary',
  text
}: SubmitBtnProps): JSX.Element => {
  let className = 'submit-btn';
  if (variant !== 'primary') {
    className = `${className} ${className}--${variant}`;
  }

  return (
    <button type="submit" className={className}>
      {text}
    </button>
  );
};

export default SubmitBtn;
