const fetchAPI = (method, resource) => {
  return fetch('http://localhost:5001/' + resource, {
    method: method,
    mode: 'cors',
    headers: {
      'Authorization': 'code',
    },
	})
};

export default fetchAPI;
