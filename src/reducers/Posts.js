import {GET_POSTS, FILTER_BY} from '../actions';
import _ from 'lodash';

function Posts(state = {}, action) {
  switch (action.type) {
    case GET_POSTS:
      return _.mapKeys(action.payload.data, 'id');

    case FILTER_BY:
      return _.mapKeys(_.orderBy(state, action.payload, 'desc'), 'id');

    default:
      return state;
  }
}

export default Posts;
