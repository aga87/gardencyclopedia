import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faBars,
  faPlus,
  faSpinner,
  faEllipsisH,
  faUserCog,
  faSeedling,
  faSignOutAlt
} from '@fortawesome/free-solid-svg-icons';
import {
  faTrashAlt,
  faEdit,
  faCalendar
} from '@fortawesome/free-regular-svg-icons';

type IconProps = {
  name:
    | 'menu'
    | 'plus'
    | 'spinner'
    | 'more'
    | 'trash'
    | 'edit'
    | 'user-cog'
    | 'calendar'
    | 'seedling'
    | 'logout';
};

const Icon = ({ name }: IconProps): JSX.Element | null => {
  if (name === 'menu') return <FontAwesomeIcon icon={faBars} />;
  if (name === 'plus') return <FontAwesomeIcon icon={faPlus} />;
  if (name === 'spinner') return <FontAwesomeIcon icon={faSpinner} spin />;
  if (name === 'more') return <FontAwesomeIcon icon={faEllipsisH} />;
  if (name === 'trash') return <FontAwesomeIcon icon={faTrashAlt} />;
  if (name === 'edit') return <FontAwesomeIcon icon={faEdit} />;
  if (name === 'user-cog') return <FontAwesomeIcon icon={faUserCog} />;
  if (name === 'calendar') return <FontAwesomeIcon icon={faCalendar} />;
  if (name === 'seedling') return <FontAwesomeIcon icon={faSeedling} />;
  if (name === 'logout') return <FontAwesomeIcon icon={faSignOutAlt} />;
  return null;
};

export default Icon;
