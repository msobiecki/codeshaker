import React, { Component } from 'react';

import {
  StyledSection as Section,
  StyledContainer as Container,
  StyledContent as Content
} from './Footer.style.js';

class Footer extends Component {
  render() {
    return (
      <Section theme={this.props.theme}>
        <Container>
          <Content>'Test'</Content>
        </Container>
      </Section>
    );
  }
}

export default Footer;
