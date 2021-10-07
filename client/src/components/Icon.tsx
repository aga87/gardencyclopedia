import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faPlus, faSpinner } from '@fortawesome/free-solid-svg-icons';

type IconProps = {
  name: 'menu' | 'plus' | 'spinner';
};

const Icon = ({ name }: IconProps): JSX.Element | null => {
  if (name === 'menu') return <FontAwesomeIcon icon={faBars} />;
  if (name === 'plus') return <FontAwesomeIcon icon={faPlus} />;
  if (name === 'spinner') return <FontAwesomeIcon icon={faSpinner} spin />;
  return null;
};

export default Icon;
