import {GET_POSTS, UPVOTE_POST} from '../actions';
import * as ReadableAPI from '../utils/api';

const intialPostsState = [];

function Posts(state = intialPostsState, action) {
  switch (action.type) {
    case GET_POSTS:
      return [...state, ...action.data];
    case UPVOTE_POST:
      console.log('it worked');
      return state.filter(obj => obj.id === action.id);
    default:
      return state;
  }
}

export default Posts;
