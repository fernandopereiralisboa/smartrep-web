import { applyMiddleware, combineReducers, compose, createStore } from 'redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import React from 'react';
import ReactDOM from 'react-dom';
import thunkMiddleware from 'redux-thunk';

import 'semantic-ui-css/semantic.min.css';

import App from './components/App';
import AuthenticatedRoute from './components/AuthenticatedRoute';
import NotFound from './components/NotFound';
import SignIn from './components/SignIn';
import Dashboard from './components/Dashboard';

import registerServiceWorker from './registerServiceWorker';

const reducers = combineReducers({});

const store = createStore(
  reducers,
  compose(
    applyMiddleware(
      thunkMiddleware
    ),
  ),
);

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <Switch>
        <AuthenticatedRoute exact path="/" component={App} />
        <Route path="/signin" component={SignIn} />
        <Route path="/dashboard" component={Dashboard} />
        <Route component={NotFound} />
      </Switch>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);

registerServiceWorker();
