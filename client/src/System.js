import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';

// Routes
import Routes from './routes';

// Theme
import { ThemeProvider } from './assets/styles/Theme.style';

// Set client configuration
const env = process.env.REACT_APP_CLIENT_ENV || 'development';
const config = require(`./config.json`)[env];

// Setup apollo
const client = new ApolloClient({
  uri: config.host
});

class System extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
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
      </ApolloProvider>
    );
  }
}

export default System;
