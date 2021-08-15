import PropTypes from 'prop-types';
import React from 'react';
import { useDispatch } from 'react-redux';
import { deletePlant } from '../redux/actions/plantActions';

const DeletePlantBtn = props => {
  const { id } = props;
  const dispatch = useDispatch();

  function handleClick() {
    dispatch(deletePlant(id));
  }

  return (
    <button type="button" onClick={handleClick}>
      Delete Plant
    </button>
  );
};

DeletePlantBtn.propTypes = {
  id: PropTypes.string.isRequired
};

export default DeletePlantBtn;
