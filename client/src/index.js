import React from 'react';
import ReactDOM from 'react-dom';
import { createBrowserHistory } from 'history';
import { Router } from 'react-router-dom';

import * as serviceWorker from './serviceWorker';

import System from './System';

import './assets/styles/reset.css';
import './assets/styles/base.css';

const history = createBrowserHistory();

ReactDOM.render(
  <Router history={history}>
    <System />
  </Router>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
