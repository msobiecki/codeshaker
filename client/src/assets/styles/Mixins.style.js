import { Breakpoints } from './Variables.style';
import { css } from 'styled-components';

export const Media = Object.keys(Breakpoints).reduce((acc, label) => {
  acc[label] = (...args) => css`
    @media (max-width: ${Breakpoints[label] / 16}em) {
      ${css(...args)}
    }
  `;

  return acc;
}, {});
