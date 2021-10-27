import React from 'react';

type SubmitBtnProps = {
  text: string;
};

const SubmitBtn = ({ text }: SubmitBtnProps): JSX.Element => (
  <button type="submit" className="submit-btn">
    {text}
  </button>
);

export default SubmitBtn;
