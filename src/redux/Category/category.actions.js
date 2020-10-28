import { ADD_CATEGORY, DELETE_CATEGORY } from './category.types';

export const addCategory = (category) => {
  return {
    type: ADD_CATEGORY,
    payload: category,
  };
};

export const deleteCategory = (category) => {
  return {
    type: DELETE_CATEGORY,
    payload: category,
  };
};
