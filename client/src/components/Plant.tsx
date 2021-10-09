import React from 'react';
import { useDispatch } from 'react-redux';
import { deletePlant } from '../redux/actions/plantsActions';
import { openPlantModal } from '../redux/actions/uiActions';
import { months, plantCategories } from '../utils/constants';
import MonthHeadings from './MonthHeadings';
import MonthData from './MonthData';
import Btn from './Btn';

// arrays of categories and months in readonly mode
const plantCategoriesArr = [...plantCategories] as const;
const monthsArr = ['', ...months] as const;

type PlantProps = {
  name: string;
  id: string;
  desc: string;
  category: typeof plantCategoriesArr[number];
  sowFrom: typeof monthsArr[number];
  sowUntil: typeof monthsArr[number];
  harvestFrom: typeof monthsArr[number];
  harvestUntil: typeof monthsArr[number];
};

const Plant = ({
  name,
  id,
  desc,
  category,
  sowFrom,
  sowUntil,
  harvestFrom,
  harvestUntil
}: PlantProps): JSX.Element => {
  const dispatch = useDispatch();

  const handleDeleteClick = () => {
    dispatch(deletePlant(id));
  };

  const handleEditClick = () => {
    dispatch(
      openPlantModal({
        _id: id,
        name,
        desc,
        category,
        sowFrom,
        sowUntil,
        harvestFrom,
        harvestUntil
      })
    );
  };

  return (
    <figure>
      <figcaption>
        <h1>{name}</h1>
        <p>{desc}</p>
        <p>{category}</p>
      </figcaption>
      <table>
        <thead>
          <tr>
            <MonthHeadings />
          </tr>
        </thead>
        <tbody>
          <tr>
            <MonthData monthStart={sowFrom} monthEnd={sowUntil} />
          </tr>
          <tr>
            <MonthData monthStart={harvestFrom} monthEnd={harvestUntil} />
          </tr>
        </tbody>
      </table>
      <Btn text="Delete plant" handleClick={handleDeleteClick} />
      <Btn text="Edit plant" handleClick={handleEditClick} />
    </figure>
  );
};

export default Plant;
