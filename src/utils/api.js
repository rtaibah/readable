const api = 'http://localhost:5001';

const headers = {
  Authorization: 'rami',
};

export const getCategories = () =>
  fetch(`${api}/categories`, {headers})
    .then(response => response.json())
    .then(data => data.categories);

export const getPosts = () => {
  return fetch(`${api}/posts`, {headers})
    .then(response => response.json())
    .then(data => data);
};
