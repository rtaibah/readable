import {GET_COMMENTS, SUBMIT_VOTE_COMMENT, DELETE_COMMENT} from '../actions';
import _ from 'lodash';

function Comments(state = {}, action) {
  switch (action.type) {
    case GET_COMMENTS:
      return _.mapKeys(
        _.orderBy(action.payload.data, 'voteScore', 'desc'),
        'id',
      );

    case SUBMIT_VOTE_COMMENT:
      let {id, option} = action.payload;
      let newScore =
        option === 'upVote' ? state[id].voteScore + 1 : state[id].voteScore - 1;
      return {
        ...state,
        [id]: {...state[id], voteScore: newScore},
      };

    case DELETE_COMMENT:
      return _.omit(state, [action.payload]);

    default:
      return state;
  }
}

export default Comments;
