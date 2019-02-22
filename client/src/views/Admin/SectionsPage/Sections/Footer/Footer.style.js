import styled from 'styled-components';
import { Media } from '../../../../../assets/styles/Mixins.style';

export const Section = styled.div`
  position: relative;
  display: block;
  width: 100%;
  padding: 2rem;
  transition: 0.2s;

  ${Media.sm`
    padding: 1rem;
  `}
`;
