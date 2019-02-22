import React, { Component } from 'react';

import { withTheme } from './../../assets/styles/Theme.style';

import Footer from '../../common/Footer/Footer';

class HomePage extends Component {
  render() {
    return (
      <div>
        <Footer theme={this.props.theme['base'].footer} />
      </div>
    );
  }
}

export default withTheme(HomePage);
