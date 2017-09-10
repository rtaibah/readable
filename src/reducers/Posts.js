import {GET_POSTS} from '../actions';
import * as ReadableAPI from '../utils/api';

const intialPostsState = [];

function Posts(state = intialPostsState, action) {
  switch (action.type) {
    case GET_POSTS:
      return [...state, ...action.data];
    default:
      return state;
  }
}

export default Posts;
