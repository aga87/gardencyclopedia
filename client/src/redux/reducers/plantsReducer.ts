import {
  ADD_PLANT,
  DELETE_PLANT,
  EDIT_PLANT,
  GET_PLANTS,
  PLANTS_LOADING,
  FILTER_PLANTS,
  SORT_PLANTS
} from '../actions/types';
import { sortPlants } from '../../utils/plants-utils';

export type StatusMsg = {
  id: number;
  msg: string;
};

const initialState = {
  plants: [] as Plant[],
  isLoading: false,
  filter: '' as Category,
  sort: 'name' as Sort,
  statusMsg: {
    id: 0,
    msg: ''
  } as StatusMsg
};

type State = typeof initialState;

type Action =
  | {
      type: typeof GET_PLANTS;
      payload: Plant[];
    }
  | {
      type: typeof PLANTS_LOADING;
    }
  | {
      type: typeof DELETE_PLANT;
      payload: string;
    }
  | {
      type: typeof ADD_PLANT | typeof EDIT_PLANT;
      payload: Plant;
    }
  | {
      type: typeof FILTER_PLANTS;
      payload: Category;
    }
  | {
      type: typeof SORT_PLANTS;
      payload: Sort;
    };

const plantsReducer = (state = initialState, action: Action): State => {
  switch (action.type) {
    case GET_PLANTS:
      return {
        ...state,
        plants: action.payload,
        isLoading: false
      };
    case PLANTS_LOADING:
      return {
        ...state,
        isLoading: true
      };
    case FILTER_PLANTS: {
      const filter = action.payload;
      return {
        ...state,
        filter
      };
    }
    case SORT_PLANTS: {
      return {
        ...state,
        sort: action.payload
      };
    }
    case ADD_PLANT: {
      const newPlant = action.payload;
      return {
        ...state,
        plants: [newPlant, ...state.plants],
        statusMsg: {
          id: state.statusMsg.id + 1,
          msg: `Plant ${newPlant.name} added.`
        }
      };
    }
    case EDIT_PLANT: {
      const editedPlant = action.payload;
      const updatedPlants = state.plants.map((plant: Plant) => {
        if (plant._id === editedPlant._id) return editedPlant;
        return plant;
      });

      return {
        ...state,
        plants: updatedPlants,
        statusMsg: {
          id: state.statusMsg.id + 1,
          msg: `Plant ${editedPlant.name} edited.`
        }
      };
    }
    case DELETE_PLANT: {
      const id = action.payload;
      const remainingPlants = state.plants.filter(
        (plant: Plant) => plant._id !== id
      );
      return {
        ...state,
        plants: remainingPlants,
        statusMsg: {
          id: state.statusMsg.id + 1,
          msg: `Plant deleted.`
        }
      };
    }
    default:
      return state;
  }
};

export default plantsReducer;

// Selectors
export const selectIsLoading = (state: State): boolean => state.isLoading;
export const selectFilter = (state: State): Category => state.filter;
export const selectSort = (state: State): Sort => state.sort;

export const selectFilteredSortedPlantIds = (state: State): string[] => {
  // Filter by category
  const filteredPlants = state.plants.filter(plant => {
    if (!state.filter) return state.plants;
    return plant.category === state.filter;
  });
  // Sort
  const sortedFilteredPlants = sortPlants(filteredPlants, state.sort);
  // Get ids
  const sortedFilteredPlantIds = sortedFilteredPlants.map(plant => plant._id);
  return sortedFilteredPlantIds as string[];
};

export const selectPlantById = (state: State, id: string): Plant | null => {
  const selectedPlant = state.plants.find(plant => plant._id === id);
  if (!selectedPlant) return null;
  return selectedPlant;
};

export const selectStatusMsg = (state: State): StatusMsg => state.statusMsg;
