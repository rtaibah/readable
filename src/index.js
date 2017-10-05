// React
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

// Redux
import {createStore, applyMiddleware, compose, combineReducers} from 'redux';
import {Provider} from 'react-redux';
import Logger from 'redux-logger';
import ReduxPromise from 'redux-promise';

// Reducers
import reducers from './reducers';

// Components
import Posts from './components/Posts';
import Submit from './components/Submit';
import PostPage from './components/PostPage';

// Router
import {Route, Switch} from 'react-router';
import {BrowserRouter} from 'react-router-dom';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  combineReducers({
    ...reducers,
  }),
  composeEnhancers(applyMiddleware(Logger, ReduxPromise)),
);

ReactDOM.render(
  <div className="App">
    <div className="App__header">
      <h1>
        <a href="/">READABLE</a>
      </h1>
    </div>

    <Provider store={store}>
      <BrowserRouter>
        <Switch>
          <Route path="/submit" component={Submit} />
          <Route path="/:category/:post_id" component={PostPage} />
          <Route path="/:category" component={Posts} />
          <Route path="/" component={Posts} />
        </Switch>
      </BrowserRouter>
    </Provider>
  </div>,
  document.getElementById('root'),
);
