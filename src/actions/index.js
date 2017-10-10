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
export const DELETE_POST = 'DELETE_POST';
export const DELETE_COMMENT = 'DELETE_COMMENT';
export const SUBMIT_POST = 'SUBMIT_POST';

const headers = {
  Authorization: token,
};

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

export function deletePost(id) {
  const request = axios({
    method: 'delete',
    url: `${url}/posts/${id}`,
    headers,
  });
  return {type: DELETE_POST, payload: id};
}

export function deleteComment(id) {
  const request = axios({
    method: 'delete',
    url: `${url}/comments/${id}`,
    headers,
  });

  return {type: DELETE_COMMENT, payload: id};
}

export function submitPost(values, callback) {
  const uuidv1 = require('uuid/v1');
  const request = axios({
    method: 'post',
    url: `${url}/posts`,
    headers,
    data: {
      author: 'rami',
      id: uuidv1(),
      timestamp: Date.now(),
      title: values.title,
      body: values.content,
      category: values.categories,
    },
    //promise to navigate to home if successful
  }).then(() => callback());
  return {
    type: SUBMIT_POST,
    payload: {
      author: 'rami',
      id: Date.now(),
      timestamp: Date.now,
      values,
    },
  };
}
