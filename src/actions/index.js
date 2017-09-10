import * as ReadableAPI from '../utils/api';

export const GET_CATEGORIES = 'GET_CATEGORIES';
export const ADD_POST = 'ADD_POST';
export const VOTE_POST = 'VOTE_POST';
export const VOTE_COMMENT = 'VOTE_COMMENT';
export const NEW_COMMENT = 'NEW_COMMENT';
export const EDIT_POST = 'EDIT_POST';
export const EDIT_COMMENT = 'EDIT_COMMENT';
export const DELETE_POST = 'DELETE_POST';
export const DELETE_COMMENT = 'DELETE_COMMENT';

export function getCategories() {
  return dispatch => {
    ReadableAPI.getCategories().then(categories =>
      dispatch({type: GET_CATEGORIES, data: categories}),
    );
  };
}

export function addPost({id, timestamp, title, body, owner, category}) {
  return {
    type: 'ADD_POST',
    id,
    timestamp,
    title,
    body,
    owner,
    category,
  };
}

export function votePost(vote, id) {
  return {
    type: 'VOTE_POST',
    vote,
    id,
  };
}

export function voteComment() {
  return {
    type: 'VOTE_COMMENT',
  };
}

export function newComment() {
  return {
    type: 'NEW_COMMENT',
  };
}

export function editPost() {
  return {
    type: 'EDIT_POST',
  };
}

export function editComment() {
  return {
    type: 'EDIT_COMMENT',
  };
}

export function deletePost() {
  return {
    type: 'DELETE_POST',
  };
}

export function deleteComment() {
  return {
    type: 'DELETE_COMMENT',
  };
}
