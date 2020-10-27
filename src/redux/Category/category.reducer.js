import { ADD_CATEGORY, DELETE_CATEGORY, SET_FILTER_CATEGORY } from './category.types';

const reducer = (state = [{ name: 'all' }], action) => {
  switch (action.type) {
    case ADD_CATEGORY: {
      console.log(state);
      return state.concat([action.payload]);
    }
    case DELETE_CATEGORY: {
      console.log(state);
      return state.filter((category) => category.name !== action.payload.name);
    }
    // case SET_FILTER_CATEGORY: {
    //   console.log(state);
    //   const oldCategoryFilter = state.find((category) => category.filterSelected === true);
    //   const newCategoryFilter = state.find((category) => category.name === action.payload.name);
    //   oldCategoryFilter.filterSelected = false;
    //   newCategoryFilter.filterSelected = true;
    //   return [...state, newCategoryFilter, oldCategoryFilter];
    // }
    default:
      return state;
  }
};

export default reducer;
