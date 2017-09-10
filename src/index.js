import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App.js';
import registerServiceWorker from './registerServiceWorker';
import reducer from './reducers';
import {createStore} from 'redux';
import {Provider} from 'react-redux';

const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);

console.log(store.getState());

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
);
registerServiceWorker();
