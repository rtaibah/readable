const api = 'http://localhost:5001';
const token = 'code';
const type = 'application/json';

const headers = {
  Authorization: token,
};

// GET METHODS

// Gets all categories in Readable
export const getCategories = () =>
  fetch(`${api}/categories`, {headers})
    .then(response => response.json())
    .then(data => data.categories)
    .catch(e => console.log('error, e'));

// Gets all posts in a category
export const getCategoryPosts = category =>
  fetch(`${api}/${category}/posts`, {headers})
    .then(response => response.json())
    .then(data => data)
    .catch(e => console.log('error, e'));

// Get all posts
export const getPosts = () =>
  fetch(`${api}/posts`, {headers})
    .then(response => response.json())
    .then(data => data)
    .catch(e => console.log('error, e'));

// Get a single Post
export const getSinglePost = id =>
  fetch(`${api}/posts/${id}`, {headers})
    .then(response => response.json())
    .then(data => data)
    .catch(e => console.log('error, e'));

// Get all comments in a post
export const getComments = id =>
  fetch(`${api}/posts/${id}/comments`, {headers})
    .then(response => response.json())
    .then(data => data)
    .catch(e => console.log('error, e'));

// Get comment details
export const commentDetails = id =>
  fetch(`${api}/comments/${id}`, {headers})
    .then(response => response.json())
    .then(data => data)
    .catch(e => console.log('error, e'));

// POST METHODS

export const newPost = obj =>
  fetch(`${api}/posts`, {
    method: 'POST',
    headers: {
      ...headers,
      'Content-Type': type,
      Authorization: token,
    },
    body: JSON.stringify(obj),
  })
    .then(response => response.json())
    .then(data => {
      return data;
    })
    .catch(e => console.log('error, e'));

export const vote = (vote, id) =>
  fetch(`${api}/posts/${id}`, {
    method: 'POST',
    headers: {
      ...headers,
      'Content-Type': type,
      Authorization: token,
    },
    body: JSON.stringify(vote),
  })
    .then(console.log(JSON.stringify(vote)))
    .then(response => response.json())
    .then(data => {
      return data;
    })
    .catch(e => console.log('error, e'));
