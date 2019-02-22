import React, { Component, Fragment } from 'react';

import { Section as StyledSection } from './Content.style';

class Content extends Component {
  render() {
    const { data } = this.props;
    return (
      <Fragment>
        <StyledSection>
          {data && (
            <table>
              <tr>
                <th>LP</th>
                <th>Title</th>
                <th>MENU</th>
              </tr>

              {data.map((item, key) => (
                <tr>
                  <td>{item.id}</td>
                  <td>{item.title}</td>
                  <td>Menu item</td>
                </tr>
              ))}
            </table>
          )}
        </StyledSection>
      </Fragment>
    );
  }
}

export default Content;
