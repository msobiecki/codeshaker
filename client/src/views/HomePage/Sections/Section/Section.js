import React, { Component, Fragment } from 'react';

import {
  Section as StyledSection,
  Container as StyledContainer,
  Category as StyledCategory,
  Title as StyledTitle,
  Content as StyledContent
} from './Section.style';

class Section extends Component {
  render() {
    console.log(this.props);
    const { data, theme } = this.props;
    return (
      <Fragment>
        <StyledSection theme={theme}>
          <StyledContainer>
            {data.category && data.category.name && (
              <StyledCategory theme={theme.category}>
                {data.category.name}
              </StyledCategory>
            )}
            {data.title && (
              <StyledTitle theme={theme.title}>{data.title}</StyledTitle>
            )}
            {data.content && (
              <StyledContent theme={theme.content}>
                {data.content}
              </StyledContent>
            )}
          </StyledContainer>
        </StyledSection>
      </Fragment>
    );
  }
}

export default Section;
