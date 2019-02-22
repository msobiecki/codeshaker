import styled from 'styled-components';
import { Media } from '../Mixins.style';

export const Panel = styled.div`
  position: relative;
  display: block;
  width: 100%;
  padding: 2rem;
  background-color: ${props => props.theme.background};
  transition: 0.2s;

  ${Media.sm`
    padding: 1rem;
  `}
`;
