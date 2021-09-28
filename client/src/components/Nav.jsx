import React from 'react';
import { useDispatch } from 'react-redux';
import { openPlantModal } from '../redux/actions/uiActions';
import Btn from './Btn';
import Icon from './Icon';

const Nav = () => {
  const dispatch = useDispatch();

  return (
    <nav>
      <Icon name="menu" />
      <Btn
        icon={<Icon name="plus" />}
        handleClick={() => dispatch(openPlantModal())}
      />
    </nav>
  );
};

export default Nav;
