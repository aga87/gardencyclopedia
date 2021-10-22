import React from 'react';

type BtnProps = {
  text?: string;
  icon?: React.ReactNode;
  handleClick: () => void;
};

const Btn = ({
  text = '',
  icon = null,
  handleClick
}: BtnProps): JSX.Element => (
  <button type="button" onClick={handleClick} className="btn">
    {icon} {text}
  </button>
);

export default Btn;
