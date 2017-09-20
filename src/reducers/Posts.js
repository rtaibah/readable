import {GET_POSTS, VOTE_POST} from '../actions';
import _ from 'lodash';

const intialPostsState = {};

function Posts(state = intialPostsState, action) {
  const {data, id, option} = action;
  switch (action.type) {
    // Get posts from API
    case GET_POSTS:
      return {...state, ..._.mapKeys(data, 'id')};

    // Upvoting and downvoting mechanism
    case VOTE_POST:
      console.log(state, option, id);
      let newScore =
        option === 'upVote' ? state[id].voteScore + 1 : state[id].voteScore - 1;
      return {...state, [id]: {...state[id], voteScore: newScore}};

    default:
      return state;
  }
}

export default Posts;
