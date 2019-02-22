import React, { Component, Fragment } from 'react';

import { Section as StyledSection } from './Navigation.style';

class Navigation extends Component {
  render() {
    return (
      <Fragment>
        <StyledSection>
          <div>Section navigation</div>
        </StyledSection>
      </Fragment>
    );
  }
}

export default Navigation;
