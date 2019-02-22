import React, { Component, Fragment } from 'react';

import { Section as StyledSection } from './Footer.style';

class Footer extends Component {
  render() {
    return (
      <Fragment>
        <StyledSection>
          <div>Section footer</div>
        </StyledSection>
      </Fragment>
    );
  }
}

export default Footer;
