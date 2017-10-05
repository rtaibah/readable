import {GET_POSTS, FILTER_BY, SUBMIT_VOTE} from '../actions';
import _ from 'lodash';

function Posts(state = {}, action) {
  switch (action.type) {
    case GET_POSTS:
      return _.mapKeys(action.payload.data, 'id');

    case FILTER_BY:
      return _.mapKeys(_.orderBy(state, action.payload, 'desc'), 'id');

    case SUBMIT_VOTE:
      let {id, option} = action.payload;
      let newScore =
        option === 'upVote' ? state[id].voteScore + 1 : state[id].voteScore - 1;
      return {
        ...state,
        [id]: {...state[id], voteScore: newScore},
      };

    default:
      return state;
  }
}

export default Posts;
