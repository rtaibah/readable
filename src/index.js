// React
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import Submit from './components/Submit.js';

// Redux
import {createStore, applyMiddleware, compose} from 'redux';
import {Provider} from 'react-redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';

import {combineReducers} from 'redux';

// Router
import createHistory from 'history/createBrowserHistory';
import {Route, Switch} from 'react-router';
import {
  ConnectedRouter,
  routerReducer,
  routerMiddleware,
} from 'react-router-redux';

import reducers from './reducers';

const history = createHistory();
const middleware = routerMiddleware(history);

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  combineReducers({
    ...reducers,
    router: routerReducer,
  }),
  composeEnhancers(applyMiddleware(thunk, middleware, logger)),
);

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <div>
        <Switch>
          <Route path="/submit" component={Submit} />
          <Route exact path="/:category" component={App} />
          <Route exact path="/" component={App} />
        </Switch>
      </div>
    </ConnectedRouter>
  </Provider>,
  document.getElementById('root'),
);
