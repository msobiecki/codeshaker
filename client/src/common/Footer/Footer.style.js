import styled from 'styled-components';
import { Container } from 'semantic-ui-react';
import { Theme } from '../../assets/styles/Theme.style';
import { Container as MixinContainer } from '../../assets/styles/Mixins.style';

export const StyledSection = styled.footer`
  display: block;
  width: 100%;
  background-color: ${props => props.theme.background};
`;

export const StyledContainer = styled(Container)`
  &&& {
    ${MixinContainer}
  }
`;

export const StyledContent = styled.div`
  display: block;
  width: 100%;
`;
