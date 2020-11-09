import { ADD_CATEGORY, DELETE_CATEGORY } from './category.types';
import { Category } from '../../types/category/category';
import { Reducer } from 'redux';
import { CategoryActions } from '../Category/category.actions';

const INITIAL_STATE: Category[] = [];

const reducer: Reducer<typeof INITIAL_STATE, CategoryActions> = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ADD_CATEGORY: {
      return state.concat([action.payload.category]);
    }
    case DELETE_CATEGORY: {
      console.log(action);
      return state.filter((category) => category.name !== action.payload.category.name);
    }
    default:
      return state;
  }
};

export default reducer;
