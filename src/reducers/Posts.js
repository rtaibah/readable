import {GET_POSTS} from '../actions';
import _ from 'lodash';

function Posts(state = {}, action) {
  switch (action.type) {
    case GET_POSTS:
      return _.mapKeys(action.payload.data, 'id');

    default:
      return state;
  }
}

export default Posts;
