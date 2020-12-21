import { START_ADD_CATEGORY, ADD_CATEGORY, DELETE_CATEGORY, START_GET_CATEGORIES, GET_CATEGORIES, START_DELETE_CATEGORY } from './category.types';
import { Category } from '../../types/category/category';

export const startGetCategories = (uid: string) => ({
  type: START_GET_CATEGORIES,
  payload: { uid },
});

export const getCategories = (categories: Category[]) => ({
  type: GET_CATEGORIES,
  payload: { categories },
});

export const startAddCategory = (uid: string, category: Category) => ({
  type: START_ADD_CATEGORY,
  payload: { uid, category },
});

export const addCategory = (category: Category, id: string) => ({
  type: ADD_CATEGORY,
  payload: { category, id },
});

export const startDeleteCategory = (uid: string, id: string) => ({
  type: START_DELETE_CATEGORY,
  payload: { uid, id },
});

export const deleteCategory = (id: string) => ({
  type: DELETE_CATEGORY,
  payload: { id },
});


export type CategoryActions = ReturnType<
  typeof startGetCategories |
  typeof getCategories |
  typeof startAddCategory | 
  typeof addCategory | 
  typeof startDeleteCategory | 
  typeof deleteCategory
>;
