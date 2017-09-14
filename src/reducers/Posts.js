import {GET_POSTS, VOTE_POST} from '../actions';
import * as ReadableAPI from '../utils/api';

const intialPostsState = [];

function Posts(state = intialPostsState, action) {
  const {data, id, option} = action;
  switch (action.type) {
    // Get posts from API
    case GET_POSTS:
      return [...state, ...data];

    // Upvoting and downvoting mechanism
    case VOTE_POST:
      const post = state.find(v => v.id === id);
      let voteScore = post.voteScore;
      if (option === 'upVote') {
        return [...state];
        post.voteScore += 1;
      } else if (option === 'downVote') {
        post.voteScore -= 1;
      }
      console.log('Updated voteScore to: ', post.voteScore);

    default:
      return state;
  }
}

export default Posts;
