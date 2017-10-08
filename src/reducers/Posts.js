import {
  GET_POSTS,
  FILTER_BY,
  SUBMIT_VOTE,
  GET_SINGLE_POST,
  GET_COMMENTS,
} from '../actions';
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

    case GET_SINGLE_POST:
      console.log(action.payload.data);
      return action.payload.data;
    // return {
    //   [action.payload.data.id]: action.payload.data,
    // };

    default:
      return state;
  }
}

export default Posts;
