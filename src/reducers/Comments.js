import {GET_COMMENTS} from '../actions';
import _ from 'lodash';

function Comments(state = {}, action) {
  switch (action.type) {
    case GET_COMMENTS:
      return _.mapKeys(action.payload.data, 'id');

    default:
      return state;
  }
}

export default Comments;
