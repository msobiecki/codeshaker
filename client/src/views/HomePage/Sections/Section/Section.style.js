import styled from 'styled-components';
import { Media } from '../../../../assets/styles/Mixins.style';

export const Section = styled.div`
  position: relative;
  display: block;
  width: 100%;
  padding: 18rem 0;
  background-color: ${props => props.theme.background};
  transition: 0.2s;

  ${Media.sm`
    padding: 10rem 0;
  `}

  ${Media.xs`
    padding: 5rem 0;
  `}
`;

export const Container = styled.div`
  display: block;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  transition: 0.2s;
  padding: 0 2rem;

  ${Media.sm`
    padding: 0 1rem;
  `}
`;

export const Category = styled.div`
  margin: 0 auto 2.1rem;
  transition: 0.2s;
  color: ${props => props.theme.color};
  font-size: 1.6rem;
  font-weight: 700;
  line-height: 1.3125;
  text-transform: uppercase;
  letter-spacing: 0.25rem;
  cursor: default;

  &::before {
    content: '/';
  }

  ${Media.sm`
    margin: 0 auto 1.5rem;
    font-size: 1.4rem;
  `}

  ${Media.xs`
    margin: 0 auto 1.2rem;
    font-size: 1.2rem;
  `}
`;

export const Title = styled.div`
  display: block;
  width: 100%;
  margin: 0 auto 4.8rem;
  transition: 0.2s;
  color: ${props => props.theme.color};
  font-size: 6rem;
  font-family: 'Merriweather', serif;
  font-weight: 700;
  line-height: 1.3;
  letter-spacing: -0.03rem;
  cursor: default;

  ${Media.sm`
    margin: 0 auto 2rem;
    font-size: 4rem;
  `}

  ${Media.xs`
    margin: 0 auto 1.8rem;
    font-size: 2.5rem;
  `}
`;

export const Content = styled.div`
  display: block;
  width: 100%;
  margin: 0 auto 3.6rem;
  transition: 0.2s;
  color: ${props => props.theme.color};
  font-size: 2.4rem;
  line-height: 1.75;
  cursor: default;

  ${Media.sm`
    margin: 0 auto 2.5rem;
    font-size: 2rem;
  `}

  ${Media.xs`
    margin: 0 auto 1.4rem;
    font-size: 1.8rem;
  `}
`;
