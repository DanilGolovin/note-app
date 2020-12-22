import { ADD_CATEGORY, DELETE_CATEGORY, GET_CATEGORIES, START_ADD_CATEGORY, START_DELETE_CATEGORY, START_GET_CATEGORIES } from './category.types';
import { Category } from '../../types/category/category';
import { Reducer } from 'redux';
import { CategoryActions } from '../Category/category.actions';

export interface CategoryState {
  categories: Category[],
  loading: boolean,
}

const INITIAL_STATE: CategoryState = {
  categories: [],
  loading: false
}

const reducer: Reducer<typeof INITIAL_STATE, CategoryActions> = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case START_GET_CATEGORIES: {
      return {
        ...state,
        loading: true,
      }
    }
    case GET_CATEGORIES: {
      const { categories } = action.payload

      return {
        ...state,
        categories,
        loading: false,
      }
    }
    case START_ADD_CATEGORY: {
      return {
        ...state,
        loading: true,
      }
    }
    case ADD_CATEGORY: {
    
      return {
        ...state,
        categories: [...state.categories, {...action.payload.category, id: action.payload.id}],
        loading: false,
      }
    }
    case START_DELETE_CATEGORY: {
      return {
        ...state,
        loading: true,
      }
    }
    case DELETE_CATEGORY: {
      const categories = state.categories.filter((category) => category.id !== action.payload.id);
      return {
        ...state,
        categories,
        loading: false,
      }
    }
    default:
      return state;
  }
};

export default reducer;
