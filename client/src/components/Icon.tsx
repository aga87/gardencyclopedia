import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faPlus, faSpinner, faEllipsisH } from '@fortawesome/free-solid-svg-icons';

type IconProps = {
  name: 'menu' | 'plus' | 'spinner' | 'more';
};

const Icon = ({ name }: IconProps): JSX.Element | null => {
  if (name === 'menu') return <FontAwesomeIcon icon={faBars} />;
  if (name === 'plus') return <FontAwesomeIcon icon={faPlus} />;
  if (name === 'spinner') return <FontAwesomeIcon icon={faSpinner} spin />;
  if (name === 'more') return <FontAwesomeIcon icon={faEllipsisH} />
  return null;
};

export default Icon;
