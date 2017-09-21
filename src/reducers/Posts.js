import {GET_POSTS, VOTE_POST, GET_SINGLE_POST} from '../actions';
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
      let newScore =
        option === 'upVote' ? state[id].voteScore + 1 : state[id].voteScore - 1;
      return {...state, [id]: {...state[id], voteScore: newScore}};

    // Get a single post frop API
    case GET_SINGLE_POST:
      console.log('I am a GET_SINGLE_POST');
      return {...state, ...data};

    default:
      return state;
  }
}

export default Posts;
