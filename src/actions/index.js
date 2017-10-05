import axios from 'axios';

const url = 'http://localhost:5001';
const token = 'code';

export const GET_CATEGORIES = 'GET_CATEGORIES';
export const GET_POSTS = 'GET_POSTS';

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
