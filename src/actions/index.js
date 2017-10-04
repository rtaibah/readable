import axios from 'axios';

const url = 'http://localhost:5001';
const token = 'code';

export const GET_CATEGORIES = 'GET_CATEGORIES';
export const GET_POSTS = 'GET_POSTS';

const headers = {
  Authorization: token,
};

export function getCategories() {}

export function getPosts() {
  const request = axios({
    method: 'get',
    url: `${url}/posts`,
    headers: {Authorization: token},
  });
  return {type: GET_POSTS, payload: request};
}
