import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import Routes from './routes';

import { ThemeProvider } from './assets/styles/Theme.style';

class System extends Component {
  render() {
    return (
      <ThemeProvider>
        <Switch>
          {Routes.map((prop, key) => {
            return (
              <Route
                key={key}
                path={prop.path}
                name={prop.name}
                exact={prop.exact}
                component={prop.component}
              />
            );
          })}
        </Switch>
      </ThemeProvider>
    );
  }
}

export default System;
