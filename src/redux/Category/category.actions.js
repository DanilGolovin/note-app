import { ADD_CATEGORY, DELETE_CATEGORY, SET_FILTER_CATEGORY } from './category.types';

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

export const setFilerCategory = (category) => {
  return {
    type: SET_FILTER_CATEGORY,
    payload: category,
  };
};
