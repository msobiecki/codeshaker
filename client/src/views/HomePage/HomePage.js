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
    }
  }
`;

class HomePage extends Component {
  render() {
    const { data } = this.props;
    console.log(this.props);
    return (
      <Fragment>
        {data.loading ? (
          <div>LOADING</div>
        ) : data.error ? (
          <div>ERROR</div>
        ) : (
          data.sections &&
          data.sections.map((section, key) => (
            <Section key={key} data={section} />
          ))
        )}
        {/* <Footer theme={this.props.theme['base'].footer} /> */}
      </Fragment>
    );
  }
}

export default graphql(getSectionsQuery)(withTheme(HomePage));
