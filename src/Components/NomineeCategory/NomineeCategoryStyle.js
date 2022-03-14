
import { css } from '@emotion/css'
import { Breakpoints, Colors } from '../constants';

export const styGrid = css`
  display: grid;
  gap: 16px;
  padding: 0 16px;
  grid-template-columns: repeat(2, 1fr);

  @media screen and (min-width: ${Breakpoints.sm}) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media screen and (min-width: ${Breakpoints.md}) {
    grid-template-columns: repeat(5, 1fr);
  }
`;

export const styCategoryTitle = css`
  padding: 24px 24px 12px;
  margin: 0;
  position: sticky;
  top: 0;
  width: 100%;
  height: 100%;
  text-align: left;
  z-index: 1;
  font-size: 1.8rem;
  font-weight: 900;
  background-image: ${`linear-gradient(to bottom, ${Colors.black}, 80%, transparent)`};
`;

export const styCategoryContainer = css`
  margin-bottom: 48px;
`;