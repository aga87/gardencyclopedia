import React from 'react';
import { useDispatch } from 'react-redux';
import { openPlantModal } from '../redux/actions/uiActions';
import Btn from './Btn';
import Icon from './Icon';

const Nav = () => {
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(openPlantModal());
  };

  return (
    <nav>
      <Icon name="menu" />
      <Btn icon={<Icon name="plus" />} handleClick={handleClick} />
    </nav>
  );
};

export default Nav;
