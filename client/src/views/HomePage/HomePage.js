import React, { Component, Fragment } from 'react';
import { gql } from 'apollo-boost';
import { graphql } from 'react-apollo';

import { withTheme } from './../../assets/styles/Theme.style';

import Section from './Sections/Section/Section';

const getSectionsQuery = gql`
  {
    sections {
      id
      title
      content
      category {
        name
      }
    }
  }
`;

class HomePage extends Component {
  render() {
    const { data, theme } = this.props;
    return (
      <Fragment>
        {data.loading ? (
          <div>
            <i class="material-icons">watch_later</i> LOADING
          </div>
        ) : data.error ? (
          <div>
            <i class="material-icons">error</i> ERROR
          </div>
        ) : (
          data.sections &&
          data.sections.map((section, key) => (
            <Section
              key={key}
              data={section}
              theme={theme['base'].public.section}
            />
          ))
        )}
      </Fragment>
    );
  }
}

export default graphql(getSectionsQuery)(withTheme(HomePage));
