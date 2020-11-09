import { ADD_CATEGORY, DELETE_CATEGORY } from './category.types';
import { Category } from '../../types/category/category';

export const addCategory = (category: Category) => ({
  type: ADD_CATEGORY,
  payload: { category },
});

export const deleteCategory = (category: Category) => ({
  type: DELETE_CATEGORY,
  payload: { category },
});

export type CategoryActions = ReturnType<typeof addCategory | typeof deleteCategory>;
