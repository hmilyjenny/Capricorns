import React from 'react';
import {render} from 'react-dom';
import { Provider } from 'react-redux';
import { Router,browserHistory } from 'react-router';
import configureStore from './stores/configureStore';
import routes from './routes';
import '../static/img/intro-bg.jpg';

const store = configureStore();

render(
  <Provider store={store}>
    <Router history={browserHistory} routes={routes} />
  </Provider>, document.getElementById('app')
);
