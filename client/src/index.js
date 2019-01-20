import React from 'react';
import ReactDOM from 'react-dom';
import { createBrowserHistory } from 'history';
import { Router, Route, Switch } from 'react-router-dom';

import Routes from './routes';

import * as serviceWorker from './serviceWorker';

const history = createBrowserHistory();

ReactDOM.render(
  <Router history={history}>
    <Switch>
      {Routes.map((prop, key) => {
        return (
          <Route
            key={key}
            path={prop.path}
            name={prop.name}
            component={prop.component}
          />
        );
      })}
    </Switch>
  </Router>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
