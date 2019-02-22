import React, { Component, Fragment } from 'react';
import { gql } from 'apollo-boost';
import { graphql } from 'react-apollo';

import { withTheme } from './../../../assets/styles/Theme.style';

import Navigation from './Sections/Navigation/Navigation';
import Content from './Sections/Content/Content';
import Footer from './Sections/Footer/Footer';

import { Panel as StyledPanel } from '../../../assets/styles/common/Admin.style';

const getSectionsQuery = gql`
  {
    sections {
      id
      title
    }
  }
`;

class SectionsPage extends Component {
  render() {
    const { data, theme } = this.props;
    return (
      <Fragment>
        <StyledPanel theme={theme['base'].admin.panel}>
          <Navigation theme={theme['base'].admin.panel.navigation} />
          {data.loading ? (
            <div>
              <i class="material-icons">watch_later</i> LOADING
            </div>
          ) : data.error ? (
            <div>
              <i class="material-icons">error</i> ERROR
            </div>
          ) : (
            data.sections && (
              <Content
                data={data.sections}
                theme={theme['base'].admin.panel.content}
              />
            )
          )}
          <Footer theme={theme['base'].admin.panel.footer} />
        </StyledPanel>
      </Fragment>
    );
  }
}

export default graphql(getSectionsQuery)(withTheme(SectionsPage));
