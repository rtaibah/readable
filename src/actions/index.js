import axios from 'axios';

const url = 'http://localhost:5001';
const token = 'code';

export const GET_CATEGORIES = 'GET_CATEGORIES';
export const GET_POSTS = 'GET_POSTS';
export const FILTER_BY = 'FILTER_BY';
export const SUBMIT_VOTE = 'SUBMIT_VOTE';
export const GET_SINGLE_POST = 'GET_SINGLE_POST';
export const GET_COMMENTS = 'GET_COMMENTS';
export const SUBMIT_VOTE_COMMENT = 'SUBMIT_VOTE_COMMENT';

const headers = {
  Authorization: token,
};

// Posts page actions
export function getCategories() {
  const request = axios({
    method: 'get',
    url: `${url}/categories`,
    headers,
  });
  return {type: GET_CATEGORIES, payload: request};
}

export function getPosts() {
  const request = axios({
    method: 'get',
    url: `${url}/posts`,
    headers,
  });
  return {type: GET_POSTS, payload: request};
}

export function filterBy(filter) {
  return {
    type: FILTER_BY,
    payload: filter.option,
  };
}

export function submitVote(vote) {
  const request = axios({
    method: 'post',
    url: `${url}/posts/${vote.postId}`,
    headers,
    data: {
      option: vote.option,
    },
  });
  return {
    type: SUBMIT_VOTE,
    payload: {
      id: vote.postId,
      option: vote.option,
    },
  };
}

// Single Post actions

export function getSinglePost(id) {
  const request = axios({
    method: 'get',
    url: `${url}/posts/${id}`,
    headers,
  });
  return {type: GET_SINGLE_POST, payload: request};
}

export function getComments(id) {
  const request = axios({
    method: 'get',
    url: `${url}/posts/${id}/comments`,
    headers,
  });
  return {type: GET_COMMENTS, payload: request};
}

export function submitVoteComment(vote) {
  const request = axios({
    method: 'post',
    url: `${url}/comments/${vote.commentId}`,
    headers,
    data: {
      option: vote.option,
    },
  });
  return {
    type: SUBMIT_VOTE_COMMENT,
    payload: {
      id: vote.commentId,
      option: vote.option,
    },
  };
}
