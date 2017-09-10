import {GET_CATEGORIES} from '../actions';
import * as ReadableAPI from '../utils/api';

const intialCategoriesState = {
  categories: {},
};

function Categories(state = intialCategoriesState, action) {
  switch (action.type) {
    case GET_CATEGORIES:
      return {
        ...state,
        category: ReadableAPI.getCategories(),
      };
    default:
      return state;
  }
}

export default Categories;
