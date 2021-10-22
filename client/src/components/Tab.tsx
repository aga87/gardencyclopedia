import React from 'react';

type TabProps = {
  text: string;
  selected: boolean;
  handleClick: () => void;
};

const Tab = ({ text, selected, handleClick }: TabProps): JSX.Element => (
  <button
    type="button"
    onClick={handleClick}
    className={selected ? 'tab tab--selected' : 'tab'}
  >
    {text}
  </button>
);

export default Tab;
