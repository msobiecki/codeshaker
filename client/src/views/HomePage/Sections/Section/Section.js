import React, { Component, Fragment } from 'react';

class Section extends Component {
  render() {
    const { data } = this.props;
    return (
      <Fragment>
        {data.title && <div>{data.title}</div>}
        {data.content && <div>{data.content}</div>}
      </Fragment>
    );
  }
}

export default Section;
